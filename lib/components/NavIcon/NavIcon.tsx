import React, { EventHandler, MouseEvent } from 'react'
import classnames from 'classnames'
import Text from '../Text'
import Flexbox from '../Flexbox'

import useStyles from './styles'

export interface NavIconProps {
  selected: boolean
  iconName: string
  label: string
  onClick: EventHandler<MouseEvent>
  showBar: boolean
  direction: 'col' | 'row'
  className: string
  width: number
  white: boolean
}

const NavIcon = (props: NavIconProps) => {
  const classes = useStyles(props)
  const { selected, label, onClick, direction, className } = props
  return (
    <div
      className={classnames(
        classes.cont,
        { [classes.selected]: selected },
        className
      )}
      onClick={onClick}
    >
      <Flexbox
        display="flex"
        direction={direction}
        justifyContent="center"
        alignItems="center"
        className={classes.flex}
      >
        <div className={classes.icon} />
        {label && (
          <Text micro>
            <span className={classes.text}>{label}</span>
          </Text>
        )}
      </Flexbox>
    </div>
  )
}

export default NavIcon
