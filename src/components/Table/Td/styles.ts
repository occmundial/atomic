import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'

export default createUseStyles({
  td: {
    padding: [spacing.tiny, spacing.small],
    textAlign: 'left'
  }
})
