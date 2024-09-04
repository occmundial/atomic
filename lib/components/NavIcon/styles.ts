import { createUseStyles } from 'react-jss'
import colors from '@/tokens/future/colors.json'
import spacing from '@/tokens/future/spacing.json'

export default createUseStyles({
  cont: {
    display: 'inline-block',
    height: spacing['size-9'],
    cursor: 'pointer',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 3,
      bottom: 0,
      left: 0,
      background: 'transparent',
      transition: '0.3s all'
    }
  },
  white: {
    color: colors.text.white.secondary,
    '&:hover, &:focus, &:active': {
      color: colors.text.white.primary
    }
  },
  black: {
    color: colors.text.corp.secondary,
    '&:hover, &:focus, &:active': {
      color: colors.text.corp.primary
    }
  },
  flex: {
    height: spacing['size-9']
  },
  selected: {
    color: colors.text.corp.primary
  },
  selectedWhite: {
    color: colors.text.white.primary
  },
  showBar: {
    '&:after': {
      background: colors.border.accent
    }
  },
  text: {
    transition: '0.3s all'
  },
  pushText: {
    marginLeft: spacing['size-2']
  }
})
