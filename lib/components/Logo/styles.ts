import { createUseStyles } from 'react-jss'

import icons from '@/tokens/icons'
import { LogoProps } from '.'
import colors from '@/tokens/colors'

const logoVersions = {
  icon: 'occIcon',
  horizontal: 'occHorizontal',
  vertical: 'occVertical'
}

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
    background: props =>
      icons.base(icons[logoVersions.horizontal].icon(logoColors[props.theme])),
    width: props =>
      props.width ? props.width : icons[logoVersions.horizontal].width,
    height: props =>
      props.height ? props.height : icons[logoVersions.horizontal].height
  },
  vertical: {
    background: props =>
      icons.base(icons[logoVersions.vertical].icon(logoColors[props.theme])),
    width: props =>
      props.width ? props.width : icons[logoVersions.vertical].width,
    height: props =>
      props.height ? props.height : icons[logoVersions.vertical].height
  },
  icon: {
    background: props =>
      icons.base(icons[logoVersions.icon].icon(logoColors[props.theme])),
    width: props =>
      props.width ? props.width : icons[logoVersions.icon].width,
    height: props =>
      props.height ? props.height : icons[logoVersions.icon].height
  },
  click: {
    cursor: 'pointer'
  }
})
