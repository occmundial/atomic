import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'
import spacing from '@/tokens/spacing'

import newColors from '@/tokens/future/colors.json'
import newFonts from '@/tokens/future/fonts.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import newSpacing from '@/tokens/future/spacing.json'
import shadows from '@/tokens/future/shadows.json'

import { objectToFontValue } from '@/utils/font'

const font = newFonts['text-field-placeholder']

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
    },
    '& $passIcon': {
      cursor: 'auto'
    }
  },
  focus: {
    '& $input': {
      outline: `2px solid ${newColors['text-field'].border.focus} !important`,
      outlineOffset: '-2px',
      boxShadow: shadows['focus-bright-blue']
    },
    '& $searchField': {
      borderWidth: 2,
      paddingLeft: spacing.tiny - 1
    },
    '& $searchFieldHasIcon': {
      paddingLeft: 41
    }
  },
  error: {
    '& $input': {
      outline: `1px solid ${newColors['text-field'].border.error} !important`,
      outlineOffset: '-1px'
    },
    '& $searchField': {
      borderWidth: 2,
      color: colors.ink,
      paddingLeft: spacing.tiny - 1
    },
    '& $searchFieldHasIcon': {
      paddingLeft: newSpacing['size-8']
    }
  },
  filled: {
    '& $searchFieldHasIcon': {
      paddingLeft: newSpacing['size-8']
    }
  },
  assistiveText: {
    display: 'flex'
  },
  label: {
    transition: '0.3s all'
  },
  left: {
    float: 'left'
  },
  right: {
    float: 'right'
  },
  inputWrap: {
    boxSizing: 'border-box',
    position: 'relative'
  },
  input: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 48,
    color: newColors.text.corp.primary,
    fontFamily: fonts.body,
    font: objectToFontValue(font),
    background: newColors['text-field'].bg.default,
    outline: `1px solid ${newColors['text-field'].border.default}`,
    outlineOffset: -1,
    borderRadius: borderRadius['br-xs'],
    padding: [newSpacing['size-1'], newSpacing['size-4']],
    boxShadow: 'none',
    border: 'none',
    transition: '0.3s all, 0s outline, 0s outline-offset',
    appearance: 'none',
    '-webkit-appearance': 'none',
    caretColor: newColors.border.brand.default,
    '&::placeholder': {
      color: newColors.text.corp.secondary,
      transition: '0.3s all'
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
      borderColor: newColors['text-field'].border.hover
    }
  },
  inputDisabled: {
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  hasRightIcon: {
    marginRight: spacing.small
  },
  select: {
    '&::-ms-expand': {
      display: 'none'
    },
    paddingRight: spacing.medium,
    '& optgroup': {
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 1.5,
      color: colors.inkLight
    },
    '& option': {
      fontSize: 16,
      lineHeight: 1.5,
      color: colors.ink,
      '&:disabled': {
        color: colors.inkLighter
      }
    },
    '&:invalid, & option[value=""]': {
      color: colors.inkLighter
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
    width: 18,
    height: spacing.base,
    background: 'none',
    border: 0,
    padding: '3px 0',
    margin: 0,
    position: 'absolute',
    right: 12,
    top: spacing.tiny,
    zIndex: 1,
    outline: 0,
    pointerEvents: 'none'
  },
  hasClear: {
    paddingRight: newSpacing['size-8']
  },
  alignRight: {
    textAlign: 'right'
  },
  errorIcon: {
    marginBottom: -2,
    transition: 0
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: newSpacing['size-2']
  }
})
