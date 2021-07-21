import { createUseStyles } from 'react-jss'

import hexToRgba from 'hex-rgba'
import spacing from '@/tokens/spacing'
import colors from '@/tokens/colors'

const { info, warning, success, error } = colors
const { radius, small, tiny } = spacing
const alpha = 10

export default createUseStyles({
  container: {
    padding: small,
    borderRadius: radius
  },
  info: {
    backgroundColor: hexToRgba(info, alpha)
  },
  warning: {
    backgroundColor: hexToRgba(warning, alpha)
  },
  success: {
    backgroundColor: hexToRgba(success, alpha)
  },
  error: {
    backgroundColor: hexToRgba(error, alpha)
  },
  icon: {
    marginRight: tiny
  }
})
