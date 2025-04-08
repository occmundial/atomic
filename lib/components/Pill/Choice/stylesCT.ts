import colors from '@/tokens/ct/colors.json'
import fonts from '@/tokens/ct/fonts.json'
import spacing from '@/tokens/ct/spacing.json'
import shadows from '@/tokens/ct/shadows.json'
import borderRadius from '@/tokens/ct/borderRadius.json'
import { objectToFontValue } from '@/utils/font'
import { CT as brand } from '@/constants/index'

const styles = {
  pill: {
    height: spacing['size-6'],
    padding: [spacing['size-1'], spacing['size-2']],
    border: 0,
    position: 'relative',
    zIndex: 0,
    outline: 0,
    transition: '0.3s all',
    cursor: 'pointer',
    borderRadius: borderRadius['br-md'],
    maxWidth: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    minWidth: 'auto'
  },
  enabled: {
    background: colors.pill.unselected.bg.default,
    border: `1px solid ${colors.border.default.subtle}`,
    '&:hover': {
      border: `1px solid ${colors.border.default.default}`
    },
    '&:active': {
      border: `1px solid ${colors.border.default.bold}`
    },
    '&:focus-visible': {
      boxShadow: shadows['focus-blue'],
      border: `1px solid ${colors.border.default.bold}`
    }
  },
  disabled: {
    background: colors.pill.unselected.bg.disabled,
    border: `1px solid ${colors.pill.unselected.border.disabled}`,
    pointerEvents: 'none'
  },
  selected: {
    background: colors.pill.selected.bg.default,
    zIndex: 1,
    color: colors.pill.selected.text.default,
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
  selectedDisabled: {
    background: colors.pill.selected.bg.disabled,
    pointerEvents: 'none'
  },
  text: {
    flex: 1,
    overflow: 'hidden',
    font: objectToFontValue(fonts['body-regular'], brand),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: [0, spacing['size-1']]
  },
  textSelectedDisabled: {
    color: colors.pill.selected.text.disabled
  },
  textSelected: {
    color: colors.pill.selected.text.default
  },
  textDisabled: {
    color: colors.pill.unselected.text.disabled
  },
  textEnabled: {
    color: colors.pill.unselected.text.default
  },
  leftIcon: {
    marginRight: spacing['size-1']
  },
  rightIcon: {
    marginLeft: spacing['size-1']
  }
}

export default styles
