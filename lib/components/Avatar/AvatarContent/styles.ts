import { createUseStyles } from 'react-jss'

import fonts from '@/tokens/fonts'
import { base } from '@/tokens/icons'
import male from '@/tokens/icons/male'
import female from '@/tokens/icons/female'
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
    background: base(male.icon())
  },
  f: {
    background: base(female.icon())
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
