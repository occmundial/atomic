import React from 'react'
import classnames from 'classnames'

import Flexbox from '../Flexbox'

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

const Placeholder = (props: PlaceholderProps) => {
  const { textSize, round, top, bottom } = props
  const classes = useStyles(props)
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
      />
    </Flexbox>
  )
}

export default Placeholder
