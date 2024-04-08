import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'
import spacing from '@/tokens/spacing'
import { base } from '@/tokens/icons'
import spinner from '@/tokens/icons/spinner'
import { ButtonProps } from './'

import newColors from '@/tokens/future/colors.json'
import newSpacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import newFonts from '@/tokens/future/fonts.json'
import shadows from '@/tokens/future/shadows.json'

export default createUseStyles({
  btn: {
    display: 'inline-block', //*
    boxSizing: 'border-box', //*
    position: 'relative', //*
    maxWidth: '100%', //*
    marginBottom: 0, //*
    padding: [newSpacing['size-3'], newSpacing['size-4']], //*
    borderRadius: borderRadius['br-xs'], //*
    border: 0,
    font: newFonts['button-small'], //*
    textAlign: 'center', //*
    textDecoration: 'none', //*
    whiteSpace: 'nowrap', //*
    transition: '0.3s all',
    cursor: 'pointer', //*
    userSelect: 'none', //*
    touchAction: 'manipulation', //*
    '&:focus': {
      outline: 'none' //*
    },
    '&:hover': {
      textDecoration: 'none' //*
    }
  },
  cont: {
    display: 'flex', //*
    width: '100%', //*
    height: '100%', //*
    alignItems: 'center', //*
    justifyContent: 'center', //*
    pointerEvents: 'none' //*
  },
  loadCont: {
    display: 'flex', //*
    width: '100%', //*
    height: '100%', //*
    alignItems: 'center', //*
    justifyContent: 'center', //*
    position: 'absolute', //*
    top: 0, //*
    left: 0, //*
    pointerEvents: 'none' //*
  },
  // Themes
  primary: {
    background: newColors.button.primary.bg.default, //*
    color: newColors.text.white.primary, //*
    outline: `2px solid ${newColors.button.primary.border.default}`, //*
    outlineOffset: '-2px', //*
    '&:hover': {
      background: newColors.button.primary.bg.hover //*
    },
    '&:active': {
      background: newColors.button.primary.bg.active //*
    },
    '&:focus': {
      outline: `2px solid ${newColors.button.primary.border.default}` //*
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-pink'] //*
    },
    '&$disabled': {
      background: newColors.button.primary.bg.disabled, //*
      color: newColors.text.white.secondary, //*
      cursor: 'not-allowed' //*
    },
    '& $icon': {
      fill: newColors.icon.inverse.default
    },
    '&$disabled $icon': {
      fill: newColors.icon.inverse.disabled
    }
  },
  secondary: {
    background: newColors.button.secondary.bg.default, //*
    color: newColors.text.indigo.primary, //*
    '&:hover': {
      background: newColors.button.secondary.bg.hover //*
    },
    '&:active': {
      background: newColors.button.secondary.bg.active //*
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-indigo'] //*
    },
    '&$disabled': {
      background: newColors.button.secondary.bg.disabled, //*
      color: newColors.text.indigo.secondary //*
    },
    '& $icon': {
      fill: newColors.icon.brand.default
    },
    '&$disabled $icon': {
      fill: newColors.icon.brand.disabled
    }
  },
  tertiary: {
    background: 'transparent', //*
    color: newColors.text.indigo.primary, //*
    outline: `2px solid ${newColors.button.tertiary.border.default}`, //*
    outlineOffset: '-2px', //*
    '&:hover': {
      background: newColors.button.tertiary.bg.hover //*
    },
    '&:active': {
      background: newColors.button.tertiary.bg.active //*
    },
    '&:focus': {
      outline: `2px solid ${newColors.button.tertiary.border.default}` //*
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-indigo'] //*
    },
    '&$disabled': {
      background: 'transparent', //*
      color: newColors.text.indigo.secondary, //*
      outline: `2px solid ${newColors.button.tertiary.border.disabled}` //*
    },
    '& $icon': {
      fill: newColors.icon.brand.default
    },
    '&$disabled $icon': {
      fill: newColors.icon.brand.disabled
    }
  },
  tertiaryWhite: {
    background: 'transparent',
    color: newColors.text.white.primary,
    outline: `2px solid ${newColors.button.tertiary.border.inverse.default}`,
    outlineOffset: '-2px',
    '&:hover': {
      background: newColors.button.tertiary.bg.inverse.hover
    },
    '&:active': {
      background: newColors.button.tertiary.bg.inverse.active
    },
    '&:focus': {
      outline: `2px solid ${newColors.button.tertiary.border.inverse.default}`
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-white']
    },
    '&$disabled': {
      background: 'transparent',
      color: newColors.text.white.secondary
    },
    '& $icon': {
      fill: newColors.icon.inverse.default
    },
    '&$disabled $icon': {
      fill: newColors.icon.inverse.disabled
    }
  },
  ghostPink: {
    background: 'transparent',
    color: colors.sec,
    border: 'none',
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover, &:active': {
      color: colors.secDark
    },
    '&$disabled': {
      background: `transparent !important`,
      color: `${colors.sec} !important`,
      border: `none !important`
    },
    '& $icon': {
      fill: colors.sec
    }
  },
  ghostGrey: {
    background: 'transparent',
    color: newColors.text.corp.secondary,
    '&:hover': {
      background: newColors.button.ghost.bg.hover
    },
    '&:active': {
      background: newColors.button.ghost.bg.active
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-corp']
    },
    '&$disabled': {
      background: 'transparent',
      color: newColors.text.corp.disabled
    },
    '& $icon': {
      fill: newColors.icon.default.default
    },
    '&$disabled $icon': {
      fill: newColors.icon.default.disabled
    }
  },
  ghostWhite: {
    background: 'transparent',
    color: newColors.text.white.primary,
    '&:hover': {
      background: newColors.button.ghost.bg.inverse.hover
    },
    '&:active': {
      background: newColors.button.ghost.bg.inverse.active
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-white']
    },
    '&$disabled': {
      background: 'transparent',
      color: newColors.text.white.secondary
    },
    '& $icon': {
      fill: newColors.icon.inverse.default
    },
    '&$disabled $icon': {
      fill: newColors.icon.inverse.disabled
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
    font: newFonts['button-medium'], //*
    padding: [newSpacing['size-3'], newSpacing['size-5']], //*
    '&$iconOnly': {
      padding: [newSpacing['size-2'], newSpacing['size-2']]
    }
  },
  lg: {
    font: newFonts['button-large'], //*
    padding: [newSpacing['size-4'], newSpacing['size-6']], //*
    '&$iconOnly': {
      padding: [newSpacing['size-3'], newSpacing['size-3']]
    }
  },
  // Block
  block: {
    display: 'block', //*
    width: '100%' //*
  },
  // Icon
  icon: {},
  iconLeft: {
    marginRight: newSpacing['size-2']
  },
  iconRight: {
    marginLeft: newSpacing['size-2']
  },
  iconOnly: {
    padding: [newSpacing['size-2'], newSpacing['size-2']]
  },
  round: {
    borderRadius: '50%'
  }
})
