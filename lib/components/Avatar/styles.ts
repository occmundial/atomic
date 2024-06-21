import { createUseStyles } from 'react-jss'

import shadows from '@/tokens/future/shadows.json'

export default createUseStyles({
  circle: {
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',
    outline: 'none'
  },
  editable: {
    cursor: 'pointer',
    transition: 'box-shadow 0.3s',
    '&:focus-visible': {
      boxShadow: shadows['focus-bright-blue']
    }
  },
  disabled: {
    pointerEvents: 'none'
  }
})
