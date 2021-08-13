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
    outline: 0
  },
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: 38,
    height: spacing.base,
    background: colors.grey200,
    borderRadius: 34,
    transition: '0.3s all'
  },
  checked: {
    background: colors.prim,
    '& $slider': {
      left: 16
    }
  },
  slider: {
    position: 'absolute',
    cursor: 'pointer',
    top: 2,
    left: 2,
    width: 20,
    height: 20,
    borderRadius: '50%',
    background: colors.bgWhite,
    transition: '0.3s all'
  },
  disabled: {
    opacity: 0.4,
    pointerEvents: 'none'
  },
  label: {
    marginLeft: spacing.tiny
  }
})
