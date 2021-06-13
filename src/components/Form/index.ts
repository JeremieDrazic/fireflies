import { FORM_INPUT, ENTER_KEY } from '@utils/constants'
import {
  formAppearanceAnimation,
  enterKeyAnimation,
  noValueInputAnimation,
  formInstructionsAppearanceAnimation,
} from './animations'
import './index.css'

class Form {
  readonly formRoot: HTMLElement

  formAppearanceAnimation: GSAPAnimation

  formInstructionsAppearanceAnimation: GSAPAnimation

  input: HTMLInputElement | null

  constructor(formRoot: HTMLDivElement) {
    this.formRoot = formRoot
    this.input = this.formRoot.querySelector(FORM_INPUT)
    this.formAppearanceAnimation = formAppearanceAnimation
    this.formInstructionsAppearanceAnimation = formInstructionsAppearanceAnimation
  }

  init = () => {
    if (!this.formAppearanceAnimation.isActive()) this.formAppearanceAnimation.restart()
    if (!this.formInstructionsAppearanceAnimation.isActive())
      this.formInstructionsAppearanceAnimation.restart()
    this.formRoot.addEventListener('keypress', this.onSubmit)
    window.addEventListener('keypress', this.onSubmit)
  }

  onSubmit = (e: KeyboardEvent) => {
    if (e.key === ENTER_KEY) {
      enterKeyAnimation.restart()

      if (!this.input?.value) noValueInputAnimation.restart()
      if (
        !this.formAppearanceAnimation.isActive() &&
        !this.formInstructionsAppearanceAnimation.isActive() &&
        this.input?.value
      ) {
        this.formAppearanceAnimation.reverse()
        this.formInstructionsAppearanceAnimation.reverse()
      }
    }
  }
}

export default Form
