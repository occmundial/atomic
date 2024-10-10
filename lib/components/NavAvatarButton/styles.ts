import { createUseStyles } from 'react-jss'
import spacing from '@/tokens/future/spacing.json'

export default createUseStyles({
  mini: {
    padding: spacing['size-1'],
    '& > span > svg': {
      marginLeft: spacing['size-1']
    }
  },
  avatarButton: {
    '& > span > svg': {
      transition: '0.3s all!important'
    },
    '&:hover, &:focus, &:active': {
      '& > span > svg': {
        transform: 'translateY(2px)'
      }
    }
  },
  container: {
    display: 'inline-block'
  }
})
