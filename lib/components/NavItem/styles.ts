import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

export default createUseStyles({
  link: {
    textDecoration: 'none',
    display: 'inline-block'
  },
  text: {
    opacity: 0.6,
    cursor: 'pointer',
    transition: '0.3s all',
    display: 'inline-block',
    '&:hover': {
      opacity: 1
    }
  },
  selected: {
    cursor: 'default',
    opacity: 1
  },
  notification: {
    display: 'inline-block',
    borderRadius: '50%',
    width: spacing.tiny,
    height: spacing.tiny,
    backgroundColor: colors.error,
    marginBottom: 1,
    marginLeft: spacing.xTiny
  }
})
