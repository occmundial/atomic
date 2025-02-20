import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/future/spacing.json'

export default createUseStyles({
  pager: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  prev: {
    marginRight: spacing['size-2']
  },
  next: {
    marginLeft: spacing['size-2']
  }
})
