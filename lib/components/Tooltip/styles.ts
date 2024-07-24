import { createUseStyles } from 'react-jss'
import colors from '@/tokens/colors'
import newColors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import fonts from '@/tokens/future/fonts.json'
import { objectToFontValue } from '@/utils/font'

const { infoLight, infoText, info, white } = colors

export default createUseStyles({
  activator: {
    display: 'inline-block'
  },
  tooltip: {
    padding: [spacing['size-2'], spacing['size-3']],
    borderRadius: borderRadius['br-xs'],
    display: 'flex',
    gap: spacing['size-1'],
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    background: infoLight,
    color: infoText
  },
  dark: {
    background: newColors.bg.neutral,
    color: white,
    boxShadow: `inset 0 0 0 1px ${newColors.border.inverse.subtle}`
  },
  light: {
    background: newColors.bg.surface.default,
    color: info,
    '&:after': {
      boxShadow: `inset -2px -2px 0 -1px ${newColors.border.default.subtle}`
    },
    boxShadow: `inset 0 0 0 1px ${newColors.border.default.subtle}`
  },
  purple: {
    background: info,
    color: white
  },
  text: {
    font: objectToFontValue(fonts['body-x-small']),
    margin: 0
  }
})
