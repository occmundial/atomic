import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import colors from '@/tokens/colors'

export default createUseStyles({
  cont: {
    display: 'inline-block',
    height: spacing.xLarge,
    cursor: 'pointer',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 3,
      bottom: 0,
      left: 0,
      background: 'transparent',
      transition: '0.3s all'
    }
  },
  white: {
    color: colors.white
  },
  black: {
    color: colors.inkLight,
    '&:hover': {
      color: colors.ink
    }
  },
  flex: {
    height: spacing.xLarge
  },
  selected: {
    color: colors.prim,
    '&:hover': {
      color: colors.prim
    }
  },
  selectedWhite: {
    color: colors.white,
    '&:hover': {
      color: colors.white
    }
  },
  showBar: {
    '&:after': {
      background: colors.prim
    }
  },
  showBarSec: {
    '&:after': {
      background: colors.sec
    }
  },
  icon: {},
  text: {
    textTransform: 'uppercase',
    transition: '0.3s all'
  },
  pushText: {
    marginLeft: spacing.xTiny
  },
  withOpacity: {
    opacity: 0.6
  }
})
