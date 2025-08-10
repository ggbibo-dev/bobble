import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BlobComponent } from './BlobComponent';

describe('BlobComponent', () => {
  it('renders with default text', () => {
    render(<BlobComponent />);
    expect(screen.getByText('Blobble')).toBeInTheDocument();
  });

  it('renders with custom text', () => {
    render(<BlobComponent text="Custom Text" />);
    expect(screen.getByText('Custom Text')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<BlobComponent onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Blobble'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<BlobComponent className="custom-class" />);
    const element = screen.getByText('Blobble');
    expect(element).toHaveClass('blobble-component');
    expect(element).toHaveClass('custom-class');
  });
});
