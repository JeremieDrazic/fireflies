import { Application, Container } from 'pixi.js'
import Particle from 'src/components/Particle'
import { BG_COLOR } from 'src/utils/constants'
import { STAGE } from 'src/utils/appNodes'
import { CanvasElementType, CanvasContextType } from 'src/utils/types'
import './index.css'

class Stage {
  word: string

  particles: Particle[]

  stage: Application

  nodeContainer: Container

  constructor(word: string = '') {
    const width = window.innerWidth
    const height = window.innerHeight
    this.stage = new Application({
      backgroundColor: BG_COLOR,
      width,
      height,
      autoDensity: true,
      antialias: true,
      resizeTo: window,
    })

    this.word = word
    this.particles = []
    this.turnWordToParticles()

    this.nodeContainer = new Container()
    this.nodeContainer.width = width
    this.nodeContainer.height = height
  }

  public init = () => {
    STAGE?.appendChild(this.stage.view)
    this.stage.stage.addChild(this.nodeContainer)

    window.addEventListener('resize', this.setStageSize)
  }

  setStageSize = () => {
    this.stage.resize()
  }

  public addParticles = () => {
    let i = 0
    for (i; i < this.particles.length; i += 1) {
      const particle = this.particles[i]
      this.nodeContainer.addChild(particle.getSprite())
    }
  }

  turnWordToParticles = () => {
    const gohstCanvasEl: CanvasElementType = document.createElement('canvas')
    gohstCanvasEl!.width = window.innerWidth
    gohstCanvasEl!.height = window.innerHeight

    const ctx: CanvasContextType = gohstCanvasEl!.getContext('2d')
    ctx!.beginPath()
    ctx!.fillStyle = '#ffffff'
    ctx!.font = "900 9vw 'Poppins', sans-serif"
    ctx!.textAlign = 'center'
    ctx!.fillText(this.word, gohstCanvasEl!.width / 2, gohstCanvasEl!.height / 2)
    ctx!.closePath()

    const imageData = ctx!.getImageData(0, 0, gohstCanvasEl!.width, gohstCanvasEl!.height)
    const { data } = imageData
    ctx!.clearRect(0, 0, gohstCanvasEl!.width, gohstCanvasEl!.height)

    for (let y = 0; y < gohstCanvasEl!.height; y += 1) {
      for (let x = 0; x < gohstCanvasEl!.width; x += 1) {
        const blue = data[(gohstCanvasEl!.width * y + x) * 4 + 2]

        if (blue === 255 && Math.random() > 0.94) {
          this.particles.push(new Particle(x, y))
        }
      }
    }
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    const nbParticles = this.particles.length
    let i = 0

    for (i; i < nbParticles; i += 1) {
      this.particles[i].animateInactiveParticleState()
    }

    this.stage.render()
  }
}

export default Stage
