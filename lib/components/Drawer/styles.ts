import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import shadows from '@/tokens/future/shadows.json'
import spacing from '@/tokens/future/spacing.json'

export default createUseStyles({
  '@keyframes expand': {
    from: { height: 0 },
    to: { height: '100%' }
  },
  '@keyframes collapse': {
    from: { height: '100%' },
    to: { height: 0 }
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: colors.bg.surface.default,
    overflow: 'hidden',
    boxShadow: shadows['elevation-elevation-3']
  },
  show: {
    animation: '$expand 0.4s cubic-bezier(.4,0,.2,1)'
  },
  hide: {
    animation: '$collapse 0.4s cubic-bezier(.4,0,.2,1)'
  },
  content: {
    padding: spacing['size-3']
  }
})
