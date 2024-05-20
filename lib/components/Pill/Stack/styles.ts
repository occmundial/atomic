import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

export default createUseStyles({
  pill: {
    background: colors.bgWhite,
    border: `1px solid ${colors.grey200}`,
    height: spacing.medium,
    padding: `0 ${spacing.gutter}px`,
    marginBottom: spacing.tiny,
    position: 'relative',
    zIndex: 0,
    outline: 0,
    transition: '0.3s all',
    cursor: 'pointer',
    borderRadius: spacing.small,
    maxWidth: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    '&:not(:last-child)': {
      marginRight: spacing.tiny
    },
    '&:not(:first-child)': {
      marginLeft: -1
    },
    '&:hover': {
      background: colors.grey50
    }
  },
  disabled: {
    background: colors.white,
    borderColor: colors.grey100,
    color: colors.grey200,
    pointerEvents: 'none'
  },
  closeCont: {
    width: spacing.base,
    height: spacing.base,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -spacing.xTiny,
    marginLeft: -spacing.xTiny
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginLeft: spacing.xTiny,
    marginRight: spacing.xTiny
  }
})
