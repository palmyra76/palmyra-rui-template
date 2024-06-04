import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'

// @ts-ignore
import generalAssets from './plugins/general_assets.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ tsDecorators: true }),
  generalAssets(),
  libInjectCss(),
  dts({ include: ['src/palmyra', 'src/lib.ts'] })],
  server: {
    proxy: { "/api": "http://localhost:9090/" },
    open: true,
    port: 7000,
    host: "0.0.0.0"
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/lib.ts'),
      formats: ['es']
    }, rollupOptions: {
      external: [
        'palmyra-rui',
        'palmyra-wire',
        'react',
        'react-dom',
        'react-icons',
        'react-router-dom',
        'react/jsx-runtime'
      ],
      input: Object.fromEntries(
        glob.sync(['src/palmyra/**/*.{ts,tsx}', 'src/lib.ts']).map(file => [          
          relative(
            'src',
            file.slice(0, file.length - extname(file).length)
          ),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      output: {
        // format: 'iife',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name].js'
      }
    }
  }
})
