import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import shadows from '@/tokens/future/shadows.json'
import fonts from '@/tokens/future/fonts.json'
import { objectToFontValue } from '@/utils/font'

export default createUseStyles({
  block: {
    background: colors['text-field'].bg.default,
    border: `1px solid ${colors['text-field'].border.default}`,
    borderRadius: borderRadius['br-xs'],
    padding: [spacing['size-2']],
    boxShadow: shadows['elevation-elevation-4'],
    overflow: 'hidden'
  },
  text: {
    margin: 0
  },
  group: {
    padding: [spacing['size-2'], spacing['size-4'], 0],
    display: 'inline-block'
  },
  groupText: {
    font: objectToFontValue(fonts['text-field-label'])
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
      '& > $rightText': {
        color: colors.text.corp.primary
      }
    }
  },
  disabled: {
    pointerEvents: 'none'
  },
  rightText: {
    font: objectToFontValue(fonts['text-field-label']),
    color: colors.text.corp.secondary
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
  mainText: {
    display: 'inline-block',
    font: objectToFontValue(fonts['text-field-placeholder']),
    color: colors.text.corp.primary
  },
  iconText: {
    display: 'inline-block'
  },
  corpDisabled: {
    color: colors.text.corp.disabled
  },
  extraText: {
    marginLeft: spacing['size-1'],
    display: 'inline-block',
    font: objectToFontValue(fonts['heading-tag']),
    color: colors.text.indigo.primary
  },
  highlighted: {
    background: colors.bg.action.secondary.default,
    font: objectToFontValue(fonts['text-field-placeholder'])
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center'
  }
})
