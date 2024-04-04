import { CSSProperties, EventHandler, ReactNode, SyntheticEvent } from 'react'
import classnames from 'classnames'

import Icon from '@/components/Icon'
import iconSizes from '@/tokens/iconSizes'

import useStyles from './styles'

export type ButtonTheme =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'tertiaryWhite'
  | 'ghostPink'
  | 'ghostGrey'
  | 'ghostWhite'
  | null

export interface ButtonProps {
  children?: ReactNode
  theme: ButtonTheme
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
}
const Button = (props: ButtonProps) => {
  const {
    children,
    theme,
    size,
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
    value
  } = props
  const classes = useStyles(props)
  const buttonClassName = classnames(
    classes.btn,
    { [classes[theme]]: theme },
    { [classes.loading]: loading },
    { [classes.disabled]: disabled },
    { [classes[size]]: ['md', 'lg'].includes(size) },
    { [classes.block]: block },
    className,
    { [classes.iconOnly]: !children && iconLeft },
    { [classes.round]: !children && iconLeft && round }
  )
  const content = (
    <span className={classes.cont}>
      {iconLeft ? (
        <Icon
          size={size === 'sm' ? iconSizes.tiny : iconSizes.small}
          iconName={iconLeft}
          className={classnames({ [classes.iconLeft]: children })}
          transition="none"
        />
      ) : (
        ''
      )}
      {children}
      {iconRight ? (
        <Icon
          size={size === 'sm' ? iconSizes.tiny : iconSizes.small}
          iconName={iconRight}
          className={classes.iconRight}
          transition="none"
        />
      ) : (
        ''
      )}
    </span>
  )
  const loadingLayer = loading ? (
    <span className={classes.loadCont}>
      <i className={classes.loadIcon} />
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

Button.defaultProps = {
  theme: 'primary',
  size: 'sm'
}

export default Button
