import { createUseStyles } from 'react-jss'
import colors from '@/tokens/future/colors.json'
import fonts from '@/tokens/future/fonts.json'
import spacing from '@/tokens/future/spacing.json'
import shadows from '@/tokens/future/shadows.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import { objectToFontValue } from '@/utils/font'

export default createUseStyles({
  pill: {
    height: spacing['size-6'],
    padding: [spacing['size-1'], spacing['size-2']],
    marginBottom: spacing['size-2'],
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
    minWidth: 'auto',
    '&:not(:last-child)': {
      marginRight: spacing['size-2']
    }
  },
  enabled: {
    background: colors.pill.unselected.bg.default,
    '&:hover': {
      background: colors.pill.unselected.bg.hover
    },
    '&:active, &:focus': {
      background: colors.pill.unselected.bg.active
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-indigo'],
      background: colors.pill.unselected.bg.default
    }
  },
  disabled: {
    background: colors.pill.unselected.bg.disabled,
    pointerEvents: 'none'
  },
  selected: {
    background: `${colors.pill.selected.bg.default} !important`,
    zIndex: 1,
    color: colors.text.white.primary,
    '&:hover': {
      background: colors.pill.selected.bg.hover
    },
    '&:active, &:focus': {
      background: colors.pill.selected.bg.active
    },
    '&:not(:active):focus-visible': {
      boxShadow: shadows['focus-indigo']
    }
  },
  selectedDisabled: {
    background: colors.pill.selected.bg.disabled,
    pointerEvents: 'none'
  },
  text: {
    flex: 1,
    overflow: 'hidden',
    font: objectToFontValue(fonts['body-regular']),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: [0, spacing['size-1']],
    marginLeft: spacing['size-1'],
    marginRight: spacing['size-1']
  },
  textSelectedDisabled: {
    color: colors.text.white.secondary
  },
  textSelected: {
    color: colors.text.white.primary
  },
  textDisabled: {
    color: colors.text.indigo.secondary
  },
  textEnabled: {
    color: colors.text.indigo.primary
  }
})
