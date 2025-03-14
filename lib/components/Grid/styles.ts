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
    width: grid.full,
    margin: '0 auto',
    padding: [0, spacing['size-3']]
  },
  [`@media (min-width: ${grid.xs}px)`]: {
    con: {
      width: grid.full,
      padding: [0, spacing['size-4']]
    },
    conFluid: {
      width: grid.full,
      padding: [0, spacing['size-4']]
    }
  },
  [`@media (min-width: ${grid.sm}px)`]: {
    con: {
      width: grid.full,
      padding: [0, spacing['size-5']]
    },
    conFluid: {
      width: grid.full,
      padding: [0, spacing['size-5']]
    }
  },
  [`@media (min-width: ${grid.md}px)`]: {
    con: {
      width: grid.full,
      padding: [0, spacing['size-7']]
    },
    conFluid: {
      width: grid.full,
      padding: [0, spacing['size-7']]
    }
  },
  [`@media (min-width: ${grid.lg}px)`]: {
    con: {
      width: grid.lgGrid,
      padding: 0
    }
  },
  [`@media (min-width: ${grid.xl}px)`]: {
    con: {
      width: grid.xlGrid
    }
  }
})
