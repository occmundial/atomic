import { createUseStyles } from 'react-jss'

import grid from '@/tokens/grid'
import spacing from '@/tokens/future/spacing.json'

export default createUseStyles({
  container: {
    position: 'fixed',
    zIndex: 1001,
    bottom: 0,
    left: 0,
    padding: spacing['size-4'],
    [`@media screen and (min-width:${grid.xs}px)`]: {
      padding: spacing['size-6']
    },
    [`@media screen and (max-width:${grid.xs - 1}px)`]: {
      width: '100vw'
    },
    pointerEvents: 'none'
  }
})
