import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { IcosahedronGeometry } from 'three'
import * as THREE from 'three'
import {
  BlobMesh,
  BlobShaderMaterial,
  HaloBlobShaderMaterial,
  ParticleShaderMaterial,
} from '../src'
import './preview.css'

extend({
  BlobShaderMaterial,
  HaloBlobShaderMaterial,
  ParticleShaderMaterial,
  Mesh: THREE.Mesh,
  IcosahedronGeometry: IcosahedronGeometry,
})

type BlobShaderType = 'default' | 'halo' | 'particle'

function BlobEntity({ shaderType }: { shaderType: BlobShaderType }) {
  const transform = {
    position: [0, 0.7, 0] as [number, number, number],
    rotation: [-0.2, -0.58, 0.05] as [number, number, number],
    scale: 0.74,
  }

  if (shaderType === 'halo') {
    return (
      <group {...transform}>
        <BlobMesh audioUrl="" shaderType="halo" />
        <BlobMesh audioUrl="" shaderType="particle" />
      </group>
    )
  }

  return (
    <group {...transform}>
      <BlobMesh audioUrl="" shaderType={shaderType} />
    </group>
  )
}

function StageScaffold({ shaderType }: { shaderType: BlobShaderType }) {
  const theme =
    shaderType === 'particle'
      ? {
          background: '#0a1630',
          fog: '#0a1630',
          plane: '#13254a',
          floor: '#12204a',
          ring: '#3cbcff',
          fill: '#70e7ff',
        }
      : shaderType === 'default'
        ? {
            background: '#101733',
            fog: '#101733',
            plane: '#1b2648',
            floor: '#142042',
            ring: '#6382ff',
            fill: '#9fb6ff',
          }
        : {
            background: '#0b1020',
            fog: '#0b1020',
            plane: '#121b31',
            floor: '#101728',
            ring: '#3354ff',
            fill: '#7ca6ff',
          }

  return (
    <>
      <color attach="background" args={[theme.background]} />
      <fog attach="fog" args={[theme.fog, 12, 22]} />

      <ambientLight intensity={0.58} />
      <directionalLight intensity={1.2} position={[-5, 7, 7]} color="#dfe7ff" />
      <pointLight intensity={2.1} position={[0, 2, 8]} color={theme.fill} />
      <pointLight intensity={1.5} position={[6, -1, 2]} color="#ffb88c" />

      <mesh position={[0, -5.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[8.8, 96]} />
        <meshBasicMaterial color={theme.floor} transparent={true} opacity={0.92} />
      </mesh>

      <mesh position={[0, -4.95, -1.4]} rotation={[-Math.PI / 2.8, 0, 0]}>
        <planeGeometry args={[13, 7.5]} />
        <meshBasicMaterial color={theme.plane} transparent={true} opacity={0.46} />
      </mesh>

      <mesh position={[0, -4.8, 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[5.2, 7.3, 96]} />
        <meshBasicMaterial color={theme.ring} transparent={true} opacity={0.18} />
      </mesh>
    </>
  )
}

function BlobStage({
  shaderType,
  className,
}: {
  shaderType: BlobShaderType
  className?: string
}) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0.8, 14.5], fov: 48 }}>
        <StageScaffold shaderType={shaderType} />
        <BlobEntity shaderType={shaderType} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.15}
          maxPolarAngle={Math.PI * 0.62}
          minPolarAngle={Math.PI * 0.38}
        />
      </Canvas>
    </div>
  )
}

function PreviewApp() {
  return (
    <main className="preview-page">
      <section className="preview-stage preview-stage--hero">
        <div className="preview-stage__header">
          <p>blobble</p>
          <h1>Halo</h1>
        </div>
        <div className="preview-stage__surface preview-stage__surface--hero">
          <BlobStage className="blob-scene blob-scene--hero" shaderType="halo" />
        </div>
      </section>

      <section className="preview-grid">
        <section className="preview-stage preview-stage--default">
          <div className="preview-stage__header">
            <p>shader</p>
            <h2>Default</h2>
          </div>
          <div className="preview-stage__surface">
            <BlobStage className="blob-scene" shaderType="default" />
          </div>
        </section>

        <section className="preview-stage preview-stage--particle">
          <div className="preview-stage__header">
            <p>shader</p>
            <h2>Particle</h2>
          </div>
          <div className="preview-stage__surface">
            <BlobStage className="blob-scene" shaderType="particle" />
          </div>
        </section>

        <section className="preview-stage preview-stage--halo">
          <div className="preview-stage__header">
            <p>shader</p>
            <h2>Halo</h2>
          </div>
          <div className="preview-stage__surface">
            <BlobStage className="blob-scene" shaderType="halo" />
          </div>
        </section>

        <section className="preview-stage preview-stage--embed">
          <div className="preview-stage__header">
            <p>embed</p>
            <h2>Wide shell</h2>
          </div>
          <div className="preview-stage__surface preview-stage__surface--wide">
            <div className="preview-shell">
              <span>Now playing</span>
              <strong>Blobble media block</strong>
            </div>
            <BlobStage className="blob-scene blob-scene--wide" shaderType="halo" />
          </div>
        </section>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PreviewApp />
  </React.StrictMode>,
)
