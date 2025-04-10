import spacing from '@/tokens/ct/spacing.json'
import borderRadius from '@/tokens/ct/borderRadius.json'
import fonts from '@/tokens/ct/fonts.json'
import colors from '@/tokens/ct/colors.json'
import { objectToFontValue } from '@/utils/font'
import { CT as brand } from '@/constants/index'

const { tag } = colors
const spacing3 = spacing['size-3']

const styles = {
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
    font: objectToFontValue(fonts['heading-tag'], brand),
    fontStretch: 'normal',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block'
  },
  default: {
    display: 'none'
  },
  basic: {
    display: 'none'
  },
  link: {
    display: 'none'
  },
  featured: {
    color: tag.featured.text,
    background: tag.featured.bg,
    '& $icon': {
      color: tag.featured.icon
    }
  },
  promo: {
    color: tag.promo.text,
    background: tag.promo.bg,
    '& $icon': {
      color: tag.promo.icon
    }
  },
  success: {
    color: tag.success.text,
    background: tag.success.bg,
    border: `1px solid ${tag.success.border}`,
    '& $icon': {
      color: tag.success.icon
    }
  },
  info: {
    color: tag.info.text,
    background: tag.info.bg,
    border: `1px solid ${tag.info.border}`,
    '& $icon': {
      color: tag.info.icon
    }
  },
  warning: {
    color: tag.warning.text,
    background: tag.warning.bg,
    border: `1px solid ${tag.warning.border}`,
    '& $icon': {
      color: tag.warning.icon
    }
  },
  error: {
    color: tag.error.text,
    background: tag.error.bg,
    border: `1px solid ${tag.error.border}`,
    '& $icon': {
      color: tag.error.icon
    }
  },
  icon: {
    display: 'inline-block',
    marginRight: spacing['size-1'],
    content: '""',
    paddingBottom: 0,
    left: 0,
    backgroundRepeat: 'no-repeat',
    height: spacing3,
    width: spacing3
  }
}

export default styles
