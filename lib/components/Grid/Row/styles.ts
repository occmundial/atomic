import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/future/spacing.json'
import grid from '@/tokens/grid'

export default createUseStyles({
  row: {
    boxSizing: 'border-box',
    '&:before, &:after': {
      display: 'table',
      content: '""'
    },
    '&:after': {
      clear: 'both'
    },
    [`@media (min-width: ${grid.xxs}px)`]: {
      margin: [0, '-6px']
    },
    [`@media (min-width: ${grid.xs}px)`]: {
      margin: [0, `-${spacing['size-2']}`]
    },
    [`@media (min-width: ${grid.sm}px)`]: {
      margin: [0, `-${spacing['size-3']}`]
    }
  }
})
