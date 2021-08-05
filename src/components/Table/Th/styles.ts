import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import colors from '@/tokens/colors'

export default createUseStyles({
  th: {
    padding: [spacing.tiny, spacing.small],
    textAlign: 'left',
    background: colors.bgGrey
  }
})
