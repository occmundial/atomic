import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'

export default createUseStyles({
  row: {
    boxSizing: 'border-box',
    marginRight: -spacing.gutter,
    marginLeft: -spacing.gutter,
    '&:before, &:after': {
      display: 'table',
      content: '""'
    },
    '&:after': {
      clear: 'both'
    }
  }
})
