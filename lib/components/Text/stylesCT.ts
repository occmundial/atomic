import { CT as brand } from '@/constants/index'

import fonts from '@/tokens/fonts'
import grid from '@/tokens/grid'

import newFonts from '@/tokens/ct/fonts.json'
import newColors from '@/tokens/ct/colors.json'
import newSpacing from '@/tokens/ct/spacing.json'
import { objectToFontValue } from '@/utils/font'
import { link } from 'fs'

const display = newFonts['display-display-clean']
const displayM = newFonts['mobile-display-clean-m']
const h1 = newFonts['heading-h1']
const h1M = newFonts['mobile-h1-m']
const h2 = newFonts['heading-h2']
const h2M = newFonts['mobile-h2-m']
const h3 = newFonts['heading-h3']
const h3M = newFonts['mobile-h3-m']
const h4 = newFonts['heading-h4']
const h4M = newFonts['mobile-h4-m']
const h5 = newFonts['heading-h5']
const tag = newFonts['heading-tag']
const bodyXLarge = newFonts['body-x-large']
const bodyLargeStrong = newFonts['body-large-strong']
const bodyLarge = newFonts['body-large']
const bodyRegularStrong = newFonts['body-regular-strong']
const bodyRegular = newFonts['body-regular']
const bodySmallStrong = newFonts['body-small-strong']
const bodySmall = newFonts['body-small']
const bodyXSmall = newFonts['body-x-small']

const styles = {
  text: {
    letterSpacing: 0,
    fontFamily: fonts[brand].body,
    fontWeight: 300,
    fontStyle: 'normal',
    margin: 0
  },
  // Sizes
  display: {
    font: objectToFontValue(displayM, brand),
    letterSpacing: displayM.letterSpacing,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      letterSpacing: display.letterSpacing,
      font: objectToFontValue(display, brand)
    }
  },
  h1: {
    font: objectToFontValue(h1M, brand),
    letterSpacing: h1M.letterSpacing,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      font: objectToFontValue(h1, brand),
      letterSpacing: h1.letterSpacing
    }
  },
  h2: {
    font: objectToFontValue(h2M, brand),
    [`@media screen and (min-width:${grid.sm}px)`]: {
      font: objectToFontValue(h2, brand)
    }
  },
  h3: {
    font: objectToFontValue(h3M, brand),
    [`@media screen and (min-width:${grid.sm}px)`]: {
      font: objectToFontValue(h3, brand)
    }
  },
  h4: {
    font: objectToFontValue(h4M, brand),
    [`@media screen and (min-width:${grid.sm}px)`]: {
      font: objectToFontValue(h4, brand)
    }
  },
  h5: {
    font: objectToFontValue(h5, brand)
  },
  tag: {
    font: objectToFontValue(tag, brand)
  },
  bodyXLarge: {
    font: objectToFontValue(bodyXLarge, brand)
  },
  bodyLargeStrong: {
    font: objectToFontValue(bodyLargeStrong, brand)
  },
  bodyLarge: {
    font: objectToFontValue(bodyLarge, brand)
  },
  bodyRegularStrong: {
    font: objectToFontValue(bodyRegularStrong, brand)
  },
  bodyRegular: {
    font: objectToFontValue(bodyRegular, brand)
  },
  bodySmallStrong: {
    font: objectToFontValue(bodySmallStrong, brand)
  },
  bodySmall: {
    font: objectToFontValue(bodySmall, brand)
  },
  bodyXSmall: {
    font: objectToFontValue(bodyXSmall, brand)
  },
  strong: {},
  // Colors
  indigoPrimary: {
    color: newColors.text.accent.bold
  },
  indigoSecondary: {},
  brand: {
    color: newColors.text.brand.bold
  },
  pinkPrimary: {
    color: newColors.text.accent.default
  },
  success: {
    color: newColors.text.success
  },
  warning: {
    color: newColors.text.warning
  },
  error: {
    color: newColors.text.error
  },
  info: {},
  disabled: {},
  whiteSecondary: {},
  whitePrimary: {
    color: newColors.text.inverse.bold
  },
  link: {},
  current: {
    color: 'currentcolor'
  },
  // Emphasis
  corpPrimary: {
    color: newColors.text.default.bold
  },
  corpSecondary: {
    color: newColors.text.default.default
  },
  corpDisabled: {
    color: newColors.text.default.disabled
  },
  // Align
  left: {
    textAlign: 'left'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  },
  // Spacing
  top0: {
    marginTop: newSpacing['size-0']
  },
  top1: {
    marginTop: newSpacing['size-1']
  },
  top2: {
    marginTop: newSpacing['size-2']
  },
  top3: {
    marginTop: newSpacing['size-3']
  },
  top4: {
    marginTop: newSpacing['size-4']
  },
  top5: {
    marginTop: newSpacing['size-5']
  },
  top6: {
    marginTop: newSpacing['size-6']
  },
  top7: {
    marginTop: newSpacing['size-7']
  },
  top8: {
    marginTop: newSpacing['size-8']
  },
  top9: {
    marginTop: newSpacing['size-9']
  },
  top10: {
    marginTop: newSpacing['size-10']
  },
  top11: {
    marginTop: newSpacing['size-11']
  },
  top12: {
    marginTop: newSpacing['size-12']
  },
  bottom0: {
    marginBottom: newSpacing['size-0']
  },
  bottom1: {
    marginBottom: newSpacing['size-1']
  },
  bottom2: {
    marginBottom: newSpacing['size-2']
  },
  bottom3: {
    marginBottom: newSpacing['size-3']
  },
  bottom4: {
    marginBottom: newSpacing['size-4']
  },
  bottom5: {
    marginBottom: newSpacing['size-5']
  },
  bottom6: {
    marginBottom: newSpacing['size-6']
  },
  bottom7: {
    marginBottom: newSpacing['size-7']
  },
  bottom8: {
    marginBottom: newSpacing['size-8']
  },
  bottom9: {
    marginBottom: newSpacing['size-9']
  },
  bottom10: {
    marginBottom: newSpacing['size-10']
  },
  bottom11: {
    marginBottom: newSpacing['size-11']
  },
  bottom12: {
    marginBottom: newSpacing['size-12']
  }
}

export default styles
