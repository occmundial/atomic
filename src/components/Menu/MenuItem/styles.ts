import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'

export default createUseStyles({
  item: {
    listStyle: 'none'
  },
  link: {
    color: colors.inkLight,
    textDecoration: 'none'
  },
  selected: {
    color: colors.sec
  }
})
