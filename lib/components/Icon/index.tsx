import { createElement, CSSProperties } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

export interface IconProps {
  iconName: string
  size?: number
  display?: 'inline' | 'inline-block'
  transition?: string
  color?: string
  hoverColor?: string
  onClick?: CallableFunction
  alt?: string
  id?: string
  className?: string
  style?: CSSProperties
}

const Icon = (props: IconProps) => {
  const classes = useStyles(props)
  const { iconName, display, className, style, id, onClick, alt } = props
  return createElement(onClick ? 'button' : 'span', {
    id,
    className: classnames(
      classes.icon,
      `atomic-${iconName}`,
      { [classes.inline]: display === 'inline' },
      { [classes.inlineBlock]: display === 'inline-block' },
      { [classes.click]: onClick },
      className
    ),
    style,
    onClick,
    alt
  })
}

Icon.defaultProps = {
  display: 'inline-block'
}

export default Icon
