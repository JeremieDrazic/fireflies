import path from 'path'

export default {
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
}
