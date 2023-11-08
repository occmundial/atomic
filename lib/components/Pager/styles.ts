import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'

export default createUseStyles({
  pager: {
    listStyle: 'none',
    paddingLeft: '0',
    fontFamily: fonts.body,
    color: colors.inkLight,
    fontSize: '14px'
  },
  btn: {
    display: 'inline-block',
    fontFamily: fonts.body,
    padding: '3px 13px',
    transition: '0.3s all',
    cursor: 'pointer',
    outline: '0',
    borderRadius: '6px',
    border: [1, 'solid', colors.inkLighter],
    '& span': {
      marginBottom: '-2px'
    },
    '&:hover': {
      background: colors.grey100,
      borderColor: colors.grey200
    }
  },
  prev: {
    '& span': {
      transform: 'rotate(90deg)'
    }
  },
  next: {
    '& span': {
      transform: 'rotate(-90deg)'
    }
  },
  nextOnly: {
    marginLeft: '16px'
  },
  prevOnly: {
    marginRight: '16px'
  },
  disabled: {
    pointerEvents: 'none',
    opacity: '0.4'
  },
  icon: {
    marginBottom: -2
  }
})
