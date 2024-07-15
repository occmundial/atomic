import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import fonts from '@/tokens/future/fonts.json'
import spacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import shadows from '@/tokens/future/shadows.json'
import { objectToFontValue } from '@/utils/font'

export default createUseStyles({
  page: {
    display: 'flex',
    cursor: 'pointer',
    minWidth: 45,
    padding: [spacing['size-3'], spacing['size-2']],
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing['size-2'],
    borderRadius: borderRadius['br-xs'],
    background: 'transparent',
    font: objectToFontValue(fonts['button-small']),
    color: colors.text.corp.secondary,
    transition: '0.3s all',
    '&:focus-visible': {
      boxShadow: shadows['focus-corp']
    },
    outline: 'none',
    border: 'none',
    '&:hover': {
      background: colors.bg.action.ghost.hover
    },
    '&:active': {
      background: colors.bg.action.ghost.active
    }
  },
  static: {
    pointerEvents: 'none'
  },
  active: {
    background: `${colors.bg.action.brand.default} !important`,
    color: `${colors.text.white.primary} !important`,
    zIndex: 1
  },
  disabled: {
    pointerEvents: 'none',
    background: 'transparent',
    color: colors.text.corp.disabled
  }
})
