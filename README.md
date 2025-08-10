# @ggbibo/blobble

A React component library featuring an interactive 3D blob with audio visualization.

## Installation

```bash
npm install @ggbibo/blobble
```

You'll also need to install the peer dependencies:

```bash
npm install three @react-three/fiber @react-three/drei
```

## Usage

```tsx
import { BlobComponent } from '@ggbibo/blobble';

function App() {
  return (
    <div>
      <BlobComponent 
        width={400}
        height={400}
        audioUrl="path/to/your/audio.mp3"
        className="my-blob"
      />
    </div>
  );
}
```

## Props

- `width` (number, optional): Width of the blob container in pixels (default: 400)
- `height` (number, optional): Height of the blob container in pixels (default: 400)
- `audioUrl` (string, optional): URL to audio file for visualization (default: "test.mp3")
- `className` (string, optional): Additional CSS class name

## Features

- Interactive 3D blob with fluid animations
- Audio-reactive mouth distortion
- Click to play/pause audio
- Customizable size and styling
- Built with Three.js and React Three Fiber

## Local Development

### Using yalc (recommended)

1. Install yalc globally:
```bash
npm install -g yalc
```

2. In the blobble package directory:
```bash
npm run build
yalc publish
```

3. In your test project:
```bash
yalc add @ggbibo/blobble
npm install
```

### Using npm pack

1. In the blobble package directory:
```bash
npm run build
npm pack
```

2. In your test project:
```bash
npm install /path/to/ggbibo-blobble-0.0.0.tgz
```

## Development

```bash
npm install
npm run build
npm test
```
