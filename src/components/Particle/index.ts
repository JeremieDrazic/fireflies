import { Graphics } from 'pixi.js'
import { SECONDARY_COLOR, TERTIARY_COLOR } from 'src/utils/constants'

type ExtendedGraphics = Graphics & {
  originalX: number
  originalY: number
}

const PARTICLE_COLORS = [SECONDARY_COLOR, TERTIARY_COLOR]

class Particle {
  sprite: ExtendedGraphics

  alpha: number = Math.random() * (1 - 0.1) + 0.1

  radius: number = Math.random() * (4 - 1) + 1

  timer: number = Math.floor(Math.random() * (100 - 0) + 0)

  v: number = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * (1 - 0.5) + 0.5)

  constructor(x: number, y: number) {
    const particleColor = PARTICLE_COLORS[Math.round(Math.random())]
    this.sprite = new Graphics() as ExtendedGraphics
    this.sprite.lineStyle(0)
    this.sprite.beginFill(particleColor, this.alpha)
    this.sprite.drawCircle(0, 0, this.radius)
    this.sprite.x = x
    this.sprite.y = y
    this.sprite.originalX = x
    this.sprite.originalY = y
    this.sprite.endFill()
  }

  getSprite = () => this.sprite

  animateInactiveParticleState = () => {
    this.sprite.x += 0.2 * Math.sin(this.timer * 0.15)
    this.sprite.y += 0.2 * Math.cos(this.timer * 0.15)
    this.timer += this.v
  }
}

export default Particle
