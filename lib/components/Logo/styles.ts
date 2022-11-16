import { createUseStyles } from 'react-jss'

import { base } from '@/tokens/icons'
import occHorizontal from '@/tokens/icons/occHorizontal'
import occVertical from '@/tokens/icons/occVertical'
import occIcon from '@/tokens/icons/occIcon'
import { LogoProps } from '.'
import colors from '@/tokens/colors'

const logoColors = {
  black: colors.ink,
  grey: colors.inkLight,
  white: colors.white,
  blue: colors.prim
}

export default createUseStyles({
  logo: {
    boxSizing: 'border-box',
    display: 'inline-block',
    border: '0',
    outline: '0'
  },
  click: {
    cursor: 'pointer'
  }
})
