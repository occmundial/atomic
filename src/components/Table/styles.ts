import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'

export default createUseStyles({
  container: {
    overflowX: 'auto'
  },
  table: {
    borderCollapse: 'collapse',
    border: `1px solid ${colors.bgGrey}`,
    overflow: 'auto'
  }
})
