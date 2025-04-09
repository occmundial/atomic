import newColors from '@/tokens/ct/colors.json'
import newFonts from '@/tokens/ct/fonts.json'
import borderRadius from '@/tokens/ct/borderRadius.json'
import newSpacing from '@/tokens/ct/spacing.json'
import shadows from '@/tokens/ct/shadows.json'
import { CT as brand } from '@/constants/index'

import { objectToFontValue } from '@/utils/font'

const placeholder = newFonts['text-field-placeholder']
const label = newFonts['text-field-label']
const assistiveText = newFonts['text-field-assistive-text']
const TRANSITION = 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s'
const border = {
  DEFAULT: `inset 0 0 0 1px ${newColors['text-field'].border.default}`,
  HOVER: `inset 0 0 0 1px ${newColors['text-field'].border.hover}`,
  FOCUS: `inset 0 0 0 2px ${newColors['text-field'].border.focus}`,
  ERROR: `inset 0 0 0 1px ${newColors['text-field'].border.error}`
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
  disabled: {
    '& $input': {
      background: newColors['text-field'].bg.disabled,
      border: `1px solid ${newColors['text-field'].border.disabled}`,
      color: newColors['text-field'].text.placeholder
    }
  },
  focus: {
    '& $input': {
      border: `1px solid ${newColors['text-field'].border.focus}`
    }
  },
  error: {
    '& $input': {
      border: `1px solid ${newColors['text-field'].border.error}`
    }
  },
  assistiveTextWrap: {
    display: 'flex'
  },
  assistiveText: {
    font: objectToFontValue(assistiveText, brand),
    color: newColors['text-field'].text.aux
  },
  assistiveError: {
    color: newColors['text-field'].text.error
  },
  label: {
    font: objectToFontValue(label, brand),
    color: newColors['text-field'].text.default
  },
  counter: {
    font: objectToFontValue(assistiveText, brand),
    color: newColors['text-field'].text.aux
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
    color: newColors['text-field'].text.default,
    font: objectToFontValue(placeholder, brand),
    background: newColors['text-field'].bg.default,
    borderRadius: borderRadius['br-sm'],
    padding: newSpacing['size-1'],
    paddingLeft: newSpacing['size-4'],
    border: `1px solid ${newColors['text-field'].border.default}`,
    transition: TRANSITION,
    appearance: 'none',
    '-webkit-appearance': 'none',
    caretColor: newColors['text-field'].text.default,
    '&::placeholder': {
      color: newColors.text.default.disabled
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
  inputDisabled: {
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  hasRightIcon: {
    marginRight: newSpacing['size-8']
  },
  select: {
    '&::-ms-expand': {
      display: 'none'
    },
    paddingRight: newSpacing['size-8'],
    '& optgroup': {},
    '& option': {
      font: objectToFontValue(placeholder, brand),
      color: newColors.text.default.bold,
      background: newColors['text-field'].bg.default,
      border: `1px solid ${newColors['text-field'].border.default}`,
      boxShadow: shadows['elevation-elevation-4'],
      borderRadius: borderRadius['br-sm'],
      '&:disabled': {}
    },
    '&:invalid, & option[value=""]': {}
  },
  textarea: {
    resize: 'none',
    padding: [newSpacing['size-3'], newSpacing['size-4']],
    height: 102,
    alignItems: 'flex-start'
  },
  hasIcon: {
    paddingLeft: newSpacing['size-8']
  },
  hasPass: {
    paddingRight: newSpacing['size-8']
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
  hasClear: {
    paddingRight: newSpacing['size-8']
  },
  alignRight: {
    textAlign: 'right'
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: newSpacing['size-2']
  }
}

export default styles
