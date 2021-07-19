import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import shadows from '@/tokens/shadows'
import spacing from '@/tokens/spacing'
import grid from '@/tokens/grid'

const styles = createUseStyles({
  card: {
    background: colors.white,
    borderRadius: 6,
    padding: spacing.small,
    position: 'relative',
    transition: '0.3s box-shadow, 0.3s transform',
    [`@media screen and (min-width:${grid.sm}px)`]: {
      padding: spacing.medium
    }
  },
  cardNoPadding: {
    extend: 'card',
    padding: 0,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      padding: 0
    }
  },
  flat: {
    boxShadow: shadows.lvl1,
    zIndex: 'auto'
  },
  rest: {
    boxShadow: shadows.lvl0,
    zIndex: 'auto'
  },
  raised: {
    boxShadow: shadows.lvl4,
    zIndex: 4
  },
  raisable: {
    '&:hover': {
      boxShadow: shadows.lvl4,
      transform: `translateY(-${spacing.xTiny}px)`,
      zIndex: 4
    }
  }
})

export default styles
