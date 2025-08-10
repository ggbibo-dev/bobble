# @ggbibo/blobble

A React component library for blobble components.

## Installation

```bash
npm install @ggbibo/blobble
```

## Usage

```tsx
import { BlobComponent } from '@ggbibo/blobble';

function App() {
  return (
    <div>
      <BlobComponent 
        text="Click me!" 
        onClick={() => console.log('Blobble clicked!')}
      />
    </div>
  );
}
```

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
