import React, { EventHandler, MouseEvent, ReactElement, useMemo } from 'react'
import classnames from 'classnames'

import Text from '../Text'

import useStyles from './styles'

export interface NavItemProps {
  children: string
  link?: string
  target?: string
  onClick?: EventHandler<MouseEvent>
  selected?: boolean
  small?: boolean
  notification?: boolean
  white?: boolean
  className?: string
}

const NavItem = ({
  link,
  target,
  onClick,
  children,
  selected,
  notification,
  white,
  small,
  className
}: NavItemProps) => {
  const classes = useStyles()

  return (
    <a
      className={classnames(classes.link, className)}
      href={!selected ? link : null}
      onClick={!selected ? onClick : null}
      target={target}
    >
      <Text
        tag="span"
        white={white}
        small={small}
        className={classnames(classes.text, { [classes.selected]: selected })}
      >
        {children}
      </Text>
      {notification && <span className={classes.notification} />}
    </a>
  )
}

export default NavItem
