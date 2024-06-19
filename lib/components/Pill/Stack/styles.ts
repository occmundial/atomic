import { createUseStyles } from 'react-jss'
import colors from '@/tokens/future/colors.json'
import fonts from '@/tokens/future/fonts.json'
import spacing from '@/tokens/future/spacing.json'
import shadows from '@/tokens/future/shadows.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import { objectToFontValue } from '@/utils/font'

export default createUseStyles({
  pill: {
    background: colors.pill.unselected.bg.default,
    border: 0,
    height: spacing['size-6'],
    padding: [spacing['size-1'], spacing['size-2']],
    marginBottom: spacing['size-2'],
    position: 'relative',
    zIndex: 0,
    outline: 0,
    transition: '0.3s all',
    cursor: 'pointer',
    borderRadius: borderRadius['br-md'],
    maxWidth: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&:not(:last-child)': {
      marginRight: spacing['size-2']
    },
    '&:hover': {
      background: colors.pill.unselected.bg.hover
    },
    '&:active': {
      background: colors.pill.unselected.bg.active
    },
    '&:focus-visible': {
      boxShadow: shadows['focus-indigo']
    }
  },
  disabled: {
    background: colors.pill.unselected.bg.disabled,
    pointerEvents: 'none'
  },
  text: {
    flex: 1,
    overflow: 'hidden',
    font: objectToFontValue(fonts['body-regular']),
    color: colors.text.indigo.primary,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: [0, spacing['size-1']]
  },
  textDisabled: {
    color: colors.text.indigo.secondary
  },
  closeCont: {
    width: spacing['size-5'],
    height: spacing['size-5'],
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing['size-1']
  }
})
