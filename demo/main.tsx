import React from 'react'
import ReactDOM from 'react-dom/client'
import { BlobComponent } from '../src'
import './preview.css'

function PreviewCard({
  title,
  eyebrow,
  children,
}: {
  title: string
  eyebrow: string
  children: React.ReactNode
}) {
  return (
    <section className="preview-card">
      <div className="preview-card__copy">
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}

function PreviewApp() {
  return (
    <main className="preview-page">
      <header className="preview-hero">
        <div className="preview-hero__copy">
          <p>Component preview</p>
          <h1>Blobble</h1>
          <span>
            Audio-reactive 3D blob component with shader variants and embeddable
            scene controls.
          </span>
        </div>
        <div className="preview-hero__stage">
          <BlobComponent
            audioUrl=""
            height={520}
            enablePan={false}
            enableZoom={true}
            shaderType="halo"
          />
        </div>
      </header>

      <section className="preview-grid">
        <PreviewCard eyebrow="Variant" title="Default shader">
          <BlobComponent
            audioUrl=""
            height={320}
            shaderType="default"
            enablePan={false}
          />
        </PreviewCard>

        <PreviewCard eyebrow="Embed" title="Wide layout shell">
          <div className="preview-shell">
            <div className="preview-shell__meta">
              <strong>Now playing</strong>
              <span>Blobble demo shell</span>
            </div>
            <BlobComponent
              audioUrl=""
              height={280}
              width={420}
              className="preview-shell__blob"
              enablePan={false}
              shaderType="halo"
            />
          </div>
        </PreviewCard>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PreviewApp />
  </React.StrictMode>,
)
