import { ReactNode, useMemo, createElement, CSSProperties } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

const oldToNewClassMapper = new Map([
  // Text
  ['hero', 'h1'],
  ['headline', 'h2'],
  ['heading', 'h4'],
  ['subheading ', 'h5'],
  ['extraLarge ', 'bodyXLarge'],
  ['large ', 'bodyLarge'],
  ['standard', 'bodyRegular'],
  ['small', 'bodySmall'],
  ['micro', 'bodyXSmall'],
  // Color
  ['primary', 'indigoPrimary'],
  ['secondary', 'pinkPrimary'],
  ['white', 'whitePrimary'],
  ['highEmphasis', 'corpPrimary'],
  ['midEmphasis', 'corpSecondary'],
  ['lowEmphasis', 'corpDisabled'],
  // Spacing
  ['topXTiny', 'top1'],
  ['topTiny ', 'top2'],
  ['topSmall', 'top4'],
  ['topBase', 'top5'],
  ['topMedium', 'top6'],
  ['topLarge', 'top8'],
  ['topXLarge', 'top9'],
  ['bottomXTiny', 'bottom1'],
  ['bottomTiny ', 'bottom2'],
  ['bottomSmall', 'bottom4'],
  ['bottomBase', 'bottom5'],
  ['bottomMedium', 'bottom6'],
  ['bottomLarge', 'bottom8'],
  ['bottomXLarge', 'bottom9']
])

type OldTextProps = {
  hero?: boolean
  headline?: boolean
  heading?: boolean
  subheading?: boolean
  extraLarge?: boolean
  large?: boolean
  standard?: boolean
  small?: boolean
  micro?: boolean
  primary?: boolean
  secondary?: boolean
  disabled?: boolean
  white?: boolean
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
}

type NewTextProps = {
  display?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  tagText?: boolean
  bodyXLarge?: boolean
  bodyLargeStrong?: boolean
  bodyLarge?: boolean
  bodyRegularStrong?: boolean
  bodyRegular?: boolean
  bodySmallStrong?: boolean
  bodySmall?: boolean
  bodyXSmall?: boolean
  indigoPrimary?: boolean
  indigoSecondary?: boolean
  pinkPrimary?: boolean
  whiteSecondary?: boolean
  whitePrimary?: boolean
  corpPrimary?: boolean
  corpSecondary?: boolean
  corpDisabled?: boolean
  top0?: boolean
  top1?: boolean
  top2?: boolean
  top3?: boolean
  top4?: boolean
  top5?: boolean
  top6?: boolean
  top7?: boolean
  top8?: boolean
  top9?: boolean
  top10?: boolean
  top11?: boolean
  top12?: boolean
  bottom0?: boolean
  bottom1?: boolean
  bottom2?: boolean
  bottom3?: boolean
  bottom4?: boolean
  bottom5?: boolean
  bottom6?: boolean
  bottom7?: boolean
  bottom8?: boolean
  bottom9?: boolean
  bottom10?: boolean
  bottom11?: boolean
  bottom12?: boolean
}

type TextProps = {
  children: ReactNode
  strong?: boolean
  mid?: boolean
  low?: boolean
  success?: boolean
  error?: boolean
  warning?: boolean
  info?: boolean
  link?: boolean
  current?: boolean
  left?: boolean
  center?: boolean
  right?: boolean
  tag?: string
  className?: string
  id?: string
  style?: CSSProperties
} & NewTextProps &
  OldTextProps

const getActiveKey = <T extends Record<string, any>[]>(array: T) => {
  for (const item of array) {
    const key = Object.keys(item)[0]
    if (item[key]) return key
  }
}

