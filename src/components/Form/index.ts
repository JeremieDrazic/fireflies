import { ENTER_KEY } from 'src/utils/constants'
import { ElementType } from 'src/utils/types'
import {
  formAppearanceAnimation,
  enterKeyAnimation,
  noValueInputAnimation,
  formInstructionsAppearanceAnimation,
} from './utils/animations'
import { FORM_INPUT, FORM } from './utils/constants'
import './index.css'

class Form {
  readonly formRoot: ElementType

  formAppearanceAnimation: GSAPAnimation

  formInstructionsAppearanceAnimation: GSAPAnimation

  input: HTMLInputElement | null | undefined

  constructor() {
    this.formRoot = FORM as ElementType
    this.input = FORM_INPUT as HTMLInputElement | null | undefined
    this.formAppearanceAnimation = formAppearanceAnimation
    this.formInstructionsAppearanceAnimation = formInstructionsAppearanceAnimation
  }

  init = () => {
    if (!this.formAppearanceAnimation.isActive()) this.formAppearanceAnimation.restart()
    if (!this.formInstructionsAppearanceAnimation.isActive())
      this.formInstructionsAppearanceAnimation.restart()
    this.formRoot?.addEventListener('keypress', this.onSubmit)
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
