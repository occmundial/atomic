import { CSSProperties, createElement } from 'react'
import classnames from 'classnames'

import occHorizontal from '@/tokens/icons/occHorizontal'
import occVertical from '@/tokens/icons/occVertical'
import occIcon from '@/tokens/icons/occIcon'
import { base } from '@/tokens/icons'

import useStyles from './styles'
import colors from '@/tokens/colors'

type LogoVariant = 'horizontal' | 'vertical' | 'icon'
type LogoTheme = 'blue' | 'white' | 'black' | 'grey'

const variants = {
  horizontal: occHorizontal,
  vertical: occVertical,
  icon: occIcon
}

const logoColors = {
  black: colors.ink,
  grey: colors.inkLight,
  white: colors.white,
  blue: colors.prim
}

export interface LogoProps {
  variant: LogoVariant
  theme: LogoTheme
  width?: number
  height?: number
  onClick?: () => void
  className?: string
  style?: CSSProperties
  id?: string
}

export default function Logo({
  variant,
  onClick,
  className,
  style,
  id,
  theme,
  width,
  height
}: LogoProps) {
  const classes = useStyles()
  const Tag = onClick ? 'button' : 'span'
  return (
    <Tag
      onClick={onClick}
      className={classnames(classes.logo, classes[variant], className, {
        [classes.click]: onClick
      })}
      style={{
        ...style,
        background: base(variants[variant].icon(logoColors[theme])),
        width: width ? width : variants[variant].width,
        height: height ? height : variants[variant].height
      }}
      id={id}
    />
  )
}
