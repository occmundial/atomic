import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'
import fonts from '@/tokens/future/fonts.json'
import shadows from '@/tokens/future/shadows.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import { objectToFontValue } from '@/utils/font'

export default createUseStyles({
  pillGroup: {
    display: 'flex',
    background: colors.pill.unselected.bg.default,
    borderRadius: borderRadius['br-full'],
    marginBottom: spacing['size-2']
  },
  pill: {
    color: colors.text.indigo.primary,
    background: 'none',
    font: objectToFontValue(fonts['body-regular']),
    height: spacing['size-6'],
    padding: [0, spacing['size-4']],
    borderRadius: borderRadius['br-md'],
    position: 'relative',
    zIndex: 1,
    outline: 0,
    border: 0,
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    transition: '0.3s all',
    cursor: 'pointer',
    '&:hover': {
      background: colors.pill.unselected.bg.hover
    },
    '&:active': {
      background: colors.pill.unselected.bg.active
    },
    '&:focus-visible': {
      boxShadow: shadows['focus-indigo'],
      background: 'none'
    }
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  selected: {
    background: `${colors.pill.selected.bg.default} !important`,
    zIndex: 2,
    color: colors.text.white.primary
  },
  disabled: {
    color: colors.text.indigo.secondary,
    zIndex: 0,
    pointerEvents: 'none'
  }
})
