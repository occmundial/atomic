import { createUseStyles } from 'react-jss'

import spacing from '@/tokens/spacing'
import colors from '@/tokens/colors'
import iconSizes from '@/tokens/iconSizes'
import grid from '@/tokens/grid'

export default createUseStyles({
  wrap: {
    display: 'inline-block',
    position: 'relative'
  },
  button: {
    cursor: 'pointer'
  },
  icon: {
    marginLeft: spacing.xTiny,
    marginTop: 2
  },
  cardWrap: {
    position: 'absolute',
    top: '100%',
    right: 0,
    opacity: 0,
    marginTop: -spacing.small,
    transition: '0.3s all',
    zIndex: 1,
    pointerEvents: 'none'
  },
  card: {
    padding: spacing.small,
    [`@media screen and (min-width:${grid.sm}px)`]: {
      padding: spacing.base
    }
  },
  show: {
    opacity: 1,
    marginTop: 0,
    pointerEvents: 'auto'
  },
  option: {
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    '&:not(:last-child)': {
      paddingBottom: spacing.tiny
    }
  },
  link: {
    color: colors.textLink
  }
})
