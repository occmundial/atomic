import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'

export default createUseStyles({
  li: {
    display: 'inline-block',
    cursor: 'pointer',
    padding: '2px 11px',
    marginLeft: '4px',
    marginRight: '4px',
    borderRadius: '13px',
    transition: '0.3s all',
    outline: '0',
    '&:hover': {
      background: colors.grey100
    }
  },
  active: {
    background: `${colors.prim} !important`,
    color: colors.white
  }
})
