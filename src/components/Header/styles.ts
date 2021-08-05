import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'

export default createUseStyles({
  title: {
    fontFamily: '"Pacifico", sans-serif',
    color: colors.sec,
    textDecoration: 'none',
    fontSize: 28,
    lineHeight: '32px'
  }
})
