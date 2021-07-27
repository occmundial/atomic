import React, { CSSProperties, ReactNode } from 'react'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'

import useStyles from './styles'

export interface TagProps {
  children: ReactNode
  theme?: 'default' | 'info' | 'success' | 'warning' | 'error'
  iconName?: string
  className?: string
  style?: CSSProperties
  size?: 'small' | 'medium' | 'large'
}

const Tag = (props: TagProps) => {
  const { children, className, style, theme, iconName, size } = props
  const classes = useStyles(props)
  return (
    <label
      className={classnames(
        classes.tag,
        classes[size],
        classes[theme],
        className
      )}
      style={style}
    >
      <Flexbox display="flex" alignItems="center" wrap="noWrap">
        {iconName && (
          <span
            className={classnames(
              classes.icon,
              classes[`${size}Icon`],
              classes[`${theme}Icon`]
            )}
          />
        )}
        <span
          className={classnames(classes.tagText, classes[`${size}TagText`])}
        >
          {children}
        </span>
      </Flexbox>
    </label>
  )
}

Tag.defaultProps = {
  theme: 'default',
  size: 'small'
}

export default Tag
