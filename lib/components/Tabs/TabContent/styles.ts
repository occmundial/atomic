import { createUseStyles } from 'react-jss'
import spacing from '@/tokens/future/spacing.json'

export default createUseStyles({
  container: {
    padding: spacing['size-4'],
    transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    opacity: 1
  },
  hide: {
    opacity: 0,
    display: 'none'
  }
})
