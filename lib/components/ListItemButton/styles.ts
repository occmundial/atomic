import { createUseStyles } from 'react-jss'
import { colors } from '@/tokens/future'
import { borderRadius } from '@/tokens/future'

export default createUseStyles({
  container: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    borderRadius: borderRadius['br-xs']
  },
  paddingVertical: {
    paddingTop: 16,
    paddingBottom: 16
  },
  paddingVerticalDense: {
    paddingTop: 12,
    paddingBottom: 12
  },
  paddingHorizontal: {
    paddingRight: 12,
    paddingLeft: 12
  },
  alignItemsCenter: {
    alignItems: 'center'
  },
  alignItemsStart: {
    alignItems: 'start'
  },
  activable: {
    '&:hover': {
      background: colors.bg.action.tertiary.hover
    },
    '&:active': {
      background: colors.bg.action.tertiary.active
    }
  },
  selected: {
    background: colors.bg.action.tertiary.active
  }
})
