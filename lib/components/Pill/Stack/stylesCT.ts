import colors from '@/tokens/ct/colors.json'
import fonts from '@/tokens/ct/fonts.json'
import spacing from '@/tokens/ct/spacing.json'
import shadows from '@/tokens/ct/shadows.json'
import borderRadius from '@/tokens/ct/borderRadius.json'
import { objectToFontValue } from '@/utils/font'
import { CT as brand } from '@/constants/index'

const styles = {
  pill: {
    background: colors.pill.selected.bg.default,
    border: 0,
    height: spacing['size-6'],
    padding: [spacing['size-1'], spacing['size-2']],
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
    '&:hover': {
      background: colors.pill.selected.bg.hover
    },
    '&:active': {
      background: colors.pill.selected.bg.active
    },
    '&:focus-visible': {
      boxShadow: shadows['focus-blue']
    }
  },
  disabled: {
    background: colors.pill.selected.bg.disabled,
    pointerEvents: 'none'
  },
  text: {
    flex: 1,
    overflow: 'hidden',
    font: objectToFontValue(fonts['body-regular'], brand),
    color: colors.pill.selected.text.default,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: [0, spacing['size-1']]
  },
  textDisabled: {
    color: colors.pill.selected.text.disabled
  },
  closeCont: {
    width: spacing['size-5'],
    height: spacing['size-5'],
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing['size-1']
  },
  icon: {
    color: colors.pill.selected.icon.default
  },
  iconDisabled: {
    color: colors.pill.unselected.icon.disabled
  }
}

export default styles
