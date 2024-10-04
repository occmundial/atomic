import { createUseStyles } from 'react-jss'

import colors from '@/tokens/future/colors.json'
import borderRadius from '@/tokens/future/borderRadius.json'
import shadows from '@/tokens/future/shadows.json'

export default createUseStyles({
  contentWrapper: {
    width: 280,
    backgroundColor: colors.bg.surface.default,
    borderRadius: borderRadius['br-sm'],
    border: `1px solid ${colors.border.default.default}`,
    boxShadow: shadows['elevation-elevation-5']
  }
})
