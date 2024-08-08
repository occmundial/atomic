import React, { CSSProperties } from 'react'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'

import useStyles from './styles'
import { classTranslation } from '../Text/helper'

export interface PlaceholderProps {
  className: string
  style: CSSProperties
  theme: 'light' | 'dark'
  textSize?:
    | 'display'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'tag'
    | 'bodyXLarge'
    | 'bodyLargeStrong'
    | 'bodyLarge'
    | 'bodyRegularStrong'
    | 'bodyRegular'
    | 'bodySmallStrong'
    | 'bodySmall'
    | 'bodyXSmall'
    | 'hero'
    | 'headline'
    | 'heading'
    | 'subheading'
    | 'large'
    | 'standard'
    | 'small'
    | 'micro'
  top?: 'xTiny' | 'tiny' | 'small' | 'base' | 'medium' | 'large' | 'xLarge'
  bottom?: 'xTiny' | 'tiny' | 'small' | 'base' | 'medium' | 'large' | 'xLarge'
  width?: string | number
  height?: string | number
  round?: boolean
}

const Placeholder = ({
  textSize,
  round,
  top,
  bottom,
  width,
  height,
  className,
  style,
  theme = 'light'
}: PlaceholderProps) => {
  const classes = useStyles()
  const textSizeTranslated = classTranslation.get(textSize) ?? textSize

  return (
    <Flexbox
      display="flex"
      alignItems="center"
      style={style}
      className={classnames(
        classes[textSizeTranslated],
        top && classes[`top${top}`],
        bottom && classes[`bottom${bottom}`],
        classes[theme],
        className
      )}
    >
      <div
        className={classnames(classes.placeholder, {
          [classes.round]: round
        })}
        style={{
          width: width ? width : '100%',
          height: height ? height : !textSize ? 14 : '100%'
        }}
      />
    </Flexbox>
  )
}

export default Placeholder
