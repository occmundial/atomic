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
  assistiveText: {
    color: colors.inkLighter
  },
  errorAssistiveText: {
    color: colors.errorText
  },
  errorIcon: {
    marginTop: -2,
    marginRight: spacing.xTiny
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
