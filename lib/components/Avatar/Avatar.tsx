import { CSSProperties } from 'react'
import classnames from 'classnames'

import AvatarContent from './AvatarContent'
import { AvatarContentProps } from './AvatarContent/AvatarContent'

import useStyles from './styles'

export interface AvatarProps extends AvatarContentProps {
  id?: string
  className?: string
  style?: CSSProperties
}

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
