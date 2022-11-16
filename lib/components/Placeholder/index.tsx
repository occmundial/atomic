import React from 'react'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'

import useStyles from './styles'

export interface PlaceholderProps {
  textSize?:
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
  height
}: PlaceholderProps) => {
  const classes = useStyles()
  return (
    <Flexbox
      display="flex"
      alignItems="center"
      className={classnames(
        { [classes[textSize]]: textSize },
        { [classes[`top${top}`]]: top },
        { [classes[`bottom${bottom}`]]: bottom }
      )}
    >
      <div
        className={classnames(classes.placeholder, { [classes.round]: round })}
        style={{
          width: width ? width : '100%',
          height: height ? height : 14
        }}
      />
    </Flexbox>
  )
}

export default Placeholder
