import { CSSProperties, ReactElement } from 'react'

import Flexbox from '@/components/Flexbox'
import Icon from '@/components/Icon'

import useStyles from './styles'
import Button from '../Button'
import colors from '@/tokens/future/colors.json'
import AlertText from './AlertText'

const icons = {
  info: 'info-circle',
  warning: 'alert',
  success: 'check-circle',
  error: 'x-circle',
  promote: null
}

const colorTextClasses = {
  info: 'textInfo',
  promote: 'textPromote',
  warning: 'textWarning',
  success: 'textSuccess',
  error: 'textError'
}

const colorLinkClasses = {
  info: 'linkInfo',
  promote: 'linkPromote',
  warning: 'linkWarning',
  success: 'linkSuccess',
  error: 'linkError'
}

interface AlertAction {
  href?: string
  target?: string
  onClick?: () => void
  text?: string
}

interface AlertProps {
  theme?: 'info' | 'warning' | 'success' | 'error' | 'promote'
  children: ReactElement | string
  icon?: boolean
  banner?: boolean
  onClose?: () => void
  cta?: AlertAction
  id?: string
  className?: string
  style?: CSSProperties
  size?: 'large' | 'small'
  testId?: string
}

const Alert = ({
  id,
  style,
  className,
  icon,
  theme,
  children,
  banner,
  onClose,
  cta,
  size = 'large',
  testId
}: AlertProps) => {
  const classes = useStyles()

  return (
    <div id={id} className={className} style={style}>
      <Flexbox
        justifyContent="start"
        display="flex"
        className={`${classes.container} ${classes[theme]}${
          banner ? ` ${classes.noBorderRadius}` : ''
        }`}
      >
        <Flexbox display="flex" flex="1" alignItems="stretch">
          {icon && theme !== 'promote' && (
            <Icon
              iconName={icons[theme]}
              className={classes.icon}
              color={
                theme === 'info'
                  ? colors.icon.brand.default
                  : colors.icon[theme]
              }
            />
          )}
          <Flexbox
            display="flex"
            direction={size === 'small' ? 'col' : 'row'}
            justifyContent={banner ? 'center' : 'start'}
            alignSelf="center"
            flex="1"
            className={banner ? ` ${classes.maxWidth}` : ''}
          >
            <AlertText
              classes={`${classes.normalText} ${
                classes[colorTextClasses[theme]]
              }${!banner ? ` ${classes.growText}` : ''}`}
              text={children}
            />
            {cta && (
              <a
                className={`${classes.cta} ${classes[colorLinkClasses[theme]]}${
                  size === 'large' && banner
                    ? ` ${classes.ctaBanner}`
                    : size === 'large'
                    ? ` ${classes.ctaAlert}`
                    : ''
                }`}
                href={cta.href}
                target={cta.target}
                onClick={cta.onClick}
                {...(testId && {
                  'data-testid': `${testId}__link`
                })}
              >
                {cta.text}
              </a>
            )}
          </Flexbox>
        </Flexbox>
        {onClose && (
          <Button
            onClick={onClose}
            size="md"
            className={
              size === 'small'
                ? classes.closeIconSmallMargin
                : classes.closeIconMargin
            }
            iconLeft="x"
            theme={theme === 'promote' ? 'ghostWhite' : 'ghost'}
            {...(testId && {
              testId: `${testId}__close-icon`
            })}
          />
        )}
      </Flexbox>
    </div>
  )
}

Alert.defaultProps = {
  theme: 'info'
}

export default Alert
