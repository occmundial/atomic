import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'

export default createUseStyles({
  code: {
    fontFamily: `'Fira Code', monospace`,
    color: colors.sec,
    fontWeight: 'bold',
    fontSize: 13
  }
})
