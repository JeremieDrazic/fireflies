export const RIGHT = 'right'
export const LEFT = 'left'
export const TOP = 'top'
export const BOTTOM = 'bottom'

export type ElementSide = typeof RIGHT | typeof LEFT | typeof TOP | typeof BOTTOM
type MousePositionArg = { x: number; y: number }

const getMouseClosestEdge = (
  $el: HTMLElement | null | undefined,
  { x, y }: MousePositionArg,
): ElementSide => {
  if (!$el) return TOP
  const { top, right, bottom, left } = $el.getBoundingClientRect()
  const topEdgeDist = Math.abs(top - y)
  const bottomEdgeDist = Math.abs(bottom - y)
  const leftEdgeDist = Math.abs(left - x)
  const rightEdgeDist = Math.abs(right - x)

  const min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist)

  switch (min) {
    case leftEdgeDist:
      return LEFT
    case rightEdgeDist:
      return RIGHT
    case topEdgeDist:
      return TOP
    default:
      return BOTTOM
  }
}

export default getMouseClosestEdge
