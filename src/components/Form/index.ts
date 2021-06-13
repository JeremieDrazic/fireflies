import gsap from 'gsap'
import { FORM_INPUT, FORM_INPUT_BORDER, EASE_EXPO, ENTER_KEY } from '@utils/constants'
import './index.css'

class Form {
  readonly formRoot: HTMLElement

  formAnimation: GSAPAnimation

  input: HTMLInputElement | null

  constructor(formRoot: HTMLDivElement) {
    this.formRoot = formRoot
    this.input = this.formRoot.querySelector(FORM_INPUT)
    this.formAnimation = gsap
      .timeline({ paused: true })
      .to(FORM_INPUT_BORDER, {
        scaleY: 1,
        duration: 0.3,
        ease: EASE_EXPO,
      })
      .set(FORM_INPUT, { display: 'block' })
      .set(FORM_INPUT_BORDER, { transformOrigin: 'center bottom' })
      .to(FORM_INPUT_BORDER, {
        scaleY: 0.02,
        duration: 0.3,
        ease: EASE_EXPO,
        onComplete: () => this.input?.focus(),
      })
  }

  init = () => {
    if (!this.formAnimation.isActive()) this.formAnimation.restart()
    this.formRoot.addEventListener('keypress', this.onSubmit)
    window.addEventListener('keypress', this.onSubmit)
  }

  onSubmit = (e: KeyboardEvent) => {
    if (e.key === ENTER_KEY && !this.formAnimation.isActive() && this.input?.value)
      this.formAnimation.reverse()
  }
}

export default Form
