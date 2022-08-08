import { createUseStyles } from 'react-jss'
import hexToRgba from 'hex-rgba'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'
import spacing from '@/tokens/spacing'

import { TagProps } from './'

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

export default createUseStyles<any, TagProps>({
  tag: {
    boxSizing: 'border-box',
    lineHeight: '12px',
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
    fontWeight: '600',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 1.4,
    letterSpacing: 'normal',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    paddingRight: props => (props.iconName ? xTiny : 0)
  },
  smallTagText: {
    fontSize: 11
  },
  mediumTagText: {
    fontSize: 15
  },
  largeTagText: {
    fontSize: 17
  },
  default: {
    color: grey900,
    background: grey100
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
  altLink: {
    color: white,
    background: primDark
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
