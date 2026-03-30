import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlobComponent } from './BlobComponent'

// Mock Three.js and React Three Fiber
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas">{children}</div>,
  useFrame: vi.fn(),
  extend: vi.fn(),
}))

vi.mock('@react-three/drei', () => ({
  OrbitControls: () => <div data-testid="orbit-controls" />,
  PositionalAudio: () => <div data-testid="positional-audio" />,
  shaderMaterial: vi.fn(),
  extend: vi.fn(),
  Text: () => <div data-testid="text" />,
}))

vi.mock('three', () => ({
  AudioAnalyser: vi.fn(),
  Mesh: vi.fn(),
  IcosahedronGeometry: vi.fn(),
  ShaderMaterial: vi.fn(),
}))

// Mock the shader registry to prevent extend calls during testing
vi.mock('./shaders', () => ({
  blobShaderConfig: {
    vertexShader: '',
    fragmentShader: '',
    uniforms: {
      uTime: { value: 0 },
      uFreq: { value: 0 },
      uIntensity: { value: 1.5 },
      transparent: true
    }
  },
  BlobShaderMaterial: vi.fn(),
  HaloBlobShaderMaterial: vi.fn(),
  ParticleShaderMaterial: vi.fn(),
}))

describe('BlobComponent', () => {
  it('renders with default props', () => {
    render(<BlobComponent />)
    const container = screen.getByTestId('canvas')
    expect(container).toBeInTheDocument()
  })

  it('renders with custom width and height', () => {
    render(<BlobComponent width={500} height={300} />)
    const container = screen.getByTestId('canvas')
    expect(container).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<BlobComponent className="custom-class" />)
    const container = screen.getByTestId('canvas')
    expect(container.parentElement).toHaveClass('custom-class')
  })

  it('renders with custom audio URL', () => {
    render(<BlobComponent audioUrl="custom-audio.mp3" />)
    const container = screen.getByTestId('canvas')
    expect(container).toBeInTheDocument()
  })

  it('renders without audio when passed an empty string', () => {
    render(<BlobComponent audioUrl="" />)
    const container = screen.getByTestId('canvas')
    expect(container).toBeInTheDocument()
  })

  it('renders with halo shader', () => {
    render(<BlobComponent audioUrl="custom-audio.mp3" shaderType="halo" />)
    expect(screen.getByTestId('canvas')).toBeInTheDocument()
  })

  it('renders with custom dimensions', () => {
    render(<BlobComponent audioUrl="custom-audio.mp3" width={500} height={300} />)
    const container = screen.getByTestId('canvas').parentElement
    expect(container).toHaveStyle({ width: '500px', height: '300px' })
  })

  it('renders with custom className', () => {
    render(<BlobComponent audioUrl="custom-audio.mp3" className="custom-class" />)
    const container = screen.getByTestId('canvas').parentElement
    expect(container).toHaveClass('custom-class')
  })
})
