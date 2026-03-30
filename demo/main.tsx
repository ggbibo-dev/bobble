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
import demoTone from '../src/demo-assets/demo-tone.wav'
import './preview.css'

extend({
  BlobShaderMaterial,
  HaloBlobShaderMaterial,
  ParticleShaderMaterial,
  Mesh: THREE.Mesh,
  IcosahedronGeometry: IcosahedronGeometry,
})

type BlobShaderType = 'default' | 'halo' | 'particle'

function BlobEntity({
  shaderType,
  audioUrl,
}: {
  shaderType: BlobShaderType
  audioUrl?: string
}) {
  const transform = {
    position: [0, 0.7, 0] as [number, number, number],
    rotation: [-0.2, -0.58, 0.05] as [number, number, number],
    scale: 0.74,
  }

  if (shaderType === 'halo') {
    return (
      <group {...transform}>
        <BlobMesh audioUrl={audioUrl} shaderType="halo" />
        <BlobMesh audioUrl={audioUrl} shaderType="particle" />
      </group>
    )
  }

  return (
    <group {...transform}>
      <BlobMesh audioUrl={audioUrl} shaderType={shaderType} />
    </group>
  )
}

function StageScaffold({ shaderType }: { shaderType: BlobShaderType }) {
  const fill =
    shaderType === 'particle'
      ? '#70e7ff'
      : shaderType === 'default'
        ? '#9fb6ff'
        : '#7ca6ff'

  return (
    <>
      <ambientLight intensity={0.58} />
      <directionalLight intensity={1.2} position={[-5, 7, 7]} color="#dfe7ff" />
      <pointLight intensity={2.1} position={[0, 2, 8]} color={fill} />
      <pointLight intensity={1.5} position={[6, -1, 2]} color="#ffb88c" />
    </>
  )
}

function BlobStage({
  shaderType,
  className,
  audioUrl,
}: {
  shaderType: BlobShaderType
  className?: string
  audioUrl?: string
}) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0.8, 14.5], fov: 48 }}
        gl={{ alpha: true }}
        style={{ background: 'transparent' }}
      >
        <StageScaffold shaderType={shaderType} />
        <BlobEntity shaderType={shaderType} audioUrl={audioUrl} />
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
          <span className="preview-stage__hint">Click blob to play the bundled tone.</span>
        </div>
        <div className="preview-stage__surface preview-stage__surface--hero">
          <BlobStage
            className="blob-scene blob-scene--hero"
            shaderType="halo"
            audioUrl={demoTone}
          />
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
            <span className="preview-stage__hint">Audio-reactive demo state.</span>
          </div>
          <div className="preview-stage__surface">
            <BlobStage className="blob-scene" shaderType="halo" audioUrl={demoTone} />
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
