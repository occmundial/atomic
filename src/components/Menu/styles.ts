import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'

export default createUseStyles({
  list: {
    paddingLeft: 0
  },
  item: {
    listStyle: 'none'
  },
  link: {
    color: colors.inkLight,
    textDecoration: 'none'
  }
})
