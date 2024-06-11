import { createUseStyles } from 'react-jss'
import spacing from '@/tokens/future/spacing.json'
import colors from '@/tokens/future/colors.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import shadows from '@/tokens/future/shadows.json'

const { checkbox, icon } = colors

export default createUseStyles({
  cont: {
    paddingTop: spacing['size-2'],
    paddingBottom: spacing['size-2'],
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
    '&:focus $check:before': {
      boxShadow: shadows['focus-bright-blue'],
      borderWidth: 1
    },
    '&$active, &$undetermined': {
      '&:hover $check:before, &:active $check:before': {
        background: checkbox['selected']['bg']['hover']
      }
    },
    '&:not($active), &:not($undetermined)': {
      '&:hover $check:before, &:active $check:before': {
        borderColor: checkbox['unselected']['border']['hover']
      },
      '&:active $check:before': {
        borderWidth: 2
      }
    }
  },
  check: {
    width: spacing['size-5'],
    height: spacing['size-5'],
    position: 'relative',
    '&:before': {
      content: '""',
      boxSizing: 'border-box',
      width: 20,
      height: 20,
      borderRadius: borderRadius['br-xs'],
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: `1px solid ${checkbox['unselected']['border']['default']}`,
      background: checkbox['unselected']['bg']['default']
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
      fill: icon['inverse']['default']
    },
    '& $check:before': {
      borderColor: checkbox['selected']['border']['default'],
      background: checkbox['selected']['bg']['default']
    }
  },
  undetermined: {
    '& $icon': {
      fill: icon['inverse']['default'],
      marginTop: 0
    },
    '& $check:before': {
      borderColor: checkbox['selected']['border']['default'],
      background: checkbox['selected']['bg']['default']
    }
  },
  disabled: {
    pointerEvents: 'none',
    '&$active, &$undetermined': {
      '& $icon': {
        fill: icon['brand']['disabled']
      },
      '& $check:before': {
        borderColor: checkbox['selected']['border']['default'],
        background: checkbox['selected']['bg']['disabled']
      }
    },
    '&:not($active), &:not($undetermined)': {
      '& $check:before': {
        borderColor: checkbox['unselected']['border']['default'],
        background: checkbox['unselected']['bg']['disabled']
      }
    }
  },
  label: {
    marginLeft: spacing['size-2'],
    cursor: 'pointer',
    float: 'left',
    flex: '1'
  },
  right: {
    marginLeft: spacing['size-2'],
    float: 'right'
  },
  overflow: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }
})
