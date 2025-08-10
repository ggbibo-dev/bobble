import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'Blobble',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          three: 'THREE',
          '@react-three/fiber': 'ReactThreeFiber',
          '@react-three/drei': 'ReactThreeDrei'
        }
      }
    },
    sourcemap: true
  }
});
