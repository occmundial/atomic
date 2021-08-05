import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'

export default createUseStyles({
  content: {
    paddingTop: spacing.xLarge + spacing.base,
    paddingBottom: spacing.xLarge
  }
})
