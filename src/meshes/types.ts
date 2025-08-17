import { Mesh, ShaderMaterial } from 'three'

export interface BlobMeshProps {
  audioUrl: string
  shaderType?: 'default' | 'halo'
}

export interface AudioState {
  isPlaying: boolean
  frequency: number
}

export interface BlobMeshRef extends Mesh {
  material: ShaderMaterial
}
