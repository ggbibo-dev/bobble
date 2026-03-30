import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ShaderScene } from './ShaderScene'

const blobMeshSpy = vi.fn(
  ({
    shaderType,
  }: {
    shaderType: string
  }) => <div data-testid="blob-mesh" data-shader-type={shaderType} />
)

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="canvas">{children}</div>
  ),
}))

vi.mock('@react-three/drei', () => ({
  OrbitControls: ({
    enablePan,
    enableZoom,
  }: {
    enablePan: boolean
    enableZoom: boolean
  }) => (
    <div
      data-testid="orbit-controls"
      data-enable-pan={String(enablePan)}
      data-enable-zoom={String(enableZoom)}
    />
  ),
}))

vi.mock('../meshes', () => ({
  BlobMesh: (props: { audioUrl: string; shaderType: string }) => blobMeshSpy(props),
}))

describe('ShaderScene', () => {
  it('renders the default blob as a single pass', () => {
    render(<ShaderScene audioUrl="test.mp3" shaderType="default" />)

    const meshes = screen.getAllByTestId('blob-mesh')
    expect(meshes).toHaveLength(1)
    expect(meshes[0]).toHaveAttribute('data-shader-type', 'default')
  })

  it('renders halo as layered halo and particle passes', () => {
    render(<ShaderScene audioUrl="test.mp3" shaderType="halo" />)

    const meshes = screen.getAllByTestId('blob-mesh')
    expect(meshes).toHaveLength(2)
    expect(meshes[0]).toHaveAttribute('data-shader-type', 'halo')
    expect(meshes[1]).toHaveAttribute('data-shader-type', 'particle')
  })

  it('passes camera controls through to OrbitControls', () => {
    render(
      <ShaderScene
        audioUrl="test.mp3"
        enablePan={true}
        enableZoom={false}
      />
    )

    expect(screen.getByTestId('orbit-controls')).toHaveAttribute(
      'data-enable-pan',
      'true'
    )
    expect(screen.getByTestId('orbit-controls')).toHaveAttribute(
      'data-enable-zoom',
      'false'
    )
  })
})
