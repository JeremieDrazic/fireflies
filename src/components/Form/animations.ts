import { gsap } from 'gsap'
import {
  FORM_INPUT,
  FORM_INPUT_WRAPPER,
  FORM_INPUT_BORDER,
  EASE_EXPO,
  FORM_ENTER_KEY,
  FORM_INSTRUCTIONS_DECORATION,
  FORM_INSTRUCTIONS_TEXT,
} from 'src/utils/constants'

export const formAppearanceAnimation = gsap
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
    onComplete: () => {
      const input = document.querySelector(FORM_INPUT) as HTMLInputElement
      input?.focus()
    },
  })

export const formInstructionsAppearanceAnimation = gsap
  .timeline({ paused: true })
  .to(FORM_INSTRUCTIONS_DECORATION, {
    scaleY: 1,
    duration: 0.3,
    ease: EASE_EXPO,
  })
  .set(FORM_INSTRUCTIONS_TEXT, { opacity: 1 })
  .set(FORM_INSTRUCTIONS_DECORATION, { transformOrigin: 'center bottom' })
  .to(FORM_INSTRUCTIONS_DECORATION, {
    scaleY: 0,
    duration: 0.3,
    ease: EASE_EXPO,
    onComplete: () => {
      const input = document.querySelector(FORM_INPUT) as HTMLInputElement
      input?.focus()
    },
  })

export const enterKeyAnimation = gsap
  .timeline({ paused: true })
  .to(FORM_ENTER_KEY, { duration: 0.1, scale: 0.9, ease: EASE_EXPO })
  .to(FORM_ENTER_KEY, { duration: 0.1, scale: 1, ease: EASE_EXPO })

export const noValueInputAnimation = gsap.timeline({ paused: true }).fromTo(
  FORM_INPUT_WRAPPER,
  {
    x: -4,
    opacity: 0.9,
    duration: 0.4,
    ease: 'rough({strength: 8, points: 100, template: linear.easeNone, randomize: false, clearProps:"all"})',
  },
  {
    x: 4,
    opacity: 1,
    duration: 0.4,
    ease: 'rough({strength: 8, points: 100, template: linear.easeNone, randomize: false, clearProps:"all"})',
  },
)
