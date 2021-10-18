import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import colors from '@/tokens/colors'

const {
  infoText,
  infoLight,
  warningText,
  warningLight,
  successText,
  successLight,
  errorText,
  errorLight,
  white,
  grey900
} = colors
const { radius, large, medium, small, tiny } = spacing

export default createUseStyles({
  container: {
    padding: small,
    borderRadius: radius
  },
  info: {
    color: infoText,
    backgroundColor: infoLight
  },
  warning: {
    color: warningText,
    backgroundColor: warningLight
  },
  success: {
    color: successText,
    backgroundColor: successLight
  },
  error: {
    color: errorText,
    backgroundColor: errorLight
  },
  promote: {
    color: white,
    backgroundColor: grey900
  },
  icon: {
    marginRight: tiny
  },
  noBorderRadius: {
    borderRadius: 0
  },
  text: {
    maxWidth: '100%'
  },
  textWithIcon: {
    maxWidth: `calc(100% - ${medium}px)`
  },
  spacedClose: {
    marginRight: large
  },
  cta: {
    textDecoration: 'underline',
    cursor: 'pointer',
    color: 'currentcolor',
    '&:hover': {
      color: 'currentcolor'
    }
  }
})
