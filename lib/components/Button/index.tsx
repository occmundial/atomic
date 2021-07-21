import { CSSProperties, EventHandler, ReactNode, SyntheticEvent } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

export interface ButtonProps {
  children: ReactNode
  theme:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'tertiaryWhite'
    | 'ghostPink'
    | 'ghostGrey'
    | 'ghostWhite'
    | null
  size?: 'sm' | 'md' | 'lg'
  block?: boolean
  disabled?: boolean
  icon?: string
  iconRight?: string
  loading?: boolean
  onClick?: EventHandler<SyntheticEvent>
  href?: string
  target?: string
  rel?: string
  id?: string
  className?: string
  style?: CSSProperties
}
const Button = (props: ButtonProps) => {
  const {
    children,
    theme,
    size,
    block,
    disabled,
    icon,
    iconRight,
    loading,
    onClick,
    href,
    target,
    rel,
    id,
    className,
    style
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
    { [classes.iconOnly]: !children && icon }
  )
  const content = (
    <span className={classes.cont}>
      {icon ? <i className={classes.icon} /> : ''}
      {children}
      {iconRight ? <i className={classes.iconRight} /> : ''}
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
