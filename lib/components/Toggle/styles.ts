import { createUseStyles } from 'react-jss'
import spacing from '@/tokens/future/spacing.json'
import colors from '@/tokens/future/colors.json'
import shadows from '@/tokens/future/shadows.json'

const { switch: Toggle } = colors

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
      background: Toggle['selected']['bg']['hover']
    },
    '&:focus $switch$checked': {
      boxShadow: shadows['focus-bright-blue'],
      background: Toggle['selected']['bg']['default']
    },
    '&:hover $switch:not($checked), &:active $switch:not($checked)': {
      background: Toggle['unselected']['bg']['hover']
    },
    '&:focus $switch:not($checked)': {
      background: Toggle['unselected']['bg']['default'],
      boxShadow: shadows['focus-indigo']
    }
  },
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: 38,
    height: spacing['size-5'],
    background: Toggle['unselected']['bg']['default'],
    borderRadius: 34,
    transition: '0.3s all'
  },
  checked: {
    background: Toggle['selected']['bg']['default'],
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
    background: Toggle['bg']['default'],
    transition: '0.3s all'
  },
  // $disabled$switch: {
  //   opacity: 0.4
  // },
  // '$disabled:not($switch)': {

  // },
  disabled: {
    // opacity: 0.4,
    '& $switch': {
      background: Toggle['bg']['disabled']
    },
    pointerEvents: 'none'
  },
  label: {
    marginLeft: spacing['size-2']
  }
})
