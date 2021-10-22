import { CSSProperties } from 'react'
import classnames from 'classnames'

import useAtomic from '@/hooks/useAtomic'

import useStyles from './styles'

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

const Icon = (props: IconProps) => {
  const classes = useStyles(props)
  const atomic = useAtomic()
  const { iconName, className, style, id, onClick } = props
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
      id={id}
      style={style}
      onClick={onClick}
    >
      <use xlinkHref={`#${atomic.iconsPrefix}__${iconName}`} />
    </svg>
  )
}

export default Icon
