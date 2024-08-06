import React from 'react'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'

import useStyles from './styles'
import { classTranslation } from '../Text/helper'
import { parseSpacingValueClass } from './helper'

export interface PlaceholderProps {
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
  top?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'xTiny'
    | 'tiny'
    | 'small'
    | 'base'
    | 'medium'
    | 'large'
    | 'xLarge'
  bottom?:
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | 'xTiny'
    | 'tiny'
    | 'small'
    | 'base'
    | 'medium'
    | 'large'
    | 'xLarge'
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
  theme = 'light'
}: PlaceholderProps) => {
  const classes = useStyles()

  const textSizeTranslated = classTranslation.get(textSize) ?? textSize
  const spacingTopTranslated = parseSpacingValueClass(top, 'top')
  const spacingBottomTranslated = parseSpacingValueClass(bottom, 'bottom')

  return (
    <Flexbox
      display="flex"
      alignItems="center"
      className={classnames(
        classes[textSizeTranslated],
        classes[spacingTopTranslated],
        classes[spacingBottomTranslated],
        classes[theme]
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
