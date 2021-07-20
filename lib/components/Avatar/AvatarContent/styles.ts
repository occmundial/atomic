import { createUseStyles } from 'react-jss'

import fonts from '@/tokens/fonts'
import icons from '@/tokens/icons'
import colors from '@/tokens/colors'

export default createUseStyles({
  wrap: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  cont: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    overflow: 'hidden'
  },
  m: {
    background: icons.base(icons.male.icon())
  },
  f: {
    background: icons.base(icons.female.icon())
  },
  capital: {
    fontFamily: fonts.body,
    fontSize: 70 * 0.4,
    lineHeight: '70px',
    fontWeight: '600',
    background: colors.grey200,
    color: colors.grey400,
    textAlign: 'center'
  }
})
