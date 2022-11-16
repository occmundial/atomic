import { CSSProperties, useMemo, useState } from 'react'
import classnames from 'classnames'

import useAtomic from '@/hooks/useAtomic'

import useStyles from './styles'
import iconSizes from '@/tokens/iconSizes'

export interface IconProps {
  iconName: string
  size?: number
  transition?: string
  color?: string
  hoverColor?: string
  onClick?: () => void
  alt?: string
  id?: string
  className?: string
  style?: CSSProperties
}

const Icon = ({
  size,
  color,
  hoverColor,
  transition,
  iconName,
  className,
  style,
  id,
  onClick
}: IconProps) => {
  const [hover, setHover] = useState(false)
  const classes = useStyles()
  const atomic = useAtomic()
  const iconColor = useMemo(() => {
    if (hover && hoverColor) return hoverColor
    if (color) return color
    return 'currentcolor'
  }, [color, hoverColor, hover])
  return (
    <svg
      className={classnames(
        classes.icon,
        `${atomic.iconsPrefix}__${iconName}`,
        {
          [classes.click]: onClick
        },
        className
      )}
      width={size ? size : iconSizes.base}
      height={size ? size : iconSizes.base}
      fill={iconColor}
      id={id}
      style={{
        ...style,
        transition: transition ? transition : '0.3s all'
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <use xlinkHref={`#${atomic.iconsPrefix}__${iconName}`} />
    </svg>
  )
}

export default Icon
