import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'
import shadows from '@/tokens/shadows'

export default createUseStyles({
  container: {
    marginTop: spacing.tiny,
    marginBottom: spacing.small,
    boxShadow: shadows.lvl5,
    borderRadius: spacing.radius
  },
  header: {
    background: colors.grey200,
    padding: spacing.small,
    borderRadius: [spacing.radius, spacing.radius, 0, 0]
  },
  button: {
    display: 'inline-block',
    width: 12,
    height: 12,
    borderRadius: '50%',
    marginRight: spacing.tiny
  },
  red: {
    background: colors.sec
  },
  yellow: {
    background: colors.warning
  },
  green: {
    background: colors.success
  },
  title: {
    marginLeft: spacing.tiny
  },
  screen: {
    padding: spacing.small,
    borderTop: 'none',
    borderRadius: [0, 0, spacing.radius, spacing.radius]
  }
})
