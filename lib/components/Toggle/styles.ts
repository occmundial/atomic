import { createUseStyles } from 'react-jss'
import spacing from '@/tokens/future/spacing.json'
import colors from '@/tokens/future/colors.json'
import shadows from '@/tokens/future/shadows.json'

const { switch: toggle } = colors

export default createUseStyles({
  cont: {
    paddingTop: spacing['size-2'],
    paddingBottom: spacing['size-2'],
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'start',
    cursor: 'pointer',
    outline: 0,
    '&:hover $switch$checked, &:active $switch$checked': {
      background: toggle['selected']['bg']['hover']
    },
    '&:focus $switch$checked': {
      boxShadow: shadows['focus-bright-blue'],
      background: toggle['selected']['bg']['default']
    },
    '&:hover $switch:not($checked), &:active $switch:not($checked)': {
      background: toggle['unselected']['bg']['hover']
    },
    '&:focus $switch:not($checked)': {
      background: toggle['unselected']['bg']['default'],
      boxShadow: shadows['focus-indigo']
    }
  },
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: 38,
    height: spacing['size-5'],
    background: toggle['unselected']['bg']['default'],
    borderRadius: 34,
    transition: '0.3s all'
  },
  checked: {
    background: toggle['selected']['bg']['default'],
    '& $slider': {
      left: 16
    }
  },
  slider: {
    position: 'absolute',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 2,
    left: 2,
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: toggle['bg']['default'],
    transition: '0.3s all'
  },
  disabled: {
    '& $switch': {
      background: toggle['bg']['disabled']
    },
    pointerEvents: 'none'
  },
  label: {
    marginLeft: spacing['size-2']
  }
})
