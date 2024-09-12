import { createUseStyles } from 'react-jss'
import { borderRadius } from '@/tokens/future'

export default createUseStyles({
  container: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    borderRadius: borderRadius['br-xs']
  },
  paddingVertical: {
    paddingTop: 16,
    paddingBottom: 16
  },
  paddingVerticalDense: {
    paddingTop: 12,
    paddingBottom: 12
  },
  paddingHorizontal: {
    paddingRight: 12,
    paddingLeft: 12
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  alignItemsStart: {
    alignItems: 'start'
  }
})
