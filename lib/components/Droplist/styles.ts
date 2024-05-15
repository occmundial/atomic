import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import shadows from '@/tokens/future/shadows.json'

export default createUseStyles({
  block: {
    background: colors['text-field'].bg.default,
    border: `1px solid ${colors['text-field'].border.default}`,
    borderRadius: borderRadius['br-xs'],
    padding: [spacing['size-2']],
    boxShadow: shadows['elevation-elevation-4'],
    overflow: 'hidden'
  },
  group: {
    padding: [spacing['size-2'], spacing['size-4'], 0]
  },
  item: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    padding: [spacing['size-3'], spacing['size-4']],
    borderRadius: borderRadius['br-xs'],
    transition: '0.1s all',
    cursor: 'pointer',
    '&:hover': {
      background: colors.dropdown.bg.hover
    },
    '&:active, &:focus': {
      background: colors.dropdown.bg.active,
      '& > $right': {
        color: colors.text.corp.primary
      }
    }
  },
  right: {
    marginLeft: spacing['size-4']
  },
  onFocus: {
    background: colors.dropdown.bg.active,
    '&:hover': {
      background: colors.dropdown.bg.active
    }
  },
  icon: {
    marginRight: spacing['size-2']
  },
  iconText: {
    display: 'inline-block'
  },
  extraText: {
    marginLeft: spacing['size-1']
  },
  highlighted: {
    background: colors.bg.action.secondary.default
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center'
  }
})
