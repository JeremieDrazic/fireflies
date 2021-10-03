import Stage from 'src/components/Stage'
import { ENTER_KEY } from 'src/utils/constants'
import { ElementType } from 'src/utils/types'
import { FORM_INPUT, FORM } from 'src/utils/appNodes'
import {
  formAppearanceAnimation,
  formDisappearanceAnimation,
  enterKeyAnimation,
  noValueInputAnimation,
  formInstructionsAppearanceAnimation,
} from './animations'
import './index.css'

class Form {
  readonly formRoot: ElementType

  formAppearanceAnimation: GSAPAnimation

  formDisappearanceAnimation: (stage: any) => GSAPAnimation

  formInstructionsAppearanceAnimation: GSAPAnimation

  input: HTMLInputElement | null | undefined

  constructor() {
    this.formRoot = FORM as ElementType
    this.input = FORM_INPUT as HTMLInputElement | null | undefined
    this.formAppearanceAnimation = formAppearanceAnimation
    this.formDisappearanceAnimation = formDisappearanceAnimation
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
        const stage = new Stage(this.input?.value)
        stage.init()
        stage.animate()

        this.formDisappearanceAnimation(stage).restart()
        this.formInstructionsAppearanceAnimation.reverse()
      }
    }
  }
}

export default Form
