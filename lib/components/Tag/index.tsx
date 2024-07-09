import React, { useMemo, CSSProperties, ReactNode } from 'react'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'
import Icon from '@/components/Icon'
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
    | 'featured'
    | 'promo'
  iconName?: string
  className?: string
  style?: CSSProperties
  size?: 'small' | 'medium' | 'large'
}

const Tag = ({
  children,
  className,
  style,
  theme,
  iconName,
  size
}: TagProps) => {
  const classes = useStyles()

  const themeClass = useMemo(() => {
    if (theme === 'primary') return classes['featured']
    return classes[theme]
  }, [theme, classes])

  return (
    <label
      className={classnames(classes.tag, classes[size], themeClass, className)}
      style={style}
    >
      <Flexbox display="flex" alignItems="center" wrap="noWrap">
        {iconName && <Icon iconName={iconName} className={classes.icon} />}
        <span className={classes.tagText}>{children}</span>
      </Flexbox>
    </label>
  )
}

Tag.defaultProps = {
  theme: 'default',
  size: 'small'
}

export default Tag
