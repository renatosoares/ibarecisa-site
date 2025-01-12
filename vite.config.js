import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 5173
  }
}
