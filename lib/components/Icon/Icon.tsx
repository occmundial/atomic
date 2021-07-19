import React from 'react'
import classnames from 'classnames'

import useStyles from './styles'

export interface IconProps {
  iconName: string
  width?: number
  height?: number
  display?: string
  transition?: string
  colors?: string[]
  hover?: string[]
  onClick?: CallableFunction
  alt?: string
  id?: string
  className?: string
  style?: object
}

/** Component to display any of the icons on the library. */
const Icon = (props: IconProps) => {
  const classes = useStyles(props)
  const { className, style, id, onClick, alt } = props
  return React.createElement(onClick ? 'button' : 'span', {
    id,
    className: classnames(
      classes.icon,
      { [classes.click]: onClick },
      className
    ),
    style,
    onClick,
    alt
  })
}

Icon.defaultProps = {
  transition: '0.3s all'
}

export default Icon
