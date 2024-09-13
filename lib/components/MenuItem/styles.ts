import { createUseStyles } from 'react-jss'

export default createUseStyles({
  iconContainer: {
    flexShrink: 0,
    display: 'inline-flex'
  },
  iconRight: {
    justifyContent: 'end'
  },
  iconContainerSize: {
    minWidth: 28
  },
  iconContainerSizeDense: {
    minWidth: 24
  },
  textContainer: {
    flex: '1 1 auto'
  }
})
