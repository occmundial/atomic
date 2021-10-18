import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import fonts from '@/tokens/fonts'

export default createUseStyles({
  pager: {
    listStyle: 'none',
    paddingLeft: '0',
    fontFamily: fonts.body,
    color: colors.grey600,
    fontSize: '13px'
  },
  btn: {
    display: 'inline-block',
    fontFamily: fonts.body,
    border: `1px solid ${colors.grey300}`,
    borderRadius: '5px',
    padding: '3px 13px',
    transition: '0.3s all',
    cursor: 'pointer',
    outline: '0',
    '& span': {
      marginBottom: '-2px'
    },
    '&:hover': {
      background: colors.grey100,
      borderColor: colors.grey200
    }
  },
  prev: {
    marginRight: '15px',
    '& span': {
      transform: 'rotate(90deg)'
    }
  },
  next: {
    marginLeft: '15px',
    '& span': {
      transform: 'rotate(-90deg)'
    }
  },
  disabled: {
    pointerEvents: 'none',
    opacity: '0.4'
  },
  icon: {
    marginBottom: -2
  }
})
