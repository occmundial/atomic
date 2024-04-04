import { CSSProperties } from 'react'
import classnames from 'classnames'

import AvatarContent, { AvatarContentProps } from './AvatarContent'
import useStyles from './styles'

export interface AvatarProps extends AvatarContentProps {
  id?: string
  className?: string
  style?: CSSProperties
}

const DEFAULT_SIZE = 70

const Avatar = ({
  photo,
  gender,
  name,
  size,
  id,
  className,
  style
}: AvatarProps) => {
  const classes = useStyles()
  return (
    <div
      id={id}
      className={classnames(classes.circle, className)}
      style={{
        ...style,
        width: size || DEFAULT_SIZE,
        height: size || DEFAULT_SIZE
      }}
    >
      <AvatarContent photo={photo} gender={gender} name={name} size={size} />
    </div>
  )
}

Avatar.defaultProps = {
  size: 70
}

export default Avatar
