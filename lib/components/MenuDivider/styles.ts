import { createUseStyles } from 'react-jss'
import { colors } from '@/tokens/future'

export default createUseStyles({
  root: {
    margin: '0px',
    flexShrink: 0,
    borderWidth: '0px 0px thin',
    borderStyle: 'solid',
    borderColor: colors.border.default.subtle
  }
})
