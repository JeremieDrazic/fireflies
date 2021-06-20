import { NAV_TITLE, NAV_LINK } from 'src/utils/constants'
import getMouseClosestEdge, { LEFT, TOP, RIGHT, ElementSide } from 'src/utils/getMouseClosestEdge'
import { ElementType } from 'src/utils/types'
import {
  topToBottomAnimation,
  bottomToTopAnimation,
  leftToRightAnimation,
  rightToLeftAnimation,
} from './utils'
import './index.css'

class Nav {
  navLinkEl: ElementType

  topToBottomAnimation: GSAPAnimation

  bottomToTopAnimation: GSAPAnimation

  rightToLeftAnimation: GSAPAnimation

  leftToRightAnimation: GSAPAnimation

  constructor() {
    this.navLinkEl = NAV_LINK as ElementType
    this.topToBottomAnimation = topToBottomAnimation
    this.bottomToTopAnimation = bottomToTopAnimation
    this.rightToLeftAnimation = rightToLeftAnimation
    this.leftToRightAnimation = leftToRightAnimation
  }

  init = () => {
    this.topToBottomAnimation.play()
    // @ts-ignore
    NAV_TITLE?.addEventListener('mouseenter', this.playTitleAnimation)
  }

  playTitleAnimation = (e: MouseEvent) => {
    let animation: GSAPAnimation = bottomToTopAnimation
    const side: ElementSide = getMouseClosestEdge(this.navLinkEl, { x: e?.clientX, y: e?.clientY })
    const noAnimationRunning =
      !this.topToBottomAnimation.isActive() &&
      !this.bottomToTopAnimation.isActive() &&
      !this.leftToRightAnimation.isActive() &&
      !this.rightToLeftAnimation.isActive()

    switch (side) {
      case TOP:
        animation = this.topToBottomAnimation
        break
      case RIGHT:
        animation = this.rightToLeftAnimation
        break
      case LEFT:
        animation = this.leftToRightAnimation
        break
      default:
        animation = this.bottomToTopAnimation
        break
    }

    if (noAnimationRunning) animation.restart()
  }
}

export default Nav
