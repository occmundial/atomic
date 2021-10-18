import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import colors from '@/tokens/colors'
import { NavIconProps } from './'

export default createUseStyles<any, NavIconProps>({
  cont: {
    width: props => (props.width ? props.width : null),
    color: props => (props.white ? colors.white : colors.inkLight),
    display: 'inline-block',
    height: spacing.xLarge,
    cursor: 'pointer',
    position: 'relative',
    '&:hover': {
      color: props => (props.white ? colors.white : colors.ink)
    },
    '&:hover $icon': {
      opacity: props => (props.white ? 0.6 : null)
    },
    '&:hover $text': {
      opacity: props => (props.white ? 0.6 : null)
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: 3,
      bottom: 0,
      left: 0,
      background: 'transparent',
      transition: '0.3s all'
    }
  },
  flex: {
    height: spacing.xLarge
  },
  selected: {
    color: props => (props.white ? colors.white : colors.prim),
    '&:hover': {
      color: props => (props.white ? colors.white : colors.prim)
    },
    '&:after': {
      background: props =>
        props.showBar ? (props.white ? colors.sec : colors.prim) : null
    }
  },
  icon: {},
  text: {
    marginLeft: props => (props.direction !== 'col' ? spacing.xTiny : null),
    textTransform: 'uppercase',
    transition: '0.3s all'
  }
})
