import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/future/spacing.json'

export default createUseStyles({
  autoComplete: {
    position: 'relative'
  },
  droplist: {
    position: 'absolute',
    zIndex: 2,
    top: `calc(100% + ${spacing['size-2']})`,
    left: 0,
    width: '100%'
  },
  pushDroplist: {
    top: `calc(100% - 21px)`
  }
})
