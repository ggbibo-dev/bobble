import { ShaderConfig } from './types'

const haloVertexShader = `
  uniform float uTime;
  uniform float uFreq;
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    
    // Simple position calculation - no time multiplication that causes expansion
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const haloFragmentShader = `
  uniform float uTime;
  uniform float uFreq;
  uniform float uIntensity;
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

  // Function to create moving particles that respond to audio
  float particles(vec2 uv, float time, float freq) {
    float particleField = 0.0;
    
    // Create multiple layers of particles with different sizes
    for (int i = 0; i < 5; i++) {
      float layer = float(i);
      float speed = 0.3 + layer * 0.5;
      float scale = 120.0 + layer * 30.0; // Increased scale for more particles
      
      // Make particles move based on frequency - much more subtle movement
      vec2 audioOffset = vec2(
        sin(time * speed + layer * 1.5) * 0.05 * freq,
        cos(time * speed * 0.7 + layer * 2.1) * 0.05 * freq
      );
      
      float noiseVal = noise(uv * scale);
      float threshold = 0.97 + layer * 0.005; // Threshold for particles
      float particle = step(threshold, noiseVal);
      
      // Make particles respond to frequency (no time-based pulsing)
      float freqResponse = 1.0 + 0.3 * freq;
      particle *= freqResponse;
      
      // Particle size
      float particleSize = 0.2;
      particleField += particle * particleSize;
    }
    
    return particleField;
  }

  void main() {
    // Calculate view direction from camera position for proper rim effect
    vec3 viewDirection = normalize(ucameraPosition - vPosition);
    
    // Calculate fresnel effect using dot product
    float fresnel = dot(vNormal, viewDirection);
    fresnel = 1.0 - fresnel; // Invert to get higher values at the rim
    fresnel = pow(fresnel, 3.0); // Apply power for control over falloff and sharpness
    
    // Create particles that respond to audio
    float particleDensity = particles(vUv, uTime, uFreq);
    
    // Basic lighting for depth
    vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
    float diffuse = max(0.0, dot(vNormal, lightDirection));
    
    // Colors
    vec3 baseColor = vec3(0.01, 0.02, 0.1); // Very dark navy
    vec3 rimColor = vec3(0.2, 0.4, 1.0); // Bright blue for halo
    vec3 particleColor = vec3(0.1, 0.02, 0.1); // Very dark navy
    
    // Start with base lighting
    vec3 finalColor = baseColor * (0.2 + 0.3 * diffuse);
    
    // Add the fresnel rim effect
    finalColor = mix(finalColor, rimColor, fresnel * 0.8);
    
    // Add particles on top
    if (particleDensity > 0.0) {
      finalColor = mix(finalColor, particleColor, particleDensity * 0.6);
    }
    
    // Alpha - combine fresnel and particles
    float alpha = fresnel * 0.9;
    alpha = max(alpha, particleDensity * 0.4);
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`

export const haloBlobShaderConfig: ShaderConfig = {
  vertexShader: haloVertexShader,
  fragmentShader: haloFragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uFreq: { value: 0 },
    uIntensity: { value: 6 },
    ucameraPosition: { value: [0, 0, 10] },
    transparent: true
  }
}
