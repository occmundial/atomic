import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'
import fonts from '@/tokens/future/fonts.json'
import { objectToFontValue } from '@/utils/font'
import shadows from '@/tokens/future/shadows.json'

export default createUseStyles({
  button: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing['size-2'],
    background: 'transparent',
    border: 0,
    transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s',
    whiteSpace: 'nowrap'
  },
  enabled: {
    color: colors.text.corp.secondary,
    cursor: 'pointer',
    '&:hover': {
      color: colors.text.corp.primary,
      '& $icon': {
        fill: colors.icon.default.bold
      }
    },
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `inset ${shadows['focus-bright-blue']}`
    }
  },
  small: {
    font: objectToFontValue(fonts['button-small']),
    padding: [spacing['size-3'], spacing['size-4']]
  },
  medium: {
    font: objectToFontValue(fonts['button-medium']),
    padding: [spacing['size-3'], spacing['size-5']]
  },
  large: {
    font: objectToFontValue(fonts['button-large']),
    padding: [spacing['size-4'], spacing['size-7']]
  },
  selected: {
    color: colors.text.corp.primary
  },
  disabled: {
    color: colors.text.corp.disabled
  },
  icon: {
    fill: colors.icon.default.default
  },
  iconDisabled: {
    fill: colors.icon.default.disabled
  }
})
