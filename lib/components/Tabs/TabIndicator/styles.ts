import { createUseStyles } from 'react-jss'
import colors from '@/tokens/future/colors.json'

export default createUseStyles({
  container: {
    position: 'absolute',
    bottom: 0,
    height: 4,
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: colors.border.brand.default
  },
  small: {
    height: 2
  }
})
