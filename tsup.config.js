import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'], // Update the path to your entry file
  splitting: false,
  sourcemap: false,
  target: 'es2015',
  clean: true,
  dts: true, // Enable declaration file generation,
  outDir: 'lib'
})
