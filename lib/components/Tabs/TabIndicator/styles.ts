import { createUseStyles } from 'react-jss'
import colors from '@/tokens/future/colors.json'

export default createUseStyles({
  container: {
    position: 'absolute',
    height: 4,
    bottom: 0,
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    backgroundColor: colors.border.brand.default
  }
})
