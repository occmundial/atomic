import { createUseStyles } from 'react-jss'
import colors from './../../tokens/future/colors.json'
import spacing from './../../tokens/future/spacing.json'

export default createUseStyles({
  footer: {
    backgroundColor: colors.bg.surface.default,
    borderTop: `1px solid ${colors.border.default.subtle}`,
    padding: [spacing['size-7'], 0]
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing['size-8']
  }
})
