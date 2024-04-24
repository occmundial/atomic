import { CSSProperties, useMemo, useState } from 'react'
import classnames from 'classnames'

import useAtomic from '@/hooks/useAtomic'

import useStyles from './styles'
import iconSizes from '@/tokens/iconSizes'
import { iconTranslation } from './helper'

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
  testId?: string
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
  onClick,
  testId
}: IconProps) => {
  const [hover, setHover] = useState(false)
  const classes = useStyles()
  const atomic = useAtomic()
  const iconColor = useMemo(() => {
    if (hover && hoverColor) return hoverColor
    if (color) return color
    return 'currentcolor'
  }, [color, hoverColor, hover])
  const _iconName = useMemo(() => {
    if (!atomic.translateIconsV2) return iconName
    const iconBaseName = iconName.replace(/-o$/, '')
    const translation = iconTranslation[iconBaseName]
    if (translation === '*' || !translation) return iconBaseName
    return translation
  }, [iconName, atomic.translateIconsV2])
  return (
    <svg
      className={classnames(
        classes.icon,
        `${atomic.iconsPrefix}__${_iconName}`,
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
      data-testid={testId}
    >
      <use
        xlinkHref={`${atomic.iconsPath}#${atomic.iconsPrefix}__${_iconName}`}
      />
    </svg>
  )
}

export default Icon
