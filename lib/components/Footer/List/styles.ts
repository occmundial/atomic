import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import colors from '@/tokens/colors'

export default createUseStyles({
  list: {
    transition: '0.3s all',
    pointerEvents: 'none',
    overflow: 'hidden',
    height: 0,
    transform: `translateY(${-spacing.small}px)`,
    opacity: 0
  },
  toggle: {
    height: 'auto',
    transform: 'translateY(0)',
    opacity: 1,
    pointerEvents: 'all'
  },
  collapsible: {
    cursor: 'pointer'
  },
  arrow: {
    marginLeft: spacing.tiny,
    marginBottom: -spacing.xTiny
  },
  arrowUp: {
    transform: 'rotate(-180deg)'
  },
  link: {
    color: colors.grey600,
    textDecoration: 'none',
    '&:hover, &:focus, &:active': {
      color: colors.grey600
    }
  },
  iconWrapper: {
    marginBottom: spacing.tiny,
    marginRight: spacing.tiny,
    display: 'inline-block'
  },
  title: {
    marginBottom: spacing.tiny
  }
})
