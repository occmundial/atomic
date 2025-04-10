import spacing from '@/tokens/ct/spacing.json'
import colors from '@/tokens/ct/colors.json'
import shadows from '@/tokens/ct/shadows.json'
import borderRadius from '@/tokens/ct/borderRadius.json'

const transition = 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s'
const contentHeight = 48
const toggleWidth = 52
const toggleHeight = 32
const sliderSize = 24

const styles = {
  cont: {
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    outline: 0,
    '&:hover $switch $switchBg, &:active $switch $switchBg': {
      background: colors.switch.unselected.bg.hover
    },
    '&:focus-visible $switch': {
      boxShadow: shadows['focus-grey']
    },
    '&:hover $switch$checked $switchBg, &:active $switch$checked $switchBg': {
      background: colors.switch.selected.bg.hover
    },
    '&:active $switch$checked $switchBg': {
      background: colors.switch.selected.bg.active
    },
    '&:active $switch $switchBg': {
      background: colors.switch.unselected.bg.active
    },
    '&:focus-visible $switch$checked': {
      background: colors.switch.selected.bg.default,
      boxShadow: shadows['focus-blue']
    }
  },
  switchWrap: {
    width: toggleWidth,
    height: contentHeight,
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0
  },
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: toggleWidth,
    height: toggleHeight,
    flexShrink: 0,
    borderRadius: borderRadius['br-full'],
    transition
  },
  switchBg: {
    width: toggleWidth,
    height: toggleHeight,
    background: colors.switch.unselected.bg.default,
    borderRadius: borderRadius['br-full'],
    transition,
    '& svg': {
      fill: `${colors.switch.unselected.icon.default} !important`
    }
  },
  checked: {
    '& $switchBg': {
      background: colors.switch.selected.bg.default,
      '& svg': {
        fill: `${colors.switch.selected.icon.default} !important`
      }
    },
    '& $slider': {
      left: `calc(100% - 28px)`
    }
  },
  slider: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 4,
    width: sliderSize,
    height: sliderSize,
    borderRadius: borderRadius['br-full'],
    background: colors.switch.bg.default,
    transition
  },
  icon: {
    margin: 4
  },
  disabled: {
    '& $switch $switchBg': {
      background: colors.switch.selected.bg.disabled,
      '& svg': {
        fill: `${colors.switch.selected.icon.disabled} !important`
      }
    },
    pointerEvents: 'none'
  },
  labelWrap: {
    minHeight: contentHeight,
    display: 'flex',
    alignItems: 'center',
    paddingTop: spacing['size-1'],
    paddingBottom: spacing['size-1'],
    overflow: 'hidden'
  },
  label: {
    marginLeft: spacing['size-3'],
    cursor: 'pointer'
  }
}

export default styles
