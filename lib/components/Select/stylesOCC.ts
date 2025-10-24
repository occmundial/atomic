import newColors from '@/tokens/future/colors.json'
import newFonts from '@/tokens/future/fonts.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import newSpacing from '@/tokens/future/spacing.json'
import shadows from '@/tokens/future/shadows.json'
import { OCC as brand } from '@/constants/index'

import { objectToFontValue } from '@/utils/font'

const placeholder = newFonts['text-field-placeholder']
const label = newFonts['text-field-label']
const TRANSITION = 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s'
const border = {
  FOCUS: `inset 0 0 0 2px ${newColors['text-field'].border.focus}`
}

const styles = {
  container: {
    position: 'relative'
  },
  top: {
    display: 'flex',
    marginBottom: newSpacing['size-2'],
    '&:after': {
      content: '""',
      clear: 'both'
    }
  },
  focus: {
    '& $input': {
      boxShadow: `${border.FOCUS}, ${shadows['focus-bright-blue']} !important`
    }
  },
  label: {
    font: objectToFontValue(label, brand),
    color: newColors['text'].corp.primary
  },
  inputWrap: {
    boxSizing: 'border-box',
    position: 'relative'
  },
  input: {
    boxSizing: 'border-box',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 48,
    color: newColors['text'].corp.primary,
    font: objectToFontValue(placeholder, brand),
    background: newColors['text-field'].bg.default,
    borderRadius: borderRadius['br-xs'],
    padding: newSpacing['size-1'],
    paddingLeft: newSpacing['size-4'],
    border: `1px solid ${newColors['text-field'].border.default}`,
    transition: TRANSITION,
    appearance: 'none',
    '-webkit-appearance': 'none',
    caretColor: newColors['text'].corp.primary,
    '&::placeholder': {
      color: newColors.text.corp.primary
    },
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&[type=number]': {
      '-moz-appearance': 'textfield'
    },
    '&:hover': {
      border: `1px solid ${newColors['text-field'].border.hover}`
    }
  },
  select: {
    '&::-ms-expand': {
      display: 'none'
    },
    paddingRight: newSpacing['size-8'],
    '& optgroup': {},
    '& option': {
      font: objectToFontValue(placeholder, brand),
      color: newColors.text.corp.primary,
      background: newColors['text-field'].bg.default,
      border: `1px solid ${newColors['text-field'].border.default}`,
      boxShadow: shadows['elevation-elevation-4'],
      borderRadius: borderRadius['br-sm'],
      '&:disabled': {}
    },
    '&:invalid, & option[value=""]': {}
  },
  icon: {
    position: 'absolute',
    left: newSpacing['size-4'],
    top: '50%',
    transform: 'translateY(-50%)'
  },
  rightButton: {
    position: 'absolute',
    right: newSpacing['size-1'],
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1
  },
  selectIcon: {
    position: 'absolute',
    right: newSpacing['size-4'],
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none'
  },
  droplist: {
    position: 'absolute',
    width: '100%',
    zIndex: 1000
  }
}

export default styles
