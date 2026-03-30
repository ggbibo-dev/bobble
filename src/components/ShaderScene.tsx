
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BlobVariant, blobVariantPasses } from '../blob-variants'
import { BlobMesh } from '../meshes'

interface ShaderSceneProps {
  audioUrl: string
  enableZoom?: boolean
  enablePan?: boolean
  shaderType?: BlobVariant
}

function ShaderScene({ 
  audioUrl,
  enableZoom = true,
  enablePan = false,
  shaderType = 'default'
}: ShaderSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {blobVariantPasses[shaderType].map((renderPass) => (
        <BlobMesh
          key={`${shaderType}-${renderPass}`}
          audioUrl={audioUrl}
          shaderType={renderPass}
        />
      ))}
      
      <OrbitControls enableZoom={enableZoom} enablePan={enablePan} />
    </Canvas>
  )
}

export { ShaderScene }
