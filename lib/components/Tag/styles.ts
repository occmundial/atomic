import { createUseStyles } from 'react-jss'
import hexToRgba from 'hex-rgba'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'
import spacing from '@/tokens/spacing'

const {
  infoText,
  infoLight,
  successText,
  successLight,
  warningText,
  warningLight,
  errorText,
  errorLight,
  grey900,
  grey100,
  textLink,
  bgWhite,
  white,
  primDark
} = colors
const { xTiny, tiny, small, medium, gutter } = spacing

export default createUseStyles({
  tag: {
    boxSizing: 'border-box',
    lineHeight: 1.5,
    textAlign: 'center',
    borderRadius: small,
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block'
  },
  small: {
    padding: [1, tiny, 3, tiny],
    height: small
  },
  medium: {
    padding: [5, gutter, 7, gutter],
    height: medium
  },
  large: {
    padding: [tiny, small],
    height: 40,
    borderRadius: medium
  },
  tagText: {
    boxSizing: 'border-box',
    fontFamily: fonts.body,
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block'
  },
  smallTagText: {
    fontSize: 10
  },
  mediumTagText: {
    fontSize: 16
  },
  largeTagText: {
    fontSize: 16
  },
  default: {
    color: grey900,
    background: grey100
  },
  primary: {
    color: white,
    background: primDark
  },
  basic: {
    color: grey900,
    background: bgWhite
  },
  info: {
    color: infoText,
    backgroundColor: infoLight
  },
  success: {
    color: successText,
    background: successLight
  },
  warning: {
    color: warningText,
    background: warningLight
  },
  error: {
    color: errorText,
    background: errorLight
  },
  link: {
    color: textLink,
    background: hexToRgba(textLink, 10)
  },
  icon: {
    display: 'inline-block',
    marginRight: xTiny,
    content: '""',
    paddingBottom: 0,
    left: 0,
    backgroundRepeat: 'no-repeat'
  }
})
