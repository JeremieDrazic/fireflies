import { Application, ParticleContainer, Sprite, Rectangle } from 'pixi.js'
import { BG_COLOR } from 'src/utils/constants'
import nodeTexture from './node.png'
import { NODE_GARDEN, NB_NODES } from './utils/constants'
import './index.css'

type ExtendedSprite = Sprite & {
  direction: number
  speed: number
  turningSpeed: number
}

class NodeGarden {
  nodeGarden: Application

  nodeContainer: ParticleContainer

  nodes: ExtendedSprite[] = []

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
    window.addEventListener('resize', this.setNodeGardenSize)
  }

  setNodeGardenSize = () => {
    this.nodeGarden.resize()
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
    const nodeBounds = new Rectangle(
      -nodeBoundsPadding,
      -nodeBoundsPadding,
      this.nodeGarden.screen.width + nodeBoundsPadding * 2,
      this.nodeGarden.screen.height + nodeBoundsPadding * 2,
    )

    this.nodeGarden.ticker.add(() => {
      // iterate through the sprites and update their position
      for (let k = 0; k < this.nodes.length; k += 1) {
        const firefly = this.nodes[k]
        firefly.direction += firefly.turningSpeed * 0.01
        firefly.x += Math.sin(firefly.direction) * (firefly.speed * firefly.scale.y)
        firefly.y += Math.cos(firefly.direction) * (firefly.speed * firefly.scale.y)
        firefly.rotation = -firefly.direction + Math.PI

        // wrap the this.nodes
        if (firefly.x < nodeBounds.x) {
          firefly.x += nodeBounds.width
        } else if (firefly.x > nodeBounds.x + nodeBounds.width) {
          firefly.x -= nodeBounds.width
        }

        if (firefly.y < nodeBounds.y) {
          firefly.y += nodeBounds.height
        } else if (firefly.y > nodeBounds.y + nodeBounds.height) {
          firefly.y -= nodeBounds.height
        }
      }

      // increment the ticker
      this.tick += 0.1
    })
  }
}

export default NodeGarden
