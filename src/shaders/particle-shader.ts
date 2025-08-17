import { ShaderConfig } from './types'

const particleVertexShader = `
  uniform float uTime;
  uniform float uFreq;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const particleFragmentShader = `
  uniform float uTime;
  uniform float uFreq;
  uniform vec3 ucameraPosition;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  // Hash function for pseudo-random number generation
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  // Noise function for particle distribution
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Function to create moving particles that respond to audio and fresnel
  float particles(vec2 uv, float time, float freq, float fresnel) {
    float particleField = 0.0;
    
    // Create multiple layers of particles with different sizes
    for (int i = 0; i < 5; i++) {
      float layer = float(i);
      float speed = 0.3 + layer * 0.5;
      float scale = 200.0 + layer * 50.0; // Increased scale for more particles
      
      // Basic time-based flow - always active, larger movement
      vec2 timeFlow = vec2(
        sin(time * 0.2 + layer * 0.7) * 0.2,
        cos(time * 0.15 + layer * 1.2) * 0.2
      );
      
      // Audio-responsive movement
      vec2 audioOffset = vec2(
        sin(time * speed + layer * 1.5) * 0.05 * freq,
        cos(time * speed * 0.7 + layer * 2.1) * 0.05 * freq
      );
      
      // Apply audio offset to UV coordinates for particle movement
      vec2 animatedUV = uv + audioOffset + timeFlow;
      float noiseVal = noise(animatedUV * scale);
      
      // Adjust threshold based on fresnel - lower threshold in fresnel regions
      float baseThreshold = 0.99 + layer * 0.008; // Lowered base threshold for more particles
      float fresnelInfluence = fresnel * 0.95; // Increased fresnel influence
      float threshold = baseThreshold - fresnelInfluence;
      
      float particle = step(threshold, noiseVal);
      
      // Make particles respond to frequency (no time-based pulsing)
      float freqResponse = 1.0 + 0.3 * freq;
      particle *= freqResponse;
      
      // Particle size - always tiny
      float particleSize = 0.2;
      particleField += particle * particleSize;
    }
    
    return particleField;
  }

  void main() {
    // Calculate view direction from camera position for proper rim effect
    vec3 viewDirection = normalize(ucameraPosition - vPosition);
    
    // Calculate fresnel effect using dot product for particle distribution
    float fresnel = dot(vNormal, viewDirection);
    fresnel = 1.0 - fresnel; // Invert to get higher values at the rim
    fresnel = pow(fresnel, 3.5); // Apply power for control over falloff and sharpness
    
    // Create particles that respond to audio
    float particleDensity = particles(vUv, uTime, uFreq, fresnel);
    
    // Particle color and alpha - separate from rim
    vec3 particleColor = vec3(0.1, 0.02, 0.1); // Dark navy for particles
    float alpha = particleDensity * 1.0; // Separate alpha for particles
    
    gl_FragColor = vec4(particleColor, alpha);
  }
`

export const particleShaderConfig: ShaderConfig = {
  vertexShader: particleVertexShader,
  fragmentShader: particleFragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uFreq: { value: 0 },
    uIntensity: { value: 6 },
    ucameraPosition: { value: [0, 0, 10] },
    transparent: true
  }
}
