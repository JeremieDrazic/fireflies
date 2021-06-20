import path from 'path'

export default {
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
}
