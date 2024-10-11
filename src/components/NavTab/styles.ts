import grid from '@/tokens/grid'
import { createUseStyles } from 'react-jss'

const TRANSITION = 'cubic-bezier(0.25,0.46,0.45,0.94)'
export default createUseStyles({
  '@keyframes rotatereverse90deg': {
    '0%': {
      transform: 'rotate(-90deg)',
      opacity: 0
    },
    to: {
      transform: 'rotate(0deg)',
      opacity: 1
    }
  },
  '@keyframes rotate90deg': {
    '0%': {
      transform: 'rotate(0deg)',
      opacity: 1
    },
    to: {
      transform: 'rotate(90deg)',
      opacity: 0
    }
  },
  '@keyframes translateYOpen': {
    '0%': {
      transform: 'translateY(-15px)',
      opacity: 0
    },
    to: {
      transform: 'translateY(0px)',
      opacity: 1
    }
  },
  '@keyframes translateYClose': {
    '0%': {
      transform: 'translateY(0px)',
      opacity: 1
    },
    to: {
      transform: 'translateY(-15px)',
      opacity: 0
    }
  },
  [`@media screen and (min-width: ${grid.xs}px)`]: {
    onlyMobile: {
      display: 'none'
    }
  },
  [`@media screen and (max-width: ${grid.xs - 1}px)`]: {
    onlyDesktop: {
      display: 'none'
    }
  },
  onlyDesktop: {},
  onlyMobile: {},
  animateIconShow: {
    animation: '$rotate90deg .3s',
    animationTimingFunction: TRANSITION
  },
  animateIconHide: {
    animation: '$rotatereverse90deg .3s',
    animationTimingFunction: TRANSITION
  },
  animateCloseIconHide: {
    animation: '$rotatereverse90deg .3s',
    animationTimingFunction: TRANSITION
  },
  animateCloseIconShow: {
    animation: '$rotate90deg .3s',
    animationTimingFunction: TRANSITION
  },
  animateTranslateY: {
    animation: '$translateYOpen .3s',
    animationTimingFunction: TRANSITION
  }
})
