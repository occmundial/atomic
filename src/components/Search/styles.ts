import { createUseStyles } from 'react-jss'

import grid from '@/tokens/grid'

export default createUseStyles({
  searchWrap: {
    display: 'none',
    marginBottom: -6,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      width: 320,
      display: 'block'
    },
    [`@media screen and (min-width:${grid.md}px)`]: {
      width: 480
    }
  }
})
