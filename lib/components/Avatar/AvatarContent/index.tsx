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

const getInitials = name => {
  if (name) {
    const [firstName, lastName] = name.toUpperCase().split(' ')
    return `${firstName?.charAt(0) || 'N'}${lastName?.charAt(0) || 'O'}`
  }
  return ''
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
        {!photo && !name && (
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
        )}
        {name && (
          <span
            className={classnames(classes.initials, {
              [classes.disabledInitials]: disabled
            })}
            style={size ? { transform: `scale(${size / 40})` } : {}}
          >
            {getInitials(name)}
          </span>
        )}
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
