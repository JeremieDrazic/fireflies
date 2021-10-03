import { Application, ParticleContainer, Sprite, Rectangle } from 'pixi.js'
import { BG_COLOR } from 'src/utils/constants'
import { NODE_GARDEN } from 'src/utils/appNodes'
import nodeTexture from './node.png'
import './index.css'

export const NB_NODES = 150

type ExtendedSprite = Sprite & {
  direction: number
  speed: number
  turningSpeed: number
}

class NodeGarden {
  nodeGarden: Application

  nodeContainer: ParticleContainer

  nodes: ExtendedSprite[] = []

  // @ts-ignore
  nodeBounds: Rectangle

  tick = 0

  constructor() {
    const width = window.innerWidth
    const height = window.innerHeight
    this.nodeGarden = new Application({
      backgroundColor: BG_COLOR,
      width,
      height,
      autoDensity: true,
      antialias: true,
      resizeTo: window,
    })
    this.nodeContainer = new ParticleContainer(NB_NODES, {
      scale: true,
      position: true,
      rotation: true,
      alpha: true,
    })
    this.nodeContainer.width = width
    this.nodeContainer.height = height
  }

  init = () => {
    NODE_GARDEN?.appendChild(this.nodeGarden.view)
    this.nodeGarden.stage.addChild(this.nodeContainer)

    this.addNodes()
    this.animate()

    window.addEventListener('resize', this.setNodeGardenSize)
    window.addEventListener('keypress', this.fadeAway)
  }

  setNodeGardenSize = () => {
    this.nodeGarden.resize()
  }

  fadeAway = () => {
    this.nodeGarden.ticker.add(() => {
      // iterate through the sprites and update their position
      for (let k = 0; k < this.nodes.length; k += 1) {
        const firefly = this.nodes[k]
        if (firefly.alpha > 0) firefly.alpha -= 0.1
      }

      // increment the ticker
      this.tick += 0.1
    })
  }

  addNodes = () => {
    let i = 0
    for (i; i < NB_NODES; i += 1) {
      // create a new Sprite
      const node = Sprite.from(nodeTexture) as ExtendedSprite

      // set the anchor point so the texture is centerd on the sprite
      node.anchor.set(0.5)

      // different nodes, different sizes
      node.scale.set(0.1 + Math.random())

      node.alpha = 0.2 + Math.random() - 0.3

      // scatter them all
      node.x = Math.random() * this.nodeGarden.screen.width
      node.y = Math.random() * this.nodeGarden.screen.height

      // create a random direction in radians
      node.direction = Math.random() * Math.PI * 2

      // this number will be used to modify the direction of the sprite over time
      node.turningSpeed = Math.random() - 0.8

      // create a random speed between 0 - 2, and these nodes are slooww
      node.speed = (2 + Math.random() * 2) * 0.2

      // finally we push the node into the nodes array so it it can be easily accessed later
      this.nodes.push(node)

      this.nodeContainer.addChild(node)
    }

    const nodeBoundsPadding = 8
    this.nodeBounds = new Rectangle(
      -nodeBoundsPadding,
      -nodeBoundsPadding,
      this.nodeGarden.screen.width + nodeBoundsPadding * 2,
      this.nodeGarden.screen.height + nodeBoundsPadding * 2,
    )
  }

  animate = () => {
    this.nodeGarden.ticker.add(() => {
      // iterate through the sprites and update their position
      for (let k = 0; k < this.nodes.length; k += 1) {
        const firefly = this.nodes[k]
        firefly.direction += firefly.turningSpeed * 0.01
        firefly.x += Math.sin(firefly.direction) * (firefly.speed * firefly.scale.y)
        firefly.y += Math.cos(firefly.direction) * (firefly.speed * firefly.scale.y)
        firefly.rotation = -firefly.direction + Math.PI

        // wrap the nodes
        if (firefly.x < this.nodeBounds.x) {
          firefly.x += this.nodeBounds.width
        } else if (firefly.x > this.nodeBounds.x + this.nodeBounds.width) {
          firefly.x -= this.nodeBounds.width
        }

        if (firefly.y < this.nodeBounds.y) {
          firefly.y += this.nodeBounds.height
        } else if (firefly.y > this.nodeBounds.y + this.nodeBounds.height) {
          firefly.y -= this.nodeBounds.height
        }
      }

      // increment the ticker
      this.tick += 0.1
    })
  }
}

export default NodeGarden
