import fontsOld from '@/tokens/fonts'

type FontToken = {
  fontFamily: string
  fontWeight: number
  lineHeight: number
  fontSize: string
  letterSpacing?: string
}

export const objectToFontValue = (font: FontToken) =>
  `${font.fontWeight} ${font.fontSize}/${font.lineHeight} ${fontsOld.body}`
