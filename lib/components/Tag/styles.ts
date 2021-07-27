import { createUseStyles } from 'react-jss'
import hexToRgba from 'hex-rgba'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'
import icons from '@/tokens/icons'
import spacing from '@/tokens/spacing'
import iconSizes from '@/tokens/iconSizes'

import { TagProps } from './'

const {
  info,
  infoText,
  success,
  successText,
  warning,
  warningText,
  error,
  errorText,
  grey900,
  grey100,
  textLink
} = colors
const { xTiny, tiny, small, medium, gutter } = spacing
const { small: smallIcon } = iconSizes
const iconHeight = 13

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
    padding: [2, tiny],
    height: small
  },
  medium: {
    padding: [tiny, gutter],
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
  info: {
    color: infoText,
    backgroundColor: hexToRgba(info, 10)
  },
  success: {
    color: successText,
    background: hexToRgba(success, 10)
  },
  warning: {
    color: warningText,
    background: hexToRgba(warning, 10)
  },
  error: {
    color: errorText,
    background: hexToRgba(error, 10)
  },
  link: {
    color: textLink,
    background: hexToRgba(textLink, 10)
  },
  /* Icon with themes */
  icon: {
    display: 'inline-block',
    marginRight: xTiny,
    content: '""',
    paddingBottom: 0,
    position: 'relative',
    top: 0,
    left: 0,
    backgroundRepeat: 'no-repeat'
  },
  smallIcon: {
    width: gutter,
    height: gutter
  },
  mediumIcon: {
    width: smallIcon,
    height: smallIcon
  },
  largeIcon: {
    width: smallIcon,
    height: smallIcon
  },
  defaultIcon: {
    background: props =>
      props.iconName ? icons.base(icons[props.iconName].icon([grey900])) : ''
  },
  infoIcon: {
    background: props =>
      props.iconName ? icons.base(icons[props.iconName].icon([info])) : ''
  },
  successIcon: {
    background: props =>
      props.iconName ? icons.base(icons[props.iconName].icon([success])) : ''
  },
  warningIcon: {
    background: props =>
      props.iconName
        ? icons.base(icons[props.iconName].icon([warningText]))
        : ''
  },
  errorIcon: {
    background: props =>
      props.iconName ? icons.base(icons[props.iconName].icon([error])) : ''
  },
  linkIcon: {
    background: props =>
      props.iconName ? icons.base(icons[props.iconName].icon([textLink])) : ''
  }
})
