import path from 'path'

export default {
  server: {
    open: true,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
}
