import { createUseStyles } from 'react-jss'

import grid from '@/tokens/grid'
import spacing from '@/tokens/future/spacing.json'

export default createUseStyles({
  conFluid: {
    boxSizing: 'border-box',
    paddingRight: spacing['size-3'],
    paddingLeft: spacing['size-3'],
    marginRight: 'auto',
    marginLeft: 'auto',
    '&:before, &:after': {
      display: 'table',
      content: '""'
    },
    '&:after': {
      clear: 'both'
    }
  },
  con: {
    width: `calc(${grid.full} - ${spacing['size-5']})`,
    margin: 'auto'
  },
  [`@media (min-width: ${grid.xs}px)`]: {
    con: {
      width: `calc(${grid.full} - ${spacing['size-6']})`
    }
  },
  [`@media (min-width: ${grid.sm}px)`]: {
    con: {
      width: `calc(${grid.full} - ${spacing['size-8']})`
    }
  },
  [`@media (min-width: ${grid.md}px)`]: {
    con: {
      width: `calc(${grid.full} - ${spacing['size-10']})`
    }
  },
  [`@media (min-width: ${grid.lg}px)`]: {
    con: {
      width: grid.lgGrid
    }
  },
  [`@media (min-width: ${grid.xl}px)`]: {
    con: {
      width: grid.xlGrid
    }
  }
})
