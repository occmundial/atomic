import React, { EventHandler, SyntheticEvent } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Flexbox from '@/components/Flexbox'
import colors from '@/tokens/colors'

import useStyles from './styles'
import useIcon from '@/hooks/useIcon'

interface ToastAction {
  onClick: EventHandler<SyntheticEvent>
  label: string
}

type ToastTheme = 'success' | 'error' | 'info' | 'warning'

export interface ToastType {
  type?: ToastTheme
  title?: string
  description?: string
  action?: ToastAction
  hasIcon?: boolean
  closing?: boolean
  timer?: 'normal' | 'longer'
}

interface ToastProps extends Omit<ToastType, 'type'> {
  theme?: ToastTheme
  onClose?: () => void
  pauseTimer: EventHandler<SyntheticEvent>
  resumeTimer: EventHandler<SyntheticEvent>
}

const Toast = ({
  theme,
  title,
  description,
  action,
  hasIcon,
  closing,
  onClose,
  pauseTimer,
  resumeTimer
}: ToastProps) => {
  const classes = useStyles()
  const getIcon = useIcon()
  const getIconData = () => {
    switch (theme) {
      case 'success':
        return { icon: 'check', color: colors.bgWhite }
      case 'error':
        return { icon: getIcon('warning', 'alert'), color: colors.bgWhite }
      case 'info':
        return { icon: 'info', color: colors.bgWhite }
      case 'warning':
        return { icon: getIcon('warning', 'alert'), color: colors.grey900 }
    }
  }
  const textColor = theme === 'warning' ? {} : { white: true }
  const iconData = hasIcon ? getIconData() : null
  const onActionClick = action => {
    action.onClick()
    onClose()
  }
  return (
    <div
      className={classnames(classes.toast, classes[theme], {
        [classes.closing]: closing
      })}
      onMouseEnter={pauseTimer}
      onMouseLeave={resumeTimer}
    >
      <Flexbox display="flex" className={classes.content}>
        <Flexbox display="flex" alignItems="center">
          {hasIcon && (
            <Icon
              iconName={iconData.icon}
              color={iconData.color}
              className={classes.icon}
            />
          )}
          <Flexbox flex="1">
            {title && (
              <Text subheading {...textColor}>
                {title}
              </Text>
            )}
            {description && <Text {...textColor}>{description}</Text>}
          </Flexbox>
        </Flexbox>
        {action && (
          <button
            className={classes.action}
            onClick={() => onActionClick(action)}
          >
            <Flexbox
              display="flex"
              alignItems="center"
              className={classes.actionWrap}
            >
              <Text {...textColor} strong className={classes.actionText}>
                {action.label}
              </Text>
            </Flexbox>
          </button>
        )}
      </Flexbox>
    </div>
  )
}

export default Toast
