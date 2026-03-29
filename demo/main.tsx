import React from 'react'
import ReactDOM from 'react-dom/client'
import { BlobComponent } from '../src'
import './preview.css'

function PreviewApp() {
  return (
    <main className="preview-page">
      <section className="preview-stage preview-stage--hero">
        <div className="preview-stage__header">
          <p>blobble</p>
          <h1>Halo</h1>
        </div>
        <div className="preview-stage__surface preview-stage__surface--hero">
          <BlobComponent
            audioUrl=""
            height={620}
            enablePan={false}
            enableZoom={false}
            shaderType="halo"
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
            <BlobComponent
              audioUrl=""
              height={360}
              shaderType="default"
              enablePan={false}
              enableZoom={false}
            />
          </div>
        </section>

        <section className="preview-stage preview-stage--particle">
          <div className="preview-stage__header">
            <p>shader</p>
            <h2>Particle</h2>
          </div>
          <div className="preview-stage__surface">
            <BlobComponent
              audioUrl=""
              height={360}
              shaderType="particle"
              enablePan={false}
              enableZoom={false}
            />
          </div>
        </section>

        <section className="preview-stage preview-stage--halo">
          <div className="preview-stage__header">
            <p>shader</p>
            <h2>Halo</h2>
          </div>
          <div className="preview-stage__surface">
            <BlobComponent
              audioUrl=""
              height={360}
              shaderType="halo"
              enablePan={false}
              enableZoom={false}
            />
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
            <BlobComponent
              audioUrl=""
              height={280}
              width={480}
              className="preview-shell__blob"
              enablePan={false}
              enableZoom={false}
              shaderType="halo"
            />
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
