import { createUseStyles } from 'react-jss'
import colors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'
import grid from '@/tokens/grid'

export default createUseStyles({
  divider: {
    height: 1,
    boxShadow: `inset 0 1px 0px 0px ${colors.border.default.subtle}`
  },
  gridContainer: {
    columnGap: spacing['size-3'],
    rowGap: spacing['size-7'],
    display: 'grid',
    gridTemplateColumns: '1fr min-content',
    [`@media (min-width: ${grid.xs}px)`]: {
      columnGap: spacing['size-4'],
      gridTemplateColumns: 'repeat(2, minmax(min-content, 1fr))'
    },
    [`@media (min-width: ${grid.sm}px)`]: {
      columnGap: spacing['size-5'],
      rowGap: 0,
      gridTemplateColumns: 'repeat(4, minmax(min-content, 1fr))'
    }
  }
})
