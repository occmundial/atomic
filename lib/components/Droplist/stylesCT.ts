import { CT as brand } from '@/constants/index'
import colors from '@/tokens/ct/colors.json'
import spacing from '@/tokens/ct/spacing.json'
import borderRadius from '@/tokens/ct/borderRadius.json'
import shadows from '@/tokens/ct/shadows.json'
import fonts from '@/tokens/ct/fonts.json'
import { objectToFontValue } from '@/utils/font'

const styles = {
  block: {
    background: colors['text-field'].bg.default,
    maxHeight: '320px',
    overflowY: 'auto',
    overflowX: 'hidden',
    border: `1px solid ${colors['text-field'].border.default}`,
    borderRadius: borderRadius['br-sm'],
    padding: `${[spacing['size-2']]} 0px`,
    boxShadow: shadows['elevation-elevation-4']
  },
  text: {
    margin: 0
  },
  group: {
    padding: [spacing['size-2'], spacing['size-4'], 0],
    display: 'inline-block'
  },
  groupText: {
    font: objectToFontValue(fonts['body-regular'], brand)
  },
  item: {
    position: 'relative',
    margin: [0, spacing['size-2']],
    display: 'flex',
    justifyContent: 'space-between',
    padding: [spacing['size-3'], spacing['size-4']],
    borderRadius: borderRadius['br-xs'],
    transition: '0.1s all',
    cursor: 'pointer',
    '&:hover': {
      background: colors.bg.brand.subtle
    },
    '&:active, &:focus': {
      //background: colors.dropdown.bg.active,
      '& > $rightText': {
        color: colors.icon.default.bold
      }
    }
  },
  disabled: {
    pointerEvents: 'none'
  },
  rightText: {
    font: objectToFontValue(fonts['body-regular'], brand),
    color: colors.text.default.bold
  },
  onFocus: {},
  icon: {
    marginRight: spacing['size-2']
  },
  mainText: {
    display: 'inline-block',
    font: objectToFontValue(fonts['body-regular'], brand),
    color: colors.text.default.bold
  },
  iconText: {
    display: 'inline-block'
  },
  corpDisabled: {},
  extraText: {
    marginLeft: spacing['size-1'],
    display: 'inline-block',
    font: objectToFontValue(fonts['body-x-small'], brand),
    color: colors.text.default.default
  },
  highlighted: {
    font: objectToFontValue(fonts['text-field-placeholder'], brand)
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center'
  }
}

export default styles
