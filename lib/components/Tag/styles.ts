import { createUseStyles } from 'react-jss'
import spacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import fonts from '@/tokens/future/fonts.json'
import colorsNew from '@/tokens/future/colors.json'
import hexToRgba from 'hex-rgba'
import colors from '@/tokens/colors'
import { objectToFontValue } from '@/utils/font'

const { tag, text, icon } = colorsNew

const { grey900, grey100, textLink, bgWhite } = colors

export default createUseStyles({
  tag: {
    boxSizing: 'border-box',
    lineHeight: 1.5,
    textAlign: 'center',
    borderRadius: borderRadius['br-full'],
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block'
  },
  small: {
    padding: [spacing['size-0'], spacing['size-2']]
  },
  medium: {
    padding: [spacing['size-2'], spacing['size-3']]
  },
  large: {
    padding: [spacing['size-2'], spacing['size-4']],
    minHeight: 32,
    '& $icon': {
      height: spacing['size-4'],
      width: spacing['size-4']
    }
  },
  tagText: {
    boxSizing: 'border-box',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    font: objectToFontValue(fonts['heading-tag']),
    fontStretch: 'normal',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block'
  },
  default: {
    color: grey900,
    background: grey100
  },
  basic: {
    color: grey900,
    background: bgWhite
  },
  link: {
    color: textLink,
    background: hexToRgba(textLink, 10)
  },
  featured: {
    color: text.white.primary,
    background: tag.featured.bg,
    outline: `1px solid ${tag.featured.border}`,
    outlineOffset: -1,
    '& $icon': {
      color: icon.inverse.default
    }
  },
  promo: {
    color: text.white.primary,
    background: tag.promo.bg,
    outline: `1px solid ${tag.promo.border}`,
    outlineOffset: -1,
    '& $icon': {
      color: icon.inverse.default
    }
  },
  success: {
    color: text.success,
    background: tag.success.bg,
    outline: `1px solid ${tag.success.border}`,
    outlineOffset: -1,
    '& $icon': {
      color: icon.success
    }
  },
  info: {
    color: text.indigo.primary,
    background: tag.info.bg,
    outline: `1px solid ${tag.info.border}`,
    outlineOffset: -1,
    '& $icon': {
      color: icon.brand.bold
    }
  },
  warning: {
    color: text.warning,
    background: tag.warning.bg,
    outline: `1px solid ${tag.warning.border}`,
    outlineOffset: -1,
    '& $icon': {
      color: icon.warning
    }
  },
  error: {
    color: text.error,
    background: tag.error.bg,
    outline: `1px solid ${tag.error.border}`,
    outlineOffset: -1,
    '& $icon': {
      color: icon.error
    }
  },
  icon: {
    display: 'inline-block',
    marginRight: spacing['size-1'],
    content: '""',
    paddingBottom: 0,
    left: 0,
    backgroundRepeat: 'no-repeat',
    height: spacing['size-3'],
    width: spacing['size-3']
  }
})
