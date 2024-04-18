import { createUseStyles } from 'react-jss'

import legacyColors from '@/tokens/colors'

import colors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import fonts from '@/tokens/future/fonts.json'
import shadows from '@/tokens/future/shadows.json'

const sm = fonts['button-small']
const md = fonts['button-medium']
const lg = fonts['button-large']

export default createUseStyles({
  btn: {
    display: 'inline-block',
    boxSizing: 'border-box',
    position: 'relative',
    maxWidth: '100%',
    marginBottom: 0,
    padding: [spacing['size-3'], spacing['size-4']],
    borderRadius: borderRadius['br-xs'],
    border: 0,
    font: `${sm.fontWeight} ${sm.fontSize}/${sm.lineHeight} ${sm.fontFamily}`,
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
    color: colors.text.white.primary,
    outline: `2px solid ${colors.button.primary.border.default}`,
    outlineOffset: '-2px',
    '&:hover': {
      background: colors.button.primary.bg.hover
    },
    '&:active': {
      background: colors.button.primary.bg.active
    },
    '&:focus': {
      outline: `2px solid ${colors.button.primary.border.default}`
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-pink']
    },
    '&$disabled': {
      background: colors.button.primary.bg.disabled,
      color: colors.text.white.secondary,
      cursor: 'not-allowed'
    },
    '& $icon': {
      fill: colors.icon.inverse.default
    },
    '&$disabled $icon': {
      fill: colors.icon.inverse.disabled
    }
  },
  secondary: {
    background: colors.button.secondary.bg.default,
    color: colors.text.indigo.primary,
    '&:hover': {
      background: colors.button.secondary.bg.hover
    },
    '&:active': {
      background: colors.button.secondary.bg.active
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-indigo']
    },
    '&$disabled': {
      background: colors.button.secondary.bg.disabled,
      color: colors.text.indigo.secondary
    },
    '& $icon': {
      fill: colors.icon.brand.default
    },
    '&$disabled $icon': {
      fill: colors.icon.brand.disabled
    }
  },
  tertiary: {
    background: 'transparent',
    color: colors.text.indigo.primary,
    outline: `2px solid ${colors.button.tertiary.border.default}`,
    outlineOffset: '-2px',
    '&:hover': {
      background: colors.button.tertiary.bg.hover
    },
    '&:active': {
      background: colors.button.tertiary.bg.active
    },
    '&:focus': {
      outline: `2px solid ${colors.button.tertiary.border.default}`
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-indigo']
    },
    '&$disabled': {
      background: 'transparent',
      color: colors.text.indigo.secondary,
      outline: `2px solid ${colors.button.tertiary.border.disabled}`
    },
    '& $icon': {
      fill: colors.icon.brand.default
    },
    '&$disabled $icon': {
      fill: colors.icon.brand.disabled
    }
  },
  tertiaryWhite: {
    background: 'transparent',
    color: colors.text.white.primary,
    outline: `2px solid ${colors.button.tertiary.border.inverse.default}`,
    outlineOffset: '-2px',
    '&:hover': {
      background: colors.button.tertiary.bg.inverse.hover
    },
    '&:active': {
      background: colors.button.tertiary.bg.inverse.active
    },
    '&:focus': {
      outline: `2px solid ${colors.button.tertiary.border.inverse.default}`
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-white']
    },
    '&$disabled': {
      background: 'transparent',
      color: colors.text.white.secondary
    },
    '& $icon': {
      fill: colors.icon.inverse.default
    },
    '&$disabled $icon': {
      fill: colors.icon.inverse.disabled
    }
  },
  ghostPink: {
    background: 'transparent',
    color: legacyColors.sec,
    border: 'none',
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover, &:active': {
      color: legacyColors.secDark
    },
    '&$disabled': {
      background: `transparent !important`,
      color: `${legacyColors.sec} !important`,
      border: `none !important`
    },
    '& $icon': {
      fill: legacyColors.sec
    }
  },
  ghostGrey: {
    background: 'transparent',
    color: colors.text.corp.secondary,
    '&:hover': {
      background: colors.button.ghost.bg.hover
    },
    '&:active': {
      background: colors.button.ghost.bg.active
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-corp']
    },
    '&$disabled': {
      background: 'transparent',
      color: colors.text.corp.disabled
    },
    '& $icon': {
      fill: colors.icon.default.default
    },
    '&$disabled $icon': {
      fill: colors.icon.default.disabled
    }
  },
  ghostWhite: {
    background: 'transparent',
    color: colors.text.white.primary,
    '&:hover': {
      background: colors.button.ghost.bg.inverse.hover
    },
    '&:active': {
      background: colors.button.ghost.bg.inverse.active
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-white']
    },
    '&$disabled': {
      background: 'transparent',
      color: colors.text.white.secondary
    },
    '& $icon': {
      fill: colors.icon.inverse.default
    },
    '&$disabled $icon': {
      fill: colors.icon.inverse.disabled
    }
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
    font: `${md.fontWeight} ${md.fontSize}/${md.lineHeight} ${md.fontFamily}`,
    padding: [spacing['size-3'], spacing['size-5']],
    '&$iconOnly': {
      padding: [spacing['size-2'], spacing['size-2']]
    }
  },
  lg: {
    font: `${lg.fontWeight} ${lg.fontSize}/${lg.lineHeight} ${lg.fontFamily}`,
    padding: [spacing['size-4'], spacing['size-6']],
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
})
