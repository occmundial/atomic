import classnames from 'classnames'

import useStyles from './styles'
import Icon from '../../Icon'
import newColors from '@/tokens/future/colors.json'

export interface AvatarContentProps {
  photo?: string
  name?: string
  size?: number
  onEdit?: () => void
  onClick?: () => void
  disabled?: boolean
}

const getInitials = (name: string): string | null => {
  if (name && name.trim()) {
    const [firstName, lastName] = name
      .trim()
      .replace(/\s+/g, ' ')
      .toUpperCase()
      .split(' ')
    return `${firstName?.charAt(0)}${lastName?.charAt(0)}`
  }
  return null
}

const AvatarContent = ({
  photo,
  name,
  size,
  onEdit,
  onClick,
  disabled
}: AvatarContentProps) => {
  const classes = useStyles()

  const initials = getInitials(name)

  return (
    <div className={classes.wrap}>
      <div
        className={classnames(classes.cont, {
          [classes.clickable]: onClick,
          [classes.editable]: onEdit,
          [classes.disabled]: disabled,
          [classes.photo]: photo,
          [classes.hoverPhoto]: photo && (onClick || onEdit)
        })}
        style={
          photo
            ? {
                background: `url('${photo}') no-repeat center center / cover`
              }
            : null
        }
      >
        {!photo ? (
          initials ? (
            <span
              className={classnames(classes.initials, {
                [classes.disabledInitials]: disabled
              })}
              style={size ? { transform: `scale(${size / 40})` } : {}}
            >
              {initials}
            </span>
          ) : (
            <Icon
              iconName="person"
              className={classes.person}
              color={
                disabled
                  ? newColors.icon.default.disabled
                  : newColors.icon.brand.default
              }
              size={24}
              style={size ? { transform: `scale(${size / 40})` } : {}}
            />
          )
        ) : null}
        <div className={classes.overlay}>
          {onEdit && !disabled && (
            <Icon
              iconName="camera"
              className={classes.camera}
              color={
                disabled
                  ? newColors.icon.default.disabled
                  : newColors.icon.inverse.default
              }
              size={24}
              style={size ? { transform: `scale(${size / 40})` } : {}}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default AvatarContent
