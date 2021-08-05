import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'

export default createUseStyles({
  tr: {
    borderBottom: `1px solid ${colors.bgGrey}`,
    '&:hover': {
      backgroundColor: colors.grey50
    }
  }
})
