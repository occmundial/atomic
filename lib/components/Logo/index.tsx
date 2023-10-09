import { CSSProperties, createElement } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

type LogoVariant = 'horizontal' | 'vertical' | 'icon' | 'occLogo'
type LogoTheme = 'blue' | 'white' | 'black' | 'grey'

export interface LogoProps {
  variant: LogoVariant
  theme: LogoTheme
  width?: number
  height?: number
  onClick?: () => void
  className?: string
  style?: CSSProperties
  id?: string
}

export default function Logo(props: LogoProps) {
  const classes = useStyles(props)
  const { variant, onClick, className, style, id } = props
  const Tag = onClick ? 'button' : 'span'
  return createElement(Tag, {
    onClick,
    className: classnames(classes.logo, classes[variant], className, {
      [classes.click]: onClick
    }),
    style,
    id
  })
}
