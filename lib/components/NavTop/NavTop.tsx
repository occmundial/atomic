import React, { useCallback } from 'react'
import classnames from 'classnames'

import Flexbox from '../Flexbox'
import Grid from '../Grid'
import NavItem from '../NavItem'
import { NavItemProps } from '../NavItem/NavItem'

import useStyles from './styles'

export interface TopProps
  extends Array<Omit<NavItemProps, 'white' | 'small' | 'className'>> {}

interface NavTopProps {
  top: TopProps
  blue: boolean
  isFluid: boolean
}

const NavTop = ({ top, blue, isFluid }: NavTopProps) => {
  const classes = useStyles()

  const renderTopLink = useCallback(
    (item: NavItemProps) => {
      return (
        <NavItem
          small
          white={blue}
          {...item}
          className={classnames(classes.navItem, { [classes.whiteItem]: blue })}
        >
          {item.children}
        </NavItem>
      )
    },
    [classes, blue]
  )

  return (
    <div className={`${classes.top} ${blue ? classes.blue : classes.white}`}>
      <Grid className={classes.fullHeight} fluid={isFluid}>
        <Flexbox
          display="flex"
          alignItems="center"
          className={classes.fullHeight}
        >
          <div>{top && top.map(item => renderTopLink(item))}</div>
        </Flexbox>
      </Grid>
    </div>
  )
}

export default NavTop
