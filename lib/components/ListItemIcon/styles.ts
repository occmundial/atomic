import { createUseStyles } from 'react-jss'

export default createUseStyles({
  container: {
    flexShrink: 0,
    display: 'inline-flex'
  },
  contentEnd: {
    justifyContent: 'end'
  },
  containerWidth: {
    minWidth: 28
  },
  containerDense: {
    minWidth: 24
  }
})
