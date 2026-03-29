
import { extend } from '@react-three/fiber'
import { IcosahedronGeometry } from 'three'
import * as THREE from 'three'
import { ShaderScene } from './components/ShaderScene'
import { BlobShaderMaterial, HaloBlobShaderMaterial, ParticleShaderMaterial } from './shaders'

// Register the custom shader material
extend({
  BlobShaderMaterial,
  HaloBlobShaderMaterial,
  ParticleShaderMaterial,
  Mesh: THREE.Mesh,
  IcosahedronGeometry: IcosahedronGeometry,
})

export interface BlobComponentProps {
  audioUrl?: string
  width?: number
  height?: number
  className?: string
  enableZoom?: boolean
  enablePan?: boolean
  shaderType?: 'default' | 'halo' | 'particle'
}

function BlobComponent({ 
  audioUrl = "test.mp3",
  width,
  height,
  className,
  enableZoom = true,
  enablePan = false,
  shaderType = 'default'
}: BlobComponentProps) {
  const containerStyle = {
    width: width || '100%',
    height: height || '400px'
  }

  return (
    <div style={containerStyle} className={className}>
      <ShaderScene 
        audioUrl={audioUrl} 
        enableZoom={enableZoom} 
        enablePan={enablePan} 
        shaderType={shaderType}
      />
    </div>
  )
}

export { BlobComponent }
export default BlobComponent
