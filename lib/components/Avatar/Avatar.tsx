import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import AvatarContent from './AvatarContent'
import { AvatarContentProps } from './AvatarContent/AvatarContent'

import useStyles from './styles'

export interface AvatarProps extends AvatarContentProps {
  id?: string
  className?: string
  style?: { [key: string]: string }
}

/**
 * The Avatar component shows a rounded avatar with a profile picture, a gender icon or the first two capital letters of a name.
 * You can use more than one property as a fallback in case one of the props is empty or wrong.
 */
const Avatar = (props: AvatarProps) => {
  const { photo, gender, name, size, id, className, style } = props
  const classes = useStyles(props)
  return (
    <div
      id={id}
      className={classnames(classes.circle, className)}
      style={style}
    >
      <AvatarContent photo={photo} gender={gender} name={name} size={size} />
    </div>
  )
}

Avatar.defaultProps = {
  size: 70
}

export default Avatar
