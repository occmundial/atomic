import { CSSProperties } from 'react'
import classnames from 'classnames'

import occHorizontal from '@/tokens/icons/occHorizontal'
import occVertical from '@/tokens/icons/occVertical'
import occIcon from '@/tokens/icons/occIcon'
import occLogo from '@/tokens/icons/occLogo'
import { base } from '@/tokens/icons'

import useStyles from './styles'
import colors from '@/tokens/future/colors.json'

type LogoVariant = 'horizontal' | 'vertical' | 'icon' | 'occLogo'
type LogoTheme = 'blue' | 'white' | 'black' | 'grey'

const variants = {
  horizontal: occHorizontal,
  vertical: occVertical,
  icon: occIcon,
  occLogo: occLogo
}

const logoColors = {
  black: colors.icon.default.bold,
  grey: colors.icon.default.default,
  white: colors.icon.inverse.bold,
  blue: colors.icon.brand.default
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
  const variantInfo = variants[variant]
  return (
    <Tag
      onClick={onClick}
      className={classnames(classes.logo, classes[variant], className, {
        [classes.click]: onClick
      })}
      style={{
        ...style,
        background: base(variantInfo.icon(logoColors[theme])),
        width: width ?? variantInfo.width,
        height: height ?? variantInfo.height
      }}
      id={id}
    />
  )
}
