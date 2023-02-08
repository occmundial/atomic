import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

export default createUseStyles({
  container: {
    position: 'relative',
    marginBottom: spacing.tiny
  },
  top: {
    height: spacing.base,
    display: 'flex',
    alignItems: 'center',
    '&:after': {
      content: '""',
      clear: 'both'
    }
  },
  left: {
    float: 'left'
  },
  disabled: {
    '& $label': {
      color: colors.inkLightest
    }
  },
  bottom: {
    height: spacing.base,
    display: 'flex',
    alignItems: 'center'
  },
  errorIcon: {
    marginTop: -2,
    marginRight: spacing.xTiny,
    color: colors.errorText
  },
  stackGroup: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  choiceGroup: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})
