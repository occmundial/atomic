import { CT as brand } from '@/constants/index'
import colors from '@/tokens/ct/colors.json'
import fonts from '@/tokens/ct/fonts.json'
import spacing from '@/tokens/ct/spacing.json'
import borderRadius from '@/tokens/ct/borderRadius.json'
import { objectToFontValue } from '@/utils/font'
import grid from '@/tokens/grid'

const spacing4 = spacing['size-4']

const styles = {
  container: {
    padding: spacing['size-3'],
    borderRadius: borderRadius['br-xs'],
    minHeight: '56px',
    alignItems: 'center',
    outlineOffset: '-1px',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      padding: [spacing['size-2'], spacing4]
    }
  },
  noBorderRadius: {
    borderRadius: 0
  },
  info: {
    backgroundColor: colors.alert.info.bg
  },
  ctInfo: {
    backgroundColor: colors.alert.info.bg
  },
  warning: {
    backgroundColor: colors.alert.warning.bg
  },
  success: {
    display: 'none' // No habilitado aún para CT.
  },
  error: {
    backgroundColor: colors.alert.error.bg
  },
  promote: {
    display: 'none' // No habilitado aún para CT.
  },
  textInfo: {
    color: colors.text.accent.default
  },
  textWarning: {
    color: colors.alert.warning.text
  },
  textError: {
    color: colors.alert.error.text
  },
  linkInfo: {
    color: colors.alert.info.text,
    backgroundRepeat: 'no-repeat'
  },
  linkWarning: {
    color: colors.alert.warning.text,
    backgroundRepeat: 'no-repeat'
  },
  linkError: {
    color: colors.alert.error.text,
    backgroundRepeat: 'no-repeat'
  },
  textSuccess: {},
  textPromote: {},
  linkSuccess: {},
  linkPromote: {},
  icon: {
    marginRight: spacing['size-2'],
    flexShrink: 0
  },
  closeIconMargin: {
    marginLeft: spacing4
  },
  closeIconSmallMargin: {
    marginLeft: spacing['size-3']
  },
  cta: {
    textDecoration: 'underline',
    font: objectToFontValue(fonts['alert-default'], brand),
    cursor: 'pointer',
    textWrap: 'nowrap',
    margin: [spacing['size-2'], 0, 0],
    alignSelf: 'start',
    transition: 'all ease-out 150ms',
    backgroundSize: '0%',
    '&:hover': {
      backgroundSize: '100%',
      cursor: 'pointer'
    }
  },
  ctaAlert: {
    margin: [0, 0, 0, spacing['size-4']],
    alignSelf: 'center'
  },
  ctaBanner: {
    margin: [0, 0, 0, spacing['size-2']],
    alignSelf: 'center'
  },
  normalText: {
    font: objectToFontValue(fonts['alert-default'], brand),
    display: 'inline-block',
    margin: 0
  },
  growText: {
    flexGrow: 1
  },
  maxWidth: {
    maxWidth: '1200px',
    margin: [0, 'auto']
  }
}

export default styles
