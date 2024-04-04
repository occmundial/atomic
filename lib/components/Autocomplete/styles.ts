import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'

export default createUseStyles({
  autoComplete: {
    position: 'relative'
  },
  droplist: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    left: 0,
    width: '100%'
  },
  pushDroplist: {
    top: spacing.xLarge
  }
})
