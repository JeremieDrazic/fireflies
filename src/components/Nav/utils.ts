import gsap from 'gsap'
import { NAV_DECORATION, EASE_EXPO } from '@utils/constants'

export const topToBottomAnimation = gsap
  .timeline({ paused: true })
  .set(NAV_DECORATION, {
    transformOrigin: 'center top',
    top: 0,
    left: 0,
    right: 'auto',
    bottom: 'auto',
    transform: 'scale(1, 0)',
  })
  .to(NAV_DECORATION, {
    scaleY: 1,
    duration: 0.3,
    ease: EASE_EXPO,
  })
  .set(NAV_DECORATION, { transformOrigin: 'center bottom' })
  .to(NAV_DECORATION, {
    scaleY: 0,
    duration: 0.3,
    ease: EASE_EXPO,
  })

export const bottomToTopAnimation = gsap
  .timeline({ paused: true })
  .set(NAV_DECORATION, {
    transformOrigin: 'center bottom',
    bottom: 0,
    top: 'auto',
    right: 'auto',
    left: 0,
    transform: 'scale(1, 0)',
  })
  .to(NAV_DECORATION, {
    scaleY: 1,
    duration: 0.3,
    ease: EASE_EXPO,
  })
  .set(NAV_DECORATION, { transformOrigin: 'center top' })
  .to(NAV_DECORATION, {
    scaleY: 0,
    duration: 0.3,
    ease: EASE_EXPO,
  })

export const rightToLeftAnimation = gsap
  .timeline({ paused: true })
  .set(NAV_DECORATION, {
    transformOrigin: 'right center',
    right: 0,
    left: 'auto',
    top: 0,
    bottom: 'auto',
    transform: 'scale(0, 1)',
  })
  .to(NAV_DECORATION, {
    scaleX: 1,
    duration: 0.3,
    ease: EASE_EXPO,
  })
  .set(NAV_DECORATION, { transformOrigin: 'left center' })
  .to(NAV_DECORATION, {
    scaleX: 0,
    duration: 0.3,
    ease: EASE_EXPO,
  })

export const leftToRightAnimation = gsap
  .timeline({ paused: true })
  .set(NAV_DECORATION, {
    transformOrigin: 'left center',
    right: 0,
    left: 'auto',
    top: 0,
    bottom: 'auto',
    transform: 'scale(0, 1)',
  })
  .to(NAV_DECORATION, {
    scaleX: 1,
    duration: 0.3,
    ease: EASE_EXPO,
  })
  .set(NAV_DECORATION, { transformOrigin: 'right center' })
  .to(NAV_DECORATION, {
    scaleX: 0,
    duration: 0.3,
    ease: EASE_EXPO,
  })
