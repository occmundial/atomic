import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'
import grid from '@/tokens/grid'

import newFonts from '@/tokens/future/fonts.json'
import newColors from '@/tokens/future/colors.json'
import newSpacing from '@/tokens/future/spacing.json'
import { objectToFontValue } from 'lib/utils/font'

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

export default createUseStyles({
  text: {
    letterSpacing: 0,
    fontFamily: fonts.body,
    fontWeight: 300,
    fontStyle: 'normal',
    margin: 0
  },
  // Sizes
  display: {
    font: objectToFontValue(displayM),
    letterSpacing: displayM.letterSpacing,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      letterSpacing: display.letterSpacing,
      font: objectToFontValue(display)
    }
  },
  h1: {
    font: objectToFontValue(h1M),
    letterSpacing: h1M.letterSpacing,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      font: objectToFontValue(h1),
      letterSpacing: h1.letterSpacing
    }
  },
  h2: {
    font: objectToFontValue(h2M),
    [`@media screen and (min-width:${grid.sm}px)`]: {
      font: objectToFontValue(h2)
    }
  },
  h3: {
    font: objectToFontValue(h3M),
    [`@media screen and (min-width:${grid.sm}px)`]: {
      font: objectToFontValue(h3)
    }
  },
  h4: {
    font: objectToFontValue(h4M),
    [`@media screen and (min-width:${grid.sm}px)`]: {
      font: objectToFontValue(h4)
    }
  },
  h5: {
    font: objectToFontValue(h5)
  },
  tag: {
    font: objectToFontValue(tag)
  },
  bodyXLarge: {
    font: objectToFontValue(bodyXLarge)
  },
  bodyLargeStrong: {
    font: objectToFontValue(bodyLargeStrong)
  },
  bodyLarge: {
    font: objectToFontValue(bodyLarge)
  },
  bodyRegularStrong: {
    font: objectToFontValue(bodyRegularStrong)
  },
  bodyRegular: {
    font: objectToFontValue(bodyRegular)
  },
  bodySmallStrong: {
    font: objectToFontValue(bodySmallStrong)
  },
  bodySmall: {
    font: objectToFontValue(bodySmall)
  },
  bodyXSmall: {
    font: objectToFontValue(bodyXSmall)
  },
  // Weight
  strong: {
    fontWeight: 400
  },
  // Colors
  indigoPrimary: {
    color: newColors.text.indigo.primary
  },
  indigoSecondary: {
    color: newColors.text.indigo.secondary
  },
  pinkPrimary: {
    color: newColors.text.pink.primary
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
  info: {
    color: colors.infoText
  },
  disabled: {
    color: colors.inkLightest
  },
  whiteSecondary: {
    color: newColors.text.white.secondary
  },
  whitePrimary: {
    color: newColors.text.white.primary
  },
  link: {
    color: colors.textLink
  },
  current: {
    color: 'currentcolor'
  },
  // Emphasis
  corpPrimary: {
    color: newColors.text.corp.primary
  },
  corpSecondary: {
    color: newColors.text.corp.secondary
  },
  corpDisabled: {
    color: newColors.text.corp.disabled
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
})
