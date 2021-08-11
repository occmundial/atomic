import React, { EventHandler, MouseEvent } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Flexbox from '@/components/Flexbox'
import Icon from '@/components/Icon'

import useStyles from './styles'
import iconSizes from '@/tokens/iconSizes'

export interface NavIconProps {
  selected?: boolean
  iconName?: string
  label?: string
  onClick?: EventHandler<MouseEvent>
  showBar?: boolean
  direction?: 'col' | 'row'
  className?: string
  width?: number
  white?: boolean
}

const NavIcon = (props: NavIconProps) => {
  const classes = useStyles(props)
  const { iconName, selected, label, onClick, direction, className } = props
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
        <Icon
          iconName={iconName}
          size={iconSizes.base}
          className={classes.icon}
        />
        {label && (
          <Text micro current>
            <span className={classes.text}>{label}</span>
          </Text>
        )}
      </Flexbox>
    </div>
  )
}

export default NavIcon
