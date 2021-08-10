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
    '&:hover $icon': {
      fill: colors.grey200
    }
  },
  check: {
    width: spacing.base,
    height: spacing.base,
    position: 'relative',
    '&:before': {
      content: '""',
      width: spacing.small,
      height: spacing.small,
      borderRadius: 4,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: `1px solid ${colors.grey200}`,
      background: colors.bgWhite
    }
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginTop: -1,
    fill: 'none',
    transition: '0.3s fill',
    zIndex: 1
  },
  active: {
    '& $icon': {
      fill: [colors.prim, '!important']
    }
  },
  undetermined: {
    '& $icon': {
      fill: [colors.prim, '!important'],
      marginTop: 0
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
