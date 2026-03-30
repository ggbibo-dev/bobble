import ReactDOM from 'react-dom/client'
import { BlobComponent } from '../src'
import './styles.css'

function DemoApp() {
  return (
    <main className="demo-shell">
      <section className="demo-card">
        <p className="demo-kicker">Default Blob</p>
        <div className="demo-stage">
          <BlobComponent
            height={560}
            width={560}
            enablePan={true}
            enableZoom={true}
            shaderType="default"
          />
        </div>
        <p className="demo-note">Drag to orbit. Shift-drag or right-drag to pan. Scroll to zoom.</p>
      </section>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<DemoApp />)
