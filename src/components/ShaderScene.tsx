
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { BlobMesh } from '../meshes'

interface ShaderSceneProps {
  audioUrl: string
}

function ShaderScene({ audioUrl }: ShaderSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <BlobMesh audioUrl={audioUrl} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export { ShaderScene }
