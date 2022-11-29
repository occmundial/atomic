import { createUseStyles } from 'react-jss'

import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'

const { gutter, tiny, small, base, xTiny } = spacing
const { primLighter, grey50, grey200, bgWhite, textLink } = colors

export default createUseStyles({
  block: {
    background: bgWhite,
    border: `1px solid ${grey200}`,
    borderRadius: xTiny,
    overflow: 'hidden'
  },
  group: {
    padding: [small, small, xTiny]
  },
  item: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    padding: [tiny, small],
    transition: '0.1s all',
    cursor: 'pointer',
    '&:hover': {
      background: grey50
    }
  },
  right: {
    float: 'right',
    transition: '0.1s all',
    marginLeft: small
  },
  onFocus: {
    background: primLighter,
    '&:hover': {
      background: primLighter
    }
  },
  icon: {
    marginRight: tiny,
    position: 'absolute',
    top: gutter
  },
  iconText: {
    display: 'inline-block',
    marginLeft: base
  },
  extraText: {
    marginLeft: tiny,
    color: textLink
  }
})
