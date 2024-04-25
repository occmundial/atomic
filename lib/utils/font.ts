import fontsOld from '@/tokens/fonts'
import fonts from '@/tokens/future/fonts.json'

export const objectToFontValue = (font: typeof fonts['body-large']) =>
  `${font.fontWeight} ${font.fontSize}/${font.lineHeight} ${fontsOld.body}`
