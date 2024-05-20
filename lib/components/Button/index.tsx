import { CSSProperties, EventHandler, ReactNode, SyntheticEvent } from 'react'
import classnames from 'classnames'

import Icon from '@/components/Icon'

import useStyles from './styles'
import Loading from './Loading'

export type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'tertiaryWhite'
  | 'ghostPink'
  | 'ghostGrey'
  | 'ghostWhite'
  | 'ghost'
  | null

export interface ButtonProps {
  children?: ReactNode
  theme?: ButtonTheme
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  disabled?: boolean
  iconLeft?: string
  iconRight?: string
  loading?: boolean
  round?: boolean
  onClick?: EventHandler<SyntheticEvent>
  type?: 'button' | 'submit' | 'reset' | null
  href?: string
  target?: string
  rel?: string
  id?: string
  className?: string
  style?: CSSProperties
  testId?: string
  ariaLabel?: string
  name?: string
  value?: any | null
  darkMode?: boolean
}
const Button = (props: ButtonProps) => {
  const {
    children,
    theme = 'primary',
    size = 'sm',
    block,
    disabled,
    iconLeft,
    iconRight,
    loading,
    round,
    onClick,
    type,
    href,
    target,
    rel,
    id,
    className,
    style,
    testId,
    ariaLabel,
    name,
    value,
    darkMode
  } = props
  const classes = useStyles(props)
  const getTheme = (): ButtonTheme => {
    if (theme === 'tertiary' && darkMode) return 'tertiaryWhite'
    if (theme === 'ghost' && darkMode) return 'ghostWhite'
    if (theme === 'ghost') return 'ghostGrey'
    return theme
  }
  const buttonClassName = classnames(
    classes.btn,
    { [classes[getTheme()]]: theme },
    { [classes.loading]: loading },
    { [classes.disabled]: disabled },
    { [classes[size]]: ['md', 'lg'].includes(size) },
    { [classes.block]: block },
    className,
    { [classes.iconOnly]: !children && iconLeft },
    { [classes.round]: !children && iconLeft && round }
  )
  const iconSize = size === 'sm' ? 16 : 24
  const content = (
    <span className={classes.cont}>
      {iconLeft ? (
        <Icon
          size={iconSize}
          iconName={iconLeft}
          className={classnames(classes.icon, { [classes.iconLeft]: children })}
          transition="none"
        />
      ) : (
        ''
      )}
      {children}
      {iconRight ? (
        <Icon
          size={iconSize}
          iconName={iconRight}
          className={classnames(classes.icon, classes.iconRight)}
          transition="none"
        />
      ) : (
        ''
      )}
    </span>
  )
  const loadingLayer = loading ? (
    <span className={classes.loadCont}>
      <Loading className={classes.icon} width={iconSize} height={iconSize} />
    </span>
  ) : null
  if (href) {
    return (
      <a
        className={buttonClassName}
        href={!disabled ? href : ''}
        target={target}
        rel={rel}
        onClick={!disabled ? onClick : null}
        id={id}
        style={style}
        data-testid={testId}
        aria-label={ariaLabel}
      >
        {content}
        {loadingLayer}
      </a>
    )
  } else {
    return (
      <button
        className={buttonClassName}
        onClick={!disabled ? onClick : null}
        id={id}
        style={style}
        data-testid={testId}
        aria-label={ariaLabel}
        type={type}
        value={value}
        name={name}
      >
        {content}
        {loadingLayer}
      </button>
    )
  }
}

export default Button
