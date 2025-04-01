import { CT as brand } from '@/constants/index'
import legacyColors from '@/tokens/colors'
import colors from '@/tokens/ct/colors.json'
import spacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/ct/borderRadius.json'
import fonts from '@/tokens/future/fonts.json'
import shadows from '@/tokens/ct/shadows.json'
import { objectToFontValue } from '@/utils/font'

const sm = fonts['button-small']
const md = fonts['button-medium']
const lg = fonts['button-large']

const styles = {
  btn: {
    display: 'inline-block',
    boxSizing: 'border-box',
    position: 'relative',
    maxWidth: '100%',
    marginBottom: 0,
    padding: [spacing['size-3'], spacing['size-4']],
    borderRadius: borderRadius['br-sm'],
    border: 0,
    font: objectToFontValue(sm, brand),
    textAlign: 'center',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: '0.3s all',
    cursor: 'pointer',
    userSelect: 'none',
    touchAction: 'manipulation',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      textDecoration: 'none'
    }
  },
  cont: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
  },
  loadCont: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none'
  },
  // Themes
  primary: {
    background: colors.button.primary.bg.default,
    color: colors.button.primary.text.default,
    outlineOffset: '-2px',
    '&:hover': {
      background: colors.button.primary.bg.hover
    },
    '&:active': {
      background: colors.button.primary.bg.active
    },
    '&:focus': {
      boxShadow: shadows['focus-orange']
    },
    '&:focus-visible': {
      boxShadow: shadows['focus-orange']
    },
    '&$disabled': {
      background: colors.button.primary.bg.disabled,
      color: colors.button.primary.text.disabled,
      cursor: 'not-allowed'
    },
    '& $icon': {
      fill: colors.button.primary.icon.default
    },
    '&$disabled $icon': {
      fill: colors.button.primary.icon.disabled
    }
  },
  secondary: {
    background: colors.button.secondary.bg.default,
    color: colors.button.secondary.text.default,
    '&:hover': {
      background: colors.button.secondary.bg.hover
    },
    '&:active': {
      background: colors.button.secondary.bg.active
    },
    '&:focus-visible': {
      boxShadow: shadows['focus-blue']
    },
    '&$disabled': {
      background: colors.button.secondary.bg.disabled,
      color: colors.button.secondary.text.disabled
    },
    '& $icon': {
      fill: colors.button.secondary.icon.default
    },
    '&$disabled $icon': {
      fill: colors.button.secondary.icon.disabled
    }
  },
  tertiary: {
    display: 'none'
  },
  tertiaryWhite: {
    display: 'none'
  },
  ghostPink: {
    display: 'none'
  },
  ghostGrey: {
    background: 'transparent',
    color: colors.button.ghost.text.default,
    '&:hover': {
      background: colors.button.ghost.bg.hover
    },
    '&:active': {
      background: colors.button.ghost.bg.active
    },
    '&:focus-visible': {
      boxShadow: shadows['focus-grey']
    },
    '&$disabled': {
      background: 'transparent',
      color: colors.button.ghost.text.disabled,
      '&$iconOnly': {
        background: colors.button.ghost.bg.active
      }
    },
    '& $icon': {
      fill: colors.button.ghost.icon.default
    },
    '&$disabled $icon': {
      fill: colors.button.ghost.icon.disabled
    }
  },
  ghostWhite: {
    display: 'none'
  },
  loading: {
    pointerEvents: 'none',
    '& $cont': {
      visibility: 'hidden'
    }
  },
  disabled: {
    cursor: 'default',
    pointerEvents: 'none'
  },
  // Sizes
  md: {
    font: objectToFontValue(md, brand),
    padding: [spacing['size-3'], spacing['size-5']],
    '&$iconOnly': {
      padding: [spacing['size-2'], spacing['size-2']]
    }
  },
  lg: {
    font: objectToFontValue(lg, brand),
    padding: [spacing['size-3'], spacing['size-6']],
    '&$iconOnly': {
      padding: [spacing['size-3'], spacing['size-3']]
    }
  },
  // Block
  block: {
    display: 'block',
    width: '100%'
  },
  // Icon
  icon: {},
  iconLeft: {
    marginRight: spacing['size-2']
  },
  iconRight: {
    marginLeft: spacing['size-2']
  },
  iconOnly: {
    padding: [spacing['size-2'], spacing['size-2']]
  },
  round: {
    borderRadius: '50%'
  }
}

export default styles
