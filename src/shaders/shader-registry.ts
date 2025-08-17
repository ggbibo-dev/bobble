import { shaderMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { blobShaderConfig } from './blob-shader'

const BlobShaderMaterial = shaderMaterial(
  blobShaderConfig.uniforms,
  blobShaderConfig.vertexShader,
  blobShaderConfig.fragmentShader
)

// Note: extend is called in the main component to avoid issues during testing
declare module '@react-three/fiber' {
  interface ThreeElements {
    blobShaderMaterial: React.RefAttributes<THREE.ShaderMaterial> & {
      transparent?: boolean
    }
  }
}

export { BlobShaderMaterial }
