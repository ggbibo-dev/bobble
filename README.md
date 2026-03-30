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
        enableZoom={true}
        enablePan={false}
        shaderType="halo"
      />
    </div>
  );
}
```

## Props

- `width` (number, optional): Width of the blob container in pixels (default: 100% if not specified)
- `height` (number, optional): Height of the blob container in pixels (default: 400px)
- `audioUrl` (string, optional): URL to audio file for visualization (default: "test.mp3")
- `className` (string, optional): Additional CSS class name for styling
- `enableZoom` (boolean, optional): Enable zoom controls for the 3D scene (default: true)
- `enablePan` (boolean, optional): Enable pan controls for the 3D scene (default: false)
- `shaderType` (`'default' | 'halo'`, optional): Visual variant to render (default: `'default'`)

## Variants

- `default`: Single-pass deforming blob with audio-reactive mouth and glossy water shading
- `halo`: Layered halo + particle rendering around the blob silhouette

## Features

- Interactive 3D blob with fluid animations
- Audio-reactive mouth distortion
- Click to play/pause audio
- Customizable size and styling
- Configurable camera controls (zoom and pan)
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



## Development

```bash
npm install
npm run build
npm test
```

## Troubleshooting

### "ReactSharedInternals is undefined" Error

This error occurs when there are multiple React instances in your application. To fix this:

1. **Ensure peer dependencies are installed**: Make sure you have the required peer dependencies installed in your project:
   ```bash
   npm install three @react-three/fiber @react-three/drei
   ```

2. **Check for duplicate React installations**: Run `npm ls react` to check for multiple React versions

3. **Use npm dedupe**: Run `npm dedupe` to remove duplicate packages

4. **Clear node_modules**: If the issue persists, try removing node_modules and reinstalling:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```
