import { CanvasElementType, CanvasContextType, ParticlesPositionsType } from './types'

const turnWordToPixelPositions: (word: string) => ParticlesPositionsType = (word) => {
  const wordToTransform: string = word
  const pixelsPositions: any = []

  const gohstCanvasEl: CanvasElementType = document.createElement('canvas')
  gohstCanvasEl!.width = window.innerWidth
  gohstCanvasEl!.height = window.innerHeight

  const ctx: CanvasContextType = gohstCanvasEl!.getContext('2d')
  ctx!.beginPath()
  ctx!.fillStyle = '#ffffff'
  ctx!.font = "900 9vw 'Poppins', sans-serif"
  ctx!.textAlign = 'center'
  ctx!.fillText(wordToTransform, gohstCanvasEl!.width / 2, gohstCanvasEl!.height / 2)
  ctx!.closePath()

  const imageData = ctx!.getImageData(0, 0, gohstCanvasEl!.width, gohstCanvasEl!.height)
  const { data } = imageData
  ctx!.clearRect(0, 0, gohstCanvasEl!.width, gohstCanvasEl!.height)

  for (let y = 0; y < gohstCanvasEl!.height; y += 1) {
    for (let x = 0; x < gohstCanvasEl!.width; x += 1) {
      const blue = data[(gohstCanvasEl!.width * y + x) * 4 + 2]

      if (blue === 255 && Math.random() > 0.85) {
        pixelsPositions.push({
          x,
          y,
        })
      }
    }
  }

  return pixelsPositions
}

export default turnWordToPixelPositions
