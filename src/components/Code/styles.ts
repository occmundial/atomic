import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import shadows from '@/tokens/shadows'
import colors from '@/tokens/colors'

export default createUseStyles({
  code: {
    overflow: 'auto',
    marginTop: spacing.small,
    marginBottom: spacing.medium,
    padding: spacing.small,
    borderRadius: spacing.radius,
    boxShadow: shadows.lvl5,
    fontSize: 14,
    backgroundColor: [colors.grey900, '!important']
  },
  header: {
    paddingBottom: spacing.small,
    borderBottom: `1px solid ${colors.grey800}`,
    marginBottom: spacing.small
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
    marginLeft: spacing.tiny,
    flex: 1
  },
  hide: {
    borderBottom: 0,
    marginBottom: 0,
    paddingBottom: 0
  }
})
