import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

export default createUseStyles({
  cont: {
    paddingTop: spacing.tiny,
    paddingBottom: spacing.tiny,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'start',
    cursor: 'pointer',
    outline: '0',
    '&:after': {
      content: '""',
      display: 'table',
      clear: 'both'
    },
    '&:hover $radio:after': {
      background: colors.grey200
    }
  },
  radio: {
    width: spacing.base,
    height: spacing.base,
    position: 'relative',
    '&:before': {
      content: '""',
      width: spacing.small,
      height: spacing.small,
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: `1px solid ${colors.grey200}`,
      background: colors.bgWhite
    },
    '&:after': {
      content: '""',
      width: 6,
      height: 6,
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      transition: '0.3s all',
      background: 'transparent'
    }
  },
  active: {
    '& $radio:after': {
      background: [colors.prim, '!important']
    }
  },
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none'
  },
  label: {
    marginLeft: spacing.tiny,
    cursor: 'pointer',
    float: 'left',
    flex: '1'
  },
  right: {
    marginLeft: spacing.tiny,
    float: 'right'
  },
  overflow: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
})