const Text = ({
  display,
  h1,
  h2,
  h3,
  h4,
  h5,
  tagText,
  bodyXLarge,
  bodyLargeStrong,
  bodyLarge,
  bodyRegularStrong,
  bodyRegular,
  bodySmallStrong,
  bodySmall,
  bodyXSmall,
  indigoPrimary,
  indigoSecondary,
  pinkPrimary,
  whiteSecondary,
  whitePrimary,
  corpPrimary,
  corpSecondary,
  corpDisabled,
  top0,
  top1,
  top2,
  top3,
  top4,
  top5,
  top6,
  top7,
  top8,
  top9,
  top10,
  top11,
  top12,
  bottom0,
  bottom1,
  bottom2,
  bottom3,
  bottom4,
  bottom5,
  bottom6,
  bottom7,
  bottom8,
  bottom9,
  bottom10,
  bottom11,
  bottom12,
  hero,
  headline,
  heading,
  subheading,
  extraLarge,
  large,
  standard,
  small,
  micro,
  primary,
  secondary,
  disabled,
  white,
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
  children,
  strong,
  mid,
  low,
  success,
  error,
  warning,
  info,
  link,
  current,
  left,
  center,
  right,
  tag = 'p',
  className,
  id,
  style
}: TextProps) => {
  const classes = useStyles()

  const sizeActive = useMemo(
    () =>
      getActiveKey([
        { display },
        { h1 },
        { h2 },
        { h3 },
        { h4 },
        { h5 },
        { tagText },
        { bodyXLarge },
        { bodyLargeStrong },
        { bodyLarge },
        { bodyRegularStrong },
        { bodyRegular },
        { bodySmallStrong },
        { bodySmall },
        { bodyXSmall },
        { hero },
        { headline },
        { heading },
        { subheading },
        { extraLarge },
        { large },
        { standard },
        { small },
        { micro }
      ]),
    [
      display,
      h1,
      h2,
      h3,
      h4,
      h5,
      tagText,
      bodyXLarge,
      bodyLargeStrong,
      bodyLarge,
      bodyRegularStrong,
      bodyRegular,
      bodySmallStrong,
      bodySmall,
      bodyXSmall,
      hero,
      headline,
      heading,
      subheading,
      extraLarge,
      large,
      standard,
      small,
      micro
    ]
  )

  const size = useMemo(() => {
    if (!sizeActive) return classes.bodyRegular
    const activeSizeParsed = oldToNewClassMapper.get(sizeActive)
    return classes[activeSizeParsed ?? sizeActive]
  }, [sizeActive, classes])

  const emphasis = useMemo(() => {
    if (low || corpDisabled) return classes.corpDisabled
    else if (mid || corpSecondary) return classes.corpSecondary
    return classes.corpPrimary
  }, [classes, mid, low, corpDisabled, corpSecondary])

  const colorActive = useMemo(
    () =>
      getActiveKey([
        { indigoPrimary },
        { indigoSecondary },
        { pinkPrimary },
        { whiteSecondary },
        { whitePrimary },
        { primary },
        { secondary },
        { success },
        { error },
        { warning },
        { info },
        { disabled },
        { white },
        { link },
        { current }
      ]),
    [
      indigoPrimary,
      indigoSecondary,
      pinkPrimary,
      whiteSecondary,
      whitePrimary,
      primary,
      secondary,
      success,
      error,
      warning,
      info,
      disabled,
      white,
      link,
      current
    ]
  )

  const color = useMemo(() => {
    if (!colorActive) return null
    const colorActiveParsed = oldToNewClassMapper.get(colorActive)
    return classes[colorActiveParsed ?? colorActive]
  }, [classes, colorActive])

  const align = useMemo(() => {
    if (left) return classes.left
    else if (center) return classes.center
    else if (right) return classes.right
  }, [classes, left, center, right])

  const topSpacingActive = useMemo(
    () =>
      getActiveKey([
        { top0 },
        { top1 },
        { top2 },
        { top3 },
        { top4 },
        { top5 },
        { top6 },
        { top7 },
        { top8 },
        { top9 },
        { top10 },
        { top11 },
        { top12 },
        { topXTiny },
        { topTiny },
        { topSmall },
        { topBase },
        { topMedium },
        { topLarge },
        { topXLarge }
      ]),
    [
      top0,
      top1,
      top2,
      top3,
      top4,
      top5,
      top6,
      top7,
      top8,
      top9,
      top10,
      top11,
      top12,
      topXTiny,
      topTiny,
      topSmall,
      topBase,
      topMedium,
      topLarge,
      topXLarge
    ]
  )

  const topSpacing = useMemo(() => {
    if (!topSpacingActive) return null
    const topSpacingActiveParsed = oldToNewClassMapper.get(topSpacingActive)
    return classes[topSpacingActiveParsed ?? topSpacingActive]
  }, [classes, topSpacingActive])

  const bottomSpacingActive = useMemo(
    () =>
      getActiveKey([
        { bottom0 },
        { bottom1 },
        { bottom2 },
        { bottom3 },
        { bottom4 },
        { bottom5 },
        { bottom6 },
        { bottom7 },
        { bottom8 },
        { bottom9 },
        { bottom10 },
        { bottom11 },
        { bottom12 },
        { bottomXTiny },
        { bottomTiny },
        { bottomSmall },
        { bottomBase },
        { bottomMedium },
        { bottomLarge },
        { bottomXLarge }
      ]),
    [
      bottom0,
      bottom1,
      bottom2,
      bottom3,
      bottom4,
      bottom5,
      bottom6,
      bottom7,
      bottom8,
      bottom9,
      bottom10,
      bottom11,
      bottom12,
      bottomXTiny,
      bottomTiny,
      bottomSmall,
      bottomBase,
      bottomMedium,
      bottomLarge,
      bottomXLarge
    ]
  )

  const bottomSpacing = useMemo(() => {
    if (!bottomSpacingActive) return null
    const bottomSpacingActiveParsed =
      oldToNewClassMapper.get(bottomSpacingActive)
    return classes[bottomSpacingActiveParsed ?? bottomSpacingActive]
  }, [classes, bottomSpacingActive])

  const weight = useMemo(() => {
    const activeSize = getActiveKey([
      { hero },
      { headline },
      { heading },
      { subheading },
      { large },
      { standard },
      { small },
      { micro }
    ])
    if ((!activeSize || large || standard || small || micro) && strong)
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
    strong
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

export default Text
