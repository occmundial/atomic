import { colors, grid, spacing } from '@/tokens/index'
import { createUseStyles } from 'react-jss'

export default createUseStyles({
  logoApp: {
    background: colors.ink,
    borderRadius: spacing.radius,
    height: 40,
    alignItems: 'center',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      width: 120
    }
  },
  appImage: {
    width: 120,
    height: 32,
    position: 'relative',
    display: 'block'
  },
  hide: {
    display: 'none'
  }
})
