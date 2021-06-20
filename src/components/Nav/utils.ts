import gsap from 'gsap'
import { NAV_DECORATION, EASE_EXPO } from 'src/utils/constants'

export const topToBottomAnimation = gsap
  .timeline({ paused: true })
  .set(NAV_DECORATION, {
    transformOrigin: 'center top',
    top: 0,
    right: 'auto',
    bottom: 'auto',
    left: 0,
    transform: 'scaleX(1) scaleY(0)',
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
  .set(NAV_DECORATION, {
    transformOrigin: 'center top',
    top: 0,
    right: 'auto',
    bottom: 'auto',
    left: 0,
    transform: 'scaleX(1) scaleY(0)',
  })

export const bottomToTopAnimation = gsap
  .timeline({ paused: true })
  .set(NAV_DECORATION, {
    transformOrigin: 'center bottom',
    top: 'auto',
    right: 'auto',
    bottom: 0,
    left: 0,
    transform: 'scaleX(1) scaleY(0)',
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
  .set(NAV_DECORATION, {
    transformOrigin: 'center top',
    top: 0,
    right: 'auto',
    bottom: 'auto',
    left: 0,
    transform: 'scaleX(1) scaleY(0)',
  })

export const rightToLeftAnimation = gsap
  .timeline({ paused: true })
  .set(NAV_DECORATION, {
    transformOrigin: 'right center',
    top: 0,
    right: 0,
    bottom: 'auto',
    left: 'auto',
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
  .set(NAV_DECORATION, {
    transformOrigin: 'center top',
    top: 0,
    right: 'auto',
    bottom: 'auto',
    left: 0,
    transform: 'scaleX(1) scaleY(0)',
  })

export const leftToRightAnimation = gsap
  .timeline({ paused: true })
  .set(NAV_DECORATION, {
    transformOrigin: 'left center',
    top: 0,
    right: 0,
    bottom: 'auto',
    left: 'auto',
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
  .set(NAV_DECORATION, {
    transformOrigin: 'center top',
    top: 0,
    right: 'auto',
    bottom: 'auto',
    left: 0,
    transform: 'scaleX(1) scaleY(0)',
  })
