import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import shadows from '@/tokens/shadows'
import colors from '@/tokens/colors'
import grid from '@/tokens/grid'

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
  buttons: {
    paddingBottom: spacing.small,
    borderBottom: `1px solid ${colors.grey800}`,
    marginBottom: spacing.small,
    [`@media screen and (max-width:${grid.sm}px)`]: {
      display: 'none'
    }
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
  }
})
