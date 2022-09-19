import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'

export default createUseStyles({
  li: {
    display: 'inline-block',
    cursor: 'pointer',
    padding: '4px 12px',
    margin: '0px 16px',
    transition: '0.3s all',
    outline: '0',
    borderRadius: '12px',
    '&:hover': {
      background: colors.grey100
    }
  },
  active: {
    background: `${colors.prim} !important`,
    color: colors.white
  }
})
