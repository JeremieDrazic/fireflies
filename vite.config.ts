import path from 'path'

export default {
  server: {
    open: true,
  },
  build: {
    outDir: 'dist/fireflies',
    assetsDir: 'assets',
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
}
