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
    
    // Add gentle pulsing animation based on frequency
    float pulse = 1.0 + 0.1 * sin(uTime * 2.0) * uFreq;
    vec3 newPosition = position * pulse;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`

const haloFragmentShader = `
  uniform float uTime;
  uniform float uFreq;
  uniform float uIntensity;
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

  // Function to create moving particles
  float particles(vec2 uv, float time, float freq) {
    float particleField = 0.0;
    
    // Create multiple layers of particles with different speeds
    for (int i = 0; i < 3; i++) {
      float layer = float(i);
      float speed = 0.5 + layer * 0.3;
      float scale = 20.0 + layer * 10.0;
      
      vec2 movingUv = uv + vec2(
        sin(time * speed + layer * 1.5) * 0.1,
        cos(time * speed * 0.7 + layer * 2.1) * 0.1
      );
      
      float noiseVal = noise(movingUv * scale + time * speed);
      float threshold = 0.85 + layer * 0.05;
      float particle = step(threshold, noiseVal);
      
      // Make particles pulse with frequency
      float pulse = 1.0 + 0.3 * sin(time * 3.0 + layer) * freq;
      particle *= pulse;
      
      particleField += particle * (0.8 - layer * 0.2);
    }
    
    return particleField;
  }

  void main() {
    // Calculate distance from center for halo effect
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(vUv, center);
    
    // Create halo gradient - brightest at edges, darker in center
    float haloGradient = smoothstep(0.0, 0.3, dist) * smoothstep(1.0, 0.7, dist);
    
    // Add some variation to the halo
    float haloNoise = noise(vUv * 15.0 + uTime * 0.5) * 0.2;
    haloGradient += haloNoise;
    
    // Create moving particles
    float particleDensity = particles(vUv, uTime, uFreq);
    
    // Distribute particles more densely at the edges (halo effect)
    float edgeFalloff = smoothstep(0.0, 0.4, dist) * smoothstep(1.0, 0.6, dist);
    float centerFalloff = 1.0 - smoothstep(0.0, 0.3, dist);
    
    // Combine halo and particles with proper distribution
    float finalParticles = particleDensity * (edgeFalloff * 2.0 + centerFalloff * 0.5);
    
    // Base blue color with electric blue glow
    vec3 baseColor = vec3(0.1, 0.4, 1.0);
    vec3 glowColor = vec3(0.3, 0.7, 1.2);
    
    // Combine halo gradient and particles
    float intensity = haloGradient + finalParticles;
    
    // Add frequency-based pulsing
    float freqPulse = 1.0 + 0.5 * sin(uTime * 4.0) * uFreq;
    intensity *= freqPulse;
    
    // Create the final color
    vec3 finalColor = mix(baseColor, glowColor, intensity);
    
    // Add some variation based on normal for 3D effect
    float normalVariation = dot(vNormal, vec3(0.0, 0.0, 1.0)) * 0.5 + 0.5;
    finalColor *= (0.8 + normalVariation * 0.4);
    
    // Alpha based on intensity with some transparency
    float alpha = clamp(intensity * 0.8 + 0.2, 0.0, 1.0);
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`

export const haloBlobShaderConfig: ShaderConfig = {
  vertexShader: haloVertexShader,
  fragmentShader: haloFragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uFreq: { value: 0 },
    uIntensity: { value: 1.0 },
    transparent: true
  }
}
