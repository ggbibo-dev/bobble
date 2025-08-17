import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { blobShaderConfig } from './blob-shader'
import { haloBlobShaderConfig } from './halo-shader'
import { particleShaderConfig } from './particle-shader'

const BlobShaderMaterial = shaderMaterial(
  blobShaderConfig.uniforms,
  blobShaderConfig.vertexShader,
  blobShaderConfig.fragmentShader
)

const HaloBlobShaderMaterial = shaderMaterial(
  haloBlobShaderConfig.uniforms,
  haloBlobShaderConfig.vertexShader,
  haloBlobShaderConfig.fragmentShader
)

const ParticleShaderMaterial = shaderMaterial(
  particleShaderConfig.uniforms,
  particleShaderConfig.vertexShader,
  particleShaderConfig.fragmentShader
)

// Note: extend is called in the main component to avoid issues during testing
declare module '@react-three/fiber' {
  interface ThreeElements {
    blobShaderMaterial: React.RefAttributes<THREE.ShaderMaterial> & {
      transparent?: boolean
    }
    haloBlobShaderMaterial: React.RefAttributes<THREE.ShaderMaterial> & {
      transparent?: boolean
    }
    particleShaderMaterial: React.RefAttributes<THREE.ShaderMaterial> & {
      transparent?: boolean
    }
  }
}

export { BlobShaderMaterial, HaloBlobShaderMaterial, ParticleShaderMaterial }
