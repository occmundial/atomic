import fontsOld from '@/tokens/fonts'

type FontToken = {
  fontFamily: string
  fontWeight: number
  lineHeight: number
  fontSize: string
  letterSpacing?: string
}

export const objectToFontValue = (font: FontToken, brand?: string) => {
  return `${font.fontWeight} ${font.fontSize}/${font.lineHeight} ${
    brand ? fontsOld[brand].body : fontsOld.OCC.body
  }`
}
