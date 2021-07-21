import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  ReactNode
} from 'react'
import classnames from 'classnames'

import Grid from '../Grid'
import Flexbox from '../Flexbox'
import NavItem from '../NavItem'
import NavIcon from '../NavIcon'
import NavTop from '../NavTop'
import Button from '../Button'
import Icon from '../Icon'
import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'
import grid from '@/tokens/grid'
import useWindowSize from '@/hooks/useWindowSize'

import useStyles from './styles'
import { TopProps } from '../NavTop/NavTop'

interface NavElement {
  key: string | number
  type: 'button' | 'link' | 'dropdownLink' | 'icon' | 'custom' | 'logo'
  text?: string
  onClick?: () => void
  selected?: boolean
  link?: string
  theme?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'tertiaryWhite'
    | 'ghostPink'
    | 'ghostGrey'
    | 'ghostWhite'
  iconName?: string
  custom?: ReactNode
}

export interface NavPosition extends Array<NavElement> {}

interface NavTabProps {
  left?: NavPosition
  right?: NavPosition
  center?: NavPosition
  flexCenter?: NavPosition
  top?: TopProps
  blue?: boolean
  fixed?: boolean
  hideOnScroll?: boolean
  bottom?: boolean
  zIndex?: number
  className?: string
}

const NavTab = ({
  blue,
  left,
  right,
  center,
  flexCenter,
  top,
  fixed,
  bottom,
  className,
  zIndex,
  hideOnScroll
}: NavTabProps) => {
  const classes = useStyles()
  const [show, setShow] = useState(true)
  const [currentScroll, setCurrentScroll] = useState(0)
  const { width } = useWindowSize()

  const determineVisibility = useCallback(() => {
    setShow(
      window.pageYOffset <= spacing.xLarge ||
        window.pageYOffset <= currentScroll
    )
    setCurrentScroll(window.pageYOffset)
  }, [currentScroll])

  const visibilityRef = useRef<() => void>()

  useEffect(() => {
    visibilityRef.current = determineVisibility
  }, [determineVisibility])

  useEffect(() => {
    if (fixed && hideOnScroll) {
      window.addEventListener('scroll', visibilityRef.current)
      setCurrentScroll(window.pageYOffset)
    }
    return () => {
      window.removeEventListener('scroll', visibilityRef.current)
    }
  }, [fixed, hideOnScroll])

  const renderLink = useCallback(
    item => {
      return (
        <NavItem white={blue} {...item} className={classes.navItem}>
          {item.text}
        </NavItem>
      )
    },
    [classes, blue]
  )

  const renderDropdownLink = useCallback(
    item => {
      return (
        <NavItem
          white={blue}
          {...item}
          selected={false}
          className={classes.navItem}
        >
          {item.text}{' '}
          <Icon
            iconName="arrowDown"
            className={classnames(classes.arrow, {
              [classes.arrowUp]: item.selected
            })}
            colors={blue ? [colors.white] : [colors.grey900]}
          />
        </NavItem>
      )
    },
    [classes, blue]
  )

  const renderButton = useCallback(
    item => {
      return (
        <Button className={classes.button} {...item}>
          {item.text}
        </Button>
      )
    },
    [classes]
  )

  const renderIcon = useCallback(
    item => {
      return (
        <div className={classes.iconWrap} key={item.key}>
          <NavIcon className={classes.icon} white={blue} {...item} />
        </div>
      )
    },
    [classes, blue]
  )

  const renderLogo = useCallback(
    item => {
      return (
        <div className={classes.logo} key={item.key}>
          {item.logo}
        </div>
      )
    },
    [classes]
  )

  const renderCustom = useCallback(item => {
    return <div key={item.key}>{item.custom}</div>
  }, [])

  const renderItem = useCallback(
    item => {
      if (item.type == 'link') return renderLink(item)
      else if (item.type == 'dropdownLink') return renderDropdownLink(item)
      else if (item.type == 'button') return renderButton(item)
      else if (item.type == 'icon') return renderIcon(item)
      else if (item.type == 'logo') return renderLogo(item)
      else if (item.type == 'custom') return renderCustom(item)
    },
    [
      renderLink,
      renderDropdownLink,
      renderButton,
      renderIcon,
      renderLogo,
      renderCustom
    ]
  )

  const isFluid = useMemo(() => width < grid.xl, [width])
  return (
    <div
      className={classnames(
        classes.container,
        { [classes.fixed]: fixed },
        { [classes.show]: show },
        { [classes.hide]: !show },
        { [classes.isScrolled]: currentScroll > 0 },
        { [classes.bottom]: bottom },
        className
      )}
      style={zIndex ? { zIndex } : null}
    >
      {top && <NavTop blue={blue} top={top} isFluid={isFluid} />}
      <div
        className={classnames(
          classes.nav,
          { [classes.blue]: blue },
          { [classes.white]: !blue }
        )}
      >
        <Grid className={classes.grid} fluid={isFluid}>
          <Flexbox
            display="flex"
            justifyContent="between"
            alignItems="center"
            className={classes.tab}
          >
            {left && (
              <Flexbox
                display="flex"
                className={classes.left}
                alignItems="center"
              >
                {left.map(item => {
                  return renderItem(item)
                })}
              </Flexbox>
            )}
            {flexCenter ? (
              <Flexbox
                display="flex"
                flex="1"
                alignItems="center"
                justifyContent="between"
              >
                {flexCenter.map(item => {
                  return renderItem(item)
                })}
              </Flexbox>
            ) : (
              <Flexbox flex="1" />
            )}
            {right && (
              <Flexbox
                display="flex"
                className={classes.right}
                alignItems="center"
              >
                {right.map(item => {
                  return renderItem(item)
                })}
              </Flexbox>
            )}
            {center && (
              <Flexbox
                display="flex"
                className={classes.center}
                alignItems="center"
              >
                {center.map(item => {
                  return renderItem(item)
                })}
              </Flexbox>
            )}
          </Flexbox>
        </Grid>
      </div>
    </div>
  )
}

export default NavTab