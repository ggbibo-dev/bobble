import { ShaderMaterial } from 'three'

export interface BlobShaderUniforms {
  [key: string]: any
  uTime: { value: number }
  uFreq: { value: number }
  uIntensity: { value: number }
  ucameraPosition?: { value: [number, number, number] }
  transparent: boolean
}

export interface BlobShaderMaterial extends ShaderMaterial {
  uniforms: BlobShaderUniforms
}

export interface ShaderConfig {
  vertexShader: string
  fragmentShader: string
  uniforms: BlobShaderUniforms
}
