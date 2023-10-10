import { createUseStyles } from 'react-jss'

import { base } from '@/tokens/icons'
import occHorizontal from '@/tokens/icons/occHorizontal'
import occVertical from '@/tokens/icons/occVertical'
import occIcon from '@/tokens/icons/occIcon'
import occLogo from '@/tokens/icons/occLogo'
import { LogoProps } from '.'
import colors from '@/tokens/colors'

const logoColors = {
  black: colors.ink,
  grey: colors.inkLight,
  white: colors.white,
  blue: colors.prim
}

export default createUseStyles<any, LogoProps>({
  logo: {
    boxSizing: 'border-box',
    display: 'inline-block',
    border: '0',
    outline: '0'
  },
  horizontal: {
    background: props => base(occHorizontal.icon(logoColors[props.theme])),
    width: props => (props.width ? props.width : occHorizontal.width),
    height: props => (props.height ? props.height : occHorizontal.height)
  },
  vertical: {
    background: props => base(occVertical.icon(logoColors[props.theme])),
    width: props => (props.width ? props.width : occVertical.width),
    height: props => (props.height ? props.height : occVertical.height)
  },
  icon: {
    background: props => base(occIcon.icon(logoColors[props.theme])),
    width: props => (props.width ? props.width : occIcon.width),
    height: props => (props.height ? props.height : occIcon.height)
  },
  occLogo: {
    background: props => base(occLogo.icon(logoColors[props.theme])),
    width: props => (props.width ? props.width : occIcon.width),
    height: props => (props.height ? props.height : occIcon.height)
  },
  click: {
    cursor: 'pointer'
  }
})
