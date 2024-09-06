import { createUseStyles } from 'react-jss'
import hexToRgba from 'hex-rgba'

import spacing from '@/tokens/future/spacing.json'
import shadows from '@/tokens/shadows'
import colors from '@/tokens/future/colors.json'
import grid from '@/tokens/grid'

const { nav } = colors

export default createUseStyles({
  container: {
    width: '100%',
    zIndex: 999,
    position: 'relative',
    transition: '0.3s all'
  },
  fixed: {
    position: 'fixed',
    top: 0,
    left: 0
  },
  bottom: {
    top: 'auto',
    bottom: 0
  },
  show: {
    marginTop: 0
  },
  hide: {
    marginTop: -spacing['size-9'],
    '& $nav': {
      boxShadow: 'none !important'
    }
  },
  isScrolled: {
    '& $nav': {
      boxShadow: shadows.lvl3
    },
    '& $blue': {
      background: hexToRgba(nav.bg.inverse, 95)
    },
    '& $white': {
      background: hexToRgba(nav.bg.default, 95)
    }
  },
  nav: {
    height: spacing['size-9'],
    transition: '0.3s all',
    boxShadow: shadows.lvl1
  },
  grid: {
    maxWidth: '100%',
    height: '100%',
    position: 'relative'
  },
  gridFluid: {
    [`@media screen and (min-width:${grid.lg}px)`]: {
      margin: '0 auto',
      maxWidth: grid.lg - 60
    },
    [`@media screen and (min-width:${grid.xl}px)`]: {
      margin: '0 auto',
      maxWidth: grid.xl - 60
    }
  },
  tab: {
    height: '100%'
  },
  blue: {
    background: nav.bg.inverse
  },
  white: {
    background: nav.bg.default
  },
  left: {
    '& $button': {
      marginRight: spacing['size-5']
    },
    '& $iconWrap': {
      marginRight: spacing['size-2']
    },
    '& $button:first-child, & $iconWrap:first-child': {
      marginLeft: 0
    },
    '& $navItem': {
      marginRight: spacing['size-4']
    },
    '& $navItem:first-child': {
      marginLeft: 0
    },
    '& $logo': {
      [`@media screen and (min-width:${grid.sm}px)`]: {
        marginRight: spacing['size-7']
      }
    }
  },
  right: {
    '& $button': {
      marginLeft: spacing['size-1']
    },
    '& $iconWrap': {
      marginLeft: spacing['size-2']
    },
    '& $button:first-child, & $iconWrap:first-child': {
      marginRight: 0
    },
    '& $navItem': {
      marginLeft: spacing['size-4']
    },
    '& $navItem:first-child': {
      marginRight: 0
    },
    '& $logo': {
      [`@media screen and (min-width:${grid.sm}px)`]: {
        marginRight: spacing['size-7']
      }
    }
  },
  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    '& $button, & $logo': {
      marginLeft: spacing['size-1'],
      marginRight: spacing['size-1']
    },
    '& $iconWrap': {
      marginLeft: spacing['size-2'],
      marginRight: spacing['size-2']
    },
    '& $button:first-child, & $iconWrap:first-child': {
      marginLeft: 0
    },
    '& $button:last-child, & $iconWrap:last-child': {
      marginRight: 0
    },
    '& $navItem': {
      marginLeft: spacing['size-2'],
      marginRight: spacing['size-2']
    },
    '& $navItem:first-child': {
      marginRight: 0
    }
  },
  button: {},
  navItem: {},
  iconWrap: {
    display: 'inline-block',
    '& > div': {
      padding: '0 8px'
    }
  },
  icon: {},
  arrow: {
    marginBottom: -spacing['size-1'],
    transition: '0.3s all'
  },
  arrowUp: {
    transform: 'rotate(180deg)'
  },
  logo: {}
})
