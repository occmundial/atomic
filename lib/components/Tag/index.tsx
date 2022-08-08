import React, { useMemo, CSSProperties, ReactNode } from 'react'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'
import Icon from '@/components/Icon'
import spacing from '@/tokens/spacing'
import iconSizes from '@/tokens/iconSizes'

import useStyles from './styles'

export interface TagProps {
  children: ReactNode
  theme?:
    | 'default'
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | 'basic'
    | 'link'
  iconName?: string
  className?: string
  style?: CSSProperties
  size?: 'small' | 'medium' | 'large'
}

const Tag = (props: TagProps) => {
  const { children, className, style, theme, iconName, size } = props
  const classes = useStyles(props)
  const iconSize = useMemo(
    () => (size === 'small' ? spacing.gutter : iconSizes.small),
    [size]
  )
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
          <Icon iconName={iconName} className={classes.icon} size={iconSize} />
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
