
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BlobMesh } from '../meshes'

interface ShaderSceneProps {
  audioUrl: string
  enableZoom?: boolean
  enablePan?: boolean
  shaderType?: 'default' | 'halo' | 'particle'
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
      
      {shaderType === 'halo' ? (
        <>
          {/* Halo mesh with rim effect only */}
          <BlobMesh audioUrl={audioUrl} shaderType="halo" />
          {/* Particle mesh with separate alpha */}
          <BlobMesh audioUrl={audioUrl} shaderType="particle" />
        </>
      ) : (
        <BlobMesh audioUrl={audioUrl} shaderType={shaderType} />
      )}
      
      <OrbitControls enableZoom={enableZoom} enablePan={enablePan} />
    </Canvas>
  )
}

export { ShaderScene }
