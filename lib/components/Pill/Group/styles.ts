import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'
import spacing from '@/tokens/spacing'

export default createUseStyles({
  pillGroup: {
    display: 'flex'
  },
  pill: {
    background: colors.bgWhite,
    border: `1px solid ${colors.grey200}`,
    height: spacing.medium,
    padding: [0, spacing.small],
    position: 'relative',
    zIndex: 1,
    outline: 0,
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    transition: '0.3s all',
    cursor: 'pointer',
    '&:first-child': {
      borderTopLeftRadius: spacing.small,
      borderBottomLeftRadius: spacing.small
    },
    '&:last-child': {
      borderTopRightRadius: spacing.small,
      borderBottomRightRadius: spacing.small
    },
    '&:not(:first-child)': {
      marginLeft: -1
    },
    '&:hover': {
      background: colors.grey50
    }
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  selected: {
    background: `${colors.primLighter} !important`,
    zIndex: 2,
    borderColor: colors.prim,
    color: colors.prim
  },
  disabled: {
    background: colors.white,
    borderColor: colors.grey100,
    color: colors.grey200,
    zIndex: 0,
    pointerEvents: 'none'
  }
})
