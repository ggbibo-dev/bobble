import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BlobComponent } from './BlobComponent';

// Mock Three.js and React Three Fiber
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas">{children}</div>,
  useFrame: vi.fn(),
  extend: vi.fn(),
}));

vi.mock('@react-three/drei', () => ({
  OrbitControls: () => <div data-testid="orbit-controls" />,
  PositionalAudio: () => <div data-testid="positional-audio" />,
  shaderMaterial: vi.fn(),
  Text: () => <div data-testid="text" />,
}));

vi.mock('three', () => ({
  AudioAnalyser: vi.fn(),
  Mesh: vi.fn(),
  IcosahedronGeometry: vi.fn(),
  ShaderMaterial: vi.fn(),
}));

describe('BlobComponent', () => {
  it('renders with default props', () => {
    render(<BlobComponent />);
    const container = screen.getByTestId('canvas');
    expect(container).toBeInTheDocument();
  });

  it('renders with custom width and height', () => {
    render(<BlobComponent width={500} height={300} />);
    const container = screen.getByTestId('canvas');
    expect(container).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<BlobComponent className="custom-class" />);
    const container = screen.getByTestId('canvas');
    expect(container.parentElement).toHaveClass('blobble-component');
    expect(container.parentElement).toHaveClass('custom-class');
  });

  it('renders with custom audio URL', () => {
    render(<BlobComponent audioUrl="custom-audio.mp3" />);
    const container = screen.getByTestId('canvas');
    expect(container).toBeInTheDocument();
  });
});
