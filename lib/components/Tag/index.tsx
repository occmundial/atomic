import React, { CSSProperties, ReactNode } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

export interface TagProps {
  children: ReactNode
  theme?: 'default' | 'info' | 'success' | 'warning' | 'error'
  iconName?: string
  className?: string
  style?: CSSProperties
}

const Tag = (props: TagProps) => {
  const { children, className, style, theme, iconName } = props
  const classes = useStyles(props)
  return (
    <label
      className={classnames(
        classes.tag,
        { [classes[theme]]: theme },
        { [classes.default]: !theme },
        className
      )}
      style={style}
    >
      {iconName && (
        <span
          className={classnames(
            classes.icon,
            { [classes[`${theme}Icon`]]: theme },
            { [classes.defaultIcon]: !theme }
          )}
        />
      )}
      <span className={classes.tagText}>{children}</span>
    </label>
  )
}

Tag.defaultProps = {
  theme: 'default'
}

export default Tag
