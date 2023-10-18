import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'
import spacing from '@/tokens/spacing'
import { base } from '@/tokens/icons'
import spinner from '@/tokens/icons/spinner'
import { ButtonProps } from './'

export default createUseStyles({
  btn: {
    display: 'inline-block',
    boxSizing: 'border-box',
    position: 'relative',
    maxWidth: '100%',
    height: spacing.medium,
    marginBottom: 0,
    padding: [0, spacing.small],
    borderRadius: spacing.radius,
    fontFamily: fonts.body,
    fontWeight: 600,
    fontSize: 13,
    lineHeight: `${spacing.base}px`,
    letterSpacing: 1,
    textAlign: 'center',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: '0.3s all',
    cursor: 'pointer',
    userSelect: 'none',
    touchAction: 'manipulation',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      textDecoration: 'none'
    }
  },
  cont: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
  },
  loadCont: {
    display: 'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none'
  },
  // Themes
  primary: {
    background: colors.sec,
    color: colors.white,
    border: `1px solid ${colors.sec}`,
    '&:hover, &:active': {
      background: colors.secDark,
      color: colors.white,
      borderColor: colors.secDark
    },
    '& $loadIcon': {
      background: base(spinner.icon(colors.bgWhite))
    }
  },
  secondary: {
    background: colors.primLighter,
    color: colors.textLink,
    border: `1px solid ${colors.primLighter}`,
    '&:hover, &:active': {
      background: colors.primLight,
      color: colors.textLink
    },
    '&$disabled': {
      background: `${colors.primLighter} !important`,
      color: `${colors.textLink} !important`,
      border: `1px solid ${colors.primLighter} !important`
    },
    '& $loadIcon': {
      background: base(spinner.icon(colors.textLink))
    }
  },
  tertiary: {
    background: colors.bgWhite,
    color: colors.ink,
    border: `1px solid ${colors.grey200}`,
    '&:hover, &:active': {
      color: colors.inkLight
    },
    '&$disabled': {
      background: `${colors.bgWhite} !important`,
      color: `${colors.ink} !important`,
      border: `1px solid ${colors.grey200} !important`
    },
    '& $loadIcon': {
      background: base(spinner.icon(colors.grey600))
    }
  },
  tertiaryWhite: {
    background: 'transparent',
    color: colors.white,
    border: `1px solid ${colors.grey200}`,
    '&:hover, &:active': {
      opacity: 0.6
    },
    '&$disabled': {
      background: `transparent !important`,
      color: `${colors.white} !important`,
      border: `1px solid ${colors.grey200} !important`
    },
    '& $loadIcon': {
      background: base(spinner.icon(colors.bgWhite))
    }
  },
  ghostPink: {
    background: 'transparent',
    color: colors.sec,
    border: 'none',
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover, &:active': {
      color: colors.secDark
    },
    '&$disabled': {
      background: `transparent !important`,
      color: `${colors.sec} !important`,
      border: `none !important`
    },
    '& $loadIcon': {
      background: base(spinner.icon(colors.sec))
    }
  },
  ghostGrey: {
    background: 'transparent',
    color: colors.ink,
    border: 'none',
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover, &:active': {
      color: colors.inkLight
    },
    '&$disabled': {
      background: `transparent !important`,
      color: `${colors.ink} !important`,
      border: `none !important`
    },
    '& $loadIcon': {
      background: base(spinner.icon(colors.grey600))
    }
  },
  ghostWhite: {
    background: 'transparent',
    color: colors.white,
    border: 'none',
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover, &:active': {
      opacity: 0.6
    },
    '&$disabled': {
      background: `transparent !important`,
      color: `${colors.white} !important`,
      border: `none !important`
    },
    '& $loadIcon': {
      background: base(spinner.icon(colors.bgWhite))
    }
  },
  loading: {
    pointerEvents: 'none',
    '& $cont': {
      visibility: 'hidden'
    }
  },
  disabled: {
    background: colors.sec,
    color: colors.white,
    border: `1px solid ${colors.sec}`,
    cursor: 'default',
    pointerEvents: 'none',
    opacity: 0.4,
    '&:hover, &:active, &:focus': {
      background: colors.sec,
      color: colors.white,
      border: `1px solid ${colors.sec}`
    }
  },
  // Sizes
  md: {
    fontSize: 15,
    height: 40,
    lineHeight: `${spacing.base}px`,
    '&$iconOnly': {
      padding: `0 ${spacing.gutter}px`
    }
  },
  lg: {
    fontSize: 15,
    height: spacing.large,
    lineHeight: `${spacing.base}px`,
    '&$iconOnly': {
      padding: `0 ${spacing.small}px`
    }
  },
  // Block
  block: {
    display: 'block',
    width: '100%'
  },
  // Icon
  iconLeft: {
    marginRight: 4
  },
  iconRight: {
    marginLeft: 4
  },
  '@keyframes iconRotate': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  iconOnly: {
    padding: [0, spacing.tiny]
  },
  round: {
    borderRadius: '50%'
  },
  loadIcon: {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-block',
    transition: '0.3s all',
    animation: '$iconRotate 1s infinite linear'
  }
})
