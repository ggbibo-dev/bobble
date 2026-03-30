import { Mesh, ShaderMaterial } from 'three'
import { BlobRenderPass } from '../blob-variants'

export interface BlobMeshProps {
  audioUrl?: string
  shaderType?: BlobRenderPass
}

export interface AudioState {
  isPlaying: boolean
  frequency: number
}

export interface BlobMeshRef extends Mesh {
  material: ShaderMaterial
}
