import React, { EventHandler, SyntheticEvent } from 'react'
import classnames from 'classnames'

import Icon from '@/components/Icon'
import Button from '@/components/Button'
import Flexbox from '@/components/Flexbox'
import colors from '@/tokens/future/colors.json'

import useStyles from './styles'
interface ToastAction {
  onClick: EventHandler<SyntheticEvent>
  label: string
}

type ToastTheme = 'success' | 'error' | 'info' | 'warning' | 'promote'

export interface ToastType {
  type?: ToastTheme
  title?: string
  description?: string
  action?: ToastAction
  hasIcon?: boolean
  closeIcon?: boolean
  closing?: boolean
  timer?: 'normal' | 'longer'
  testId?: string
}

interface ToastProps extends Omit<ToastType, 'type'> {
  theme?: ToastTheme
  onClose?: () => void
  pauseTimer: EventHandler<SyntheticEvent>
  resumeTimer: EventHandler<SyntheticEvent>
}

const icons = {
  info: 'info-circle',
  warning: 'alert',
  success: 'check-circle',
  error: 'x-circle'
}

const colorTextClasses = {
  info: 'textInfo',
  promote: 'textPromote',
  warning: 'textWarning',
  success: 'textSuccess',
  error: 'textError'
}

const Toast = ({
  theme,
  title,
  description,
  action,
  closeIcon,
  closing,
  onClose,
  pauseTimer,
  resumeTimer,
  testId
}: ToastProps) => {
  const classes = useStyles()

  const onActionClick = action => {
    action.onClick()
    onClose()
  }
  return (
    <div
      className={classnames(classes.toast, classes[theme], {
        [classes.closing]: closing
      })}
      {...(!closeIcon && { onMouseEnter: pauseTimer })}
      {...(!closeIcon && { onMouseLeave: resumeTimer })}
    >
      <Flexbox display="flex" justifyContent="between">
        <Flexbox display="flex" alignItems="center" alignSelf="center" flex="1">
          {theme !== 'promote' && (
            <Icon
              iconName={icons[theme]}
              color={
                theme === 'info'
                  ? colors.icon.brand.default
                  : colors.icon[theme]
              }
              className={classes.icon}
            />
          )}
          <Flexbox
            display="flex"
            flex="1"
            className={classes.content}
            alignSelf="start"
            justifyContent="between"
          >
            <Flexbox display="flex" direction="col">
              <p
                className={`${classes.title} ${
                  classes[colorTextClasses[theme]]
                }`}
              >
                {title}
              </p>
              {description && (
                <p
                  className={`${classes.description} ${
                    classes[colorTextClasses[theme]]
                  }`}
                >
                  {description}
                </p>
              )}
            </Flexbox>
            {action ? (
              <a
                className={`${classes.actionText} ${
                  classes[colorTextClasses[theme]]
                }`}
                onClick={() => onActionClick(action)}
                {...(testId && {
                  'data-testid': `${testId}__link`
                })}
              >
                {action.label}
              </a>
            ) : null}
          </Flexbox>
        </Flexbox>
        {!action && closeIcon ? (
          <Button
            onClick={onClose}
            className={classes.closeIcon}
            iconLeft="x"
            size="md"
            theme={theme === 'promote' ? 'ghostWhite' : 'ghostGrey'}
            {...(testId && {
              testId: `${testId}__close-icon`
            })}
          />
        ) : null}
      </Flexbox>
    </div>
  )
}

export default Toast
