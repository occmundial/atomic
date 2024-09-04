import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/future/spacing.json'
import grid from '@/tokens/grid'

export default createUseStyles({
  bottomSection: {
    flexDirection: 'column',
    gap: spacing['size-5'],
    [`@media (min-width: ${grid.md}px)`]: {
      flexDirection: 'row'
    }
  },
  certificate: {
    position: 'relative',
    display: 'block'
  },
  socialMediaContainer: {
    display: 'flex',
    gap: spacing['size-4'],
    flexDirection: 'column',
    [`@media (min-width: ${grid.xs}px)`]: {
      flexDirection: 'row'
    }
  },
  bottomContainer: {
    justifyContent: 'start',
    alignItems: 'start'
  }
})
