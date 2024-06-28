import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import fonts from '@/tokens/future/fonts.json'
import spacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import { objectToFontValue } from '@/utils/font'
import grid from '@/tokens/grid'

export default createUseStyles({
  container: {
    padding: spacing['size-3'],
    borderRadius: borderRadius['br-xs'],
    minHeight: '56px',
    alignItems: 'center',
    outlineOffset: '-1px',
    [`@media screen and (min-width:${grid.xs}px)`]: {
      padding: [spacing['size-2'], spacing['size-4']]
    }
  },
  noBorderRadius: {
    borderRadius: 0
  },
  info: {
    backgroundColor: colors.alert.info.bg,
    outline: `1px solid ${colors.alert.info.border}`
  },
  warning: {
    backgroundColor: colors.alert.warning.bg,
    outline: `1px solid ${colors.alert.warning.border}`
  },
  success: {
    backgroundColor: colors.alert.success.bg,
    outline: `1px solid ${colors.alert.success.border}`
  },
  error: {
    backgroundColor: colors.alert.error.bg,
    outline: `1px solid ${colors.alert.error.border}`
  },
  promote: {
    backgroundColor: colors.alert.neutral.bg,
    outline: `1px solid ${colors.alert.neutral.border}`
  },
  textInfo: {
    color: colors.text.indigo.primary
  },
  textWarning: {
    color: colors.text.warning
  },
  textSuccess: {
    color: colors.text.success
  },
  textError: {
    color: colors.text.error
  },
  textPromote: {
    color: colors.text.white.primary
  },
  icon: {
    marginRight: spacing['size-2'],
    flexShrink: 0
  },
  closeIconMargin: {
    marginLeft: spacing['size-4']
  },
  closeIconSmallMargin: {
    marginLeft: spacing['size-3']
  },
  cta: {
    textDecoration: 'underline',
    font: objectToFontValue(fonts['alert-default']),
    cursor: 'pointer',
    textWrap: 'nowrap',
    margin: [spacing['size-2'], 0, 0],
    alignSelf: 'start'
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
    font: objectToFontValue(fonts['alert-default']),
    display: 'inline-block',
    margin: 0
  },
  textContainer: {
    flex: 1
  },
  growText: {
    flexGrow: 1
  },
  maxWidth: {
    maxWidth: '1200px',
    margin: [0, 'auto']
  }
})
