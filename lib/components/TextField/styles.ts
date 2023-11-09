import { createUseStyles } from 'react-jss'
import hexToRgba from 'hex-rgba'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'
import spacing from '@/tokens/spacing'

export default createUseStyles({
  container: {
    position: 'relative',
    marginBottom: spacing.tiny
  },
  top: {
    height: spacing.base,
    '&:after': {
      content: '""',
      clear: 'both'
    }
  },
  disabled: {
    '& $input': {
      borderColor: colors.inkLightest,
      color: colors.inkLightest,
      paddingTop: 9
    },
    '& $passIcon': {
      cursor: 'auto'
    }
  },
  focus: {
    '& $input': {
      borderColor: colors.prim
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
      borderColor: colors.error,
      color: colors.errorText,
      background: hexToRgba(colors.errorText, 4)
    },
    '& $input::placeholder': {
      color: colors.error
    },
    '& $searchField': {
      borderWidth: 2,
      color: colors.ink,
      paddingLeft: spacing.tiny - 1
    },
    '& $searchFieldHasIcon': {
      paddingLeft: 41
    }
  },
  filled: {
    '& $input': {
      borderColor: colors.grey900,
      borderWidth: 2,
      paddingLeft: spacing.tiny - 1
    },
    '& $searchFieldHasIcon': {
      paddingLeft: 41
    }
  },
  label: {
    transition: '0.3s all',
    '& a': {
      color: colors.textLink,
      textDecoration: 'none',
      outline: 'none'
    }
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
    height: 40,
    color: colors.ink,
    fontFamily: fonts.body,
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 1.5,
    background: colors.bgWhite,
    border: `1px solid ${colors.grey200}`,
    borderRadius: 4,
    padding: [spacing.tiny, spacing.small],
    boxShadow: 'none',
    outline: 'none',
    transition: '0.3s all',
    appearance: 'none',
    '-webkit-appearance': 'none',
    caretColor: colors.prim,
    '&::placeholder': {
      color: colors.inkLighter,
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
    height: 120,
    alignItems: 'flex-start'
  },
  hasIcon: {
    paddingLeft: 42
  },
  hasPass: {
    paddingRight: 42
  },
  icon: {
    position: 'absolute',
    left: spacing.small,
    top: '50%',
    transform: 'translateY(-50%)'
  },
  passIcon: {
    width: spacing.base,
    height: spacing.base,
    background: 'none',
    border: 0,
    padding: 3,
    margin: 0,
    position: 'absolute',
    right: 12,
    top: spacing.tiny,
    zIndex: 1,
    outline: 0,
    cursor: 'pointer'
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
    paddingRight: 42
  },
  clear: {
    width: spacing.base,
    height: spacing.base,
    background: 'none',
    border: 0,
    padding: 3,
    margin: 0,
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    outline: 0,
    cursor: 'pointer'
  },
  alignRight: {
    textAlign: 'right'
  },
  errorIcon: {
    marginBottom: -2
  },
  bottom: {
    height: 20,
    marginTop: spacing.xTiny
  },
  searchField: {
    height: spacing.large,
    borderRadius: spacing.base,
    borderColor: colors.grey600,
    background: [colors.bgWhite, '!important']
  },
  searchFieldHasIcon: {}
})
