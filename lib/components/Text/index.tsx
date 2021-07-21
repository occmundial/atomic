import {
  ReactNode,
  useCallback,
  useMemo,
  createElement,
  CSSProperties
} from 'react'
import classnames from 'classnames'

import useStyles from './styles'

interface TextProps {
  children: ReactNode
  hero?: boolean
  headline?: boolean
  heading?: boolean
  subheading?: boolean
  large?: boolean
  standard?: boolean
  small?: boolean
  micro?: boolean
  strong?: boolean
  mid?: boolean
  low?: boolean
  primary?: boolean
  secondary?: boolean
  success?: boolean
  error?: boolean
  warning?: boolean
  info?: boolean
  disabled?: boolean
  white?: boolean
  link?: boolean
  left?: boolean
  center?: boolean
  right?: boolean
  topXTiny?: boolean
  topTiny?: boolean
  topSmall?: boolean
  topBase?: boolean
  topMedium?: boolean
  topLarge?: boolean
  topXLarge?: boolean
  bottomXTiny?: boolean
  bottomTiny?: boolean
  bottomSmall?: boolean
  bottomBase?: boolean
  bottomMedium?: boolean
  bottomLarge?: boolean
  bottomXLarge?: boolean
  tag?: string
  className?: string
  id?: string
  style?: CSSProperties
}

const Text = ({
  children,
  tag,
  className,
  style,
  id,
  hero,
  headline,
  heading,
  subheading,
  large,
  standard,
  small,
  micro,
  low,
  mid,
  primary,
  secondary,
  success,
  error,
  warning,
  info,
  disabled,
  white,
  link,
  left,
  center,
  right,
  topXTiny,
  topTiny,
  topSmall,
  topBase,
  topMedium,
  topLarge,
  topXLarge,
  bottomXTiny,
  bottomTiny,
  bottomSmall,
  bottomBase,
  bottomMedium,
  bottomLarge,
  bottomXLarge,
  strong
}: TextProps) => {
  const classes = useStyles()

  const filter = useCallback(
    array =>
      array.filter(item => {
        const key = Object.keys(item)[0]
        if (item[key]) return key
      }),
    []
  )

  const size = useMemo(() => {
    const sizes = [
      { hero },
      { headline },
      { heading },
      { subheading },
      { large },
      { standard },
      { small },
      { micro }
    ]
    const filtered = filter(sizes)
    if (filtered.length === 0) return classes.standard
    return classes[Object.keys(filtered[0])[0]]
  }, [
    classes,
    hero,
    headline,
    heading,
    subheading,
    large,
    standard,
    small,
    micro,
    filter
  ])

  const emphasis = useMemo(() => {
    if (low) return classes.lowEmphasis
    else if (mid) return classes.midEmphasis
    return classes.highEmphasis
  }, [classes, mid, low])

  const color = useMemo(() => {
    const colors = [
      { primary },
      { secondary },
      { success },
      { error },
      { warning },
      { info },
      { disabled },
      { white },
      { link }
    ]
    const filtered = filter(colors)
    if (filtered.length == 0) return null
    return classes[Object.keys(filtered[0])[0]]
  }, [
    classes,
    primary,
    secondary,
    success,
    error,
    warning,
    info,
    disabled,
    white,
    link,
    filter
  ])

  const align = useMemo(() => {
    if (left) return classes.left
    else if (center) return classes.center
    else if (right) return classes.right
  }, [classes, left, center, right])

  const topSpacing = useMemo(() => {
    const spacing = [
      { topXTiny },
      { topTiny },
      { topSmall },
      { topBase },
      { topMedium },
      { topLarge },
      { topXLarge }
    ]
    const filtered = filter(spacing)
    if (filtered.length == 0) return null
    return classes[Object.keys(filtered[0])[0]]
  }, [
    classes,
    topXTiny,
    topTiny,
    topSmall,
    topBase,
    topMedium,
    topLarge,
    topXLarge,
    filter
  ])

  const bottomSpacing = useMemo(() => {
    const spacing = [
      { bottomXTiny },
      { bottomTiny },
      { bottomSmall },
      { bottomBase },
      { bottomMedium },
      { bottomLarge },
      { bottomXLarge }
    ]
    const filtered = filter(spacing)
    if (filtered.length == 0) return null
    return classes[Object.keys(filtered[0])[0]]
  }, [
    classes,
    bottomXTiny,
    bottomTiny,
    bottomSmall,
    bottomBase,
    bottomMedium,
    bottomLarge,
    bottomXLarge,
    filter
  ])

  const weight = useMemo(() => {
    const sizes = [
      { hero },
      { headline },
      { heading },
      { subheading },
      { large },
      { standard },
      { small },
      { micro }
    ]
    const filtered = filter(sizes)
    if ((filtered.length == 0 || large || standard || small || micro) && strong)
      return classes.strong
    return null
  }, [
    classes,
    hero,
    headline,
    heading,
    subheading,
    large,
    standard,
    small,
    micro,
    strong,
    filter
  ])

  return createElement(
    tag,
    {
      className: classnames(
        classes.text,
        size,
        color || emphasis,
        topSpacing,
        bottomSpacing,
        align,
        weight,
        className
      ),
      style,
      id
    },
    children
  )
}

Text.defaultProps = {
  tag: 'p'
}

export default Text
