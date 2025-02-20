import { createUseStyles } from 'react-jss'
import colors from '@/tokens/colors'
import colorsNew from '@/tokens/future/colors.json'
import fonts from '@/tokens/future/fonts.json'
import { objectToFontValue } from '@/utils/font'

const { infoLight, infoText, info, white } = colors

export default createUseStyles({
  tooltip: {
    padding: '16px',
    borderRadius: '4px',
    font: objectToFontValue(fonts['body-small'])
  },
  info: {
    background: infoLight,
    color: infoText
  },
  dark: {
    background: colorsNew['alpha']['black']['100'],
    outline: `1px solid ${colorsNew['border']['inverse']['subtle']}`,
    outlineOffset: '-1px',
    color: white
  },
  light: {
    background: white,
    color: info
  },
  purple: {
    background: info,
    outline: `1px solid ${colorsNew['border']['inverse']['subtle']}`,
    outlineOffset: '-1px',
    color: white
  }
})
