import { createUseStyles } from 'react-jss'

import fonts from '@/tokens/fonts'

import newColors from '@/tokens/future/colors.json'
import newFonts from '@/tokens/future/fonts.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import newSpacing from '@/tokens/future/spacing.json'
import shadows from '@/tokens/future/shadows.json'

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

export default createUseStyles({
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
      color: newColors.text.corp.disabled
    }
  },
  focus: {
    '& $input': {
      boxShadow: `${border.FOCUS}, ${shadows['focus-bright-blue']} !important`
    }
  },
  error: {
    '& $input': {
      boxShadow: border.ERROR
    }
  },
  assistiveTextWrap: {
    display: 'flex'
  },
  assistiveText: {
    font: objectToFontValue(assistiveText),
    color: newColors.text.corp.secondary
  },
  assistiveError: {
    color: newColors.text.error
  },
  label: {
    font: objectToFontValue(label),
    color: newColors.text.corp.primary
  },
  counter: {
    font: objectToFontValue(assistiveText),
    color: newColors.text.corp.secondary
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
    color: newColors.text.corp.primary,
    font: objectToFontValue(placeholder),
    background: newColors['text-field'].bg.default,
    borderRadius: borderRadius['br-xs'],
    padding: [newSpacing['size-1'], newSpacing['size-4']],
    boxShadow: border.DEFAULT,
    border: 'none',
    transition: TRANSITION,
    appearance: 'none',
    '-webkit-appearance': 'none',
    caretColor: newColors.border.brand.default,
    '&::placeholder': {
      color: newColors.text.corp.secondary
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
      boxShadow: border.HOVER
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
    '& optgroup': {
      font: objectToFontValue(label),
      color: newColors.text.corp.secondary
    },
    '& option': {
      font: objectToFontValue(placeholder),
      color: newColors.text.corp.primary,
      '&:disabled': {
        color: newColors.text.corp.disabled
      }
    },
    '&:invalid, & option[value=""]': {
      color: newColors.text.corp.disabled
    }
  },
  textarea: {
    resize: 'none',
    padding: [newSpacing['size-3'], newSpacing['size-4']],
    height: 120,
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
})
