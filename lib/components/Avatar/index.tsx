import { CSSProperties } from 'react'
import classnames from 'classnames'

import AvatarContent, { AvatarContentProps } from './AvatarContent'
import useStyles from './styles'

export interface AvatarProps extends AvatarContentProps {
  id?: string
  className?: string
  style?: CSSProperties
}

const Avatar = ({
  photo,
  name,
  size = 40,
  id,
  className,
  style,
  onEdit,
  onClick,
  disabled
}: AvatarProps) => {
  const classes = useStyles()
  const isEditable = onEdit || onClick
  const handleClick = isEditable ? onClick || onEdit : undefined
  const tabIndexValue = isEditable && !disabled ? 0 : undefined

  const combinedClasses = classnames(
    classes.circle,
    { [classes.editable]: isEditable },
    { [classes.disabled]: disabled },
    className
  )

  const handleKeyDown = e => {
    if (e.keyCode == 13 || e.keyCode == 32) {
      e.preventDefault()
    }
  }

  const handleKeyUp = e => {
    if (e.keyCode == 13 || e.keyCode == 32) {
      handleClick()
    }
  }

  return (
    <div
      id={id}
      className={combinedClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={tabIndexValue}
      style={{
        ...style,
        width: size,
        height: size
      }}
    >
      <AvatarContent
        photo={photo}
        name={name}
        size={size}
        onEdit={onEdit}
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  )
}

export default Avatar
