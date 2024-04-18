import React, {
  useState,
  useEffect,
  useCallback,
  ReactNode,
  SyntheticEvent
} from 'react'
import classnames from 'classnames'

import Grid from '@/components/Grid'
import Flexbox from '@/components/Flexbox'
import NavItem from '@/components/NavItem'
import NavIcon from '@/components/NavIcon'
import NavTop, { TopProps } from '@/components/NavTop'
import Button, { ButtonTheme } from '@/components/Button'
import Icon from '@/components/Icon'
import colors from '@/tokens/colors'
import spacing from '@/tokens/spacing'
import iconSizes from '@/tokens/iconSizes'

import useStyles from './styles'

export interface LinkElement {
  key: string | number
  type: 'link'
  text: string
  onClick?: (e: SyntheticEvent) => void
  selected?: boolean
  link?: string
  testId?: string
}

export interface ButtonElement {
  key: string | number
  type: 'button'
  text?: string
  onClick?: (e: SyntheticEvent) => void
  theme?: ButtonTheme
  iconName?: string
  testId?: string
}

export interface DropdownElement {
  key: string | number
  type: 'dropdownLink'
  text: string
  onClick?: (e: SyntheticEvent) => void
  selected?: boolean
  link?: string
  testId?: string
}

export interface IconElement {
  key: string | number
  type: 'icon'
  label?: string
  onClick?: (e: SyntheticEvent) => void
  selected?: boolean
  iconName: string
  testId?: string
  showBar?: boolean
  direction?: 'col' | 'row'
  width?: number
}

export interface CustomElement {
  key: string | number
  type: 'custom'
  custom: ReactNode
  testId?: string
}

export interface LogoElement {
  key: string | number
  type: 'logo'
  logo: ReactNode
  testId?: string
}

export type NavElement =
  | LinkElement
  | ButtonElement
  | DropdownElement
  | IconElement
  | CustomElement
  | LogoElement

export interface NavPosition extends Array<NavElement> {}

export interface NavTabProps {
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
  /** The recommendation is to set the breakpoint at `grid.xl` */
  isFluid?: boolean
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
  hideOnScroll,
  isFluid
}: NavTabProps) => {
  const classes = useStyles()
  const [show, setShow] = useState(true)
  const [currentScroll, setCurrentScroll] = useState(0)

  const determineVisibility = useCallback(() => {
    setShow(
      window.pageYOffset <= spacing.xLarge ||
        window.pageYOffset <= currentScroll
    )
    setCurrentScroll(window.pageYOffset)
  }, [currentScroll])

  useEffect(() => {
    if (fixed && hideOnScroll) {
      window.addEventListener('scroll', determineVisibility)
      setCurrentScroll(window.pageYOffset)
    }
    return () => {
      window.removeEventListener('scroll', determineVisibility)
    }
  }, [fixed, hideOnScroll, determineVisibility])

  const renderLink = useCallback(
    (item: LinkElement) => {
      return (
        <NavItem white={blue} {...item} className={classes.navItem}>
          {item.text}
        </NavItem>
      )
    },
    [classes, blue]
  )

  const renderDropdownLink = useCallback(
    (item: DropdownElement) => {
      return (
        <NavItem
          white={blue}
          {...item}
          selected={false}
          className={classes.navItem}
        >
          {item.text}{' '}
          <Icon
            iconName="chevron-down"
            size={iconSizes.small}
            className={classnames(classes.arrow, {
              [classes.arrowUp]: item.selected
            })}
            color={blue ? colors.white : colors.grey900}
          />
        </NavItem>
      )
    },
    [classes, blue]
  )

  const renderButton = useCallback(
    (item: ButtonElement) => {
      return (
        <Button className={classes.button} {...item}>
          {item.text}
        </Button>
      )
    },
    [classes]
  )

  const renderIcon = useCallback(
    (item: IconElement) => {
      return (
        <div className={classes.iconWrap} key={item.key}>
          <NavIcon className={classes.icon} white={blue} {...item} />
        </div>
      )
    },
    [classes, blue]
  )

  const renderLogo = useCallback(
    (item: LogoElement) => {
      return (
        <div data-testid={item.testId} className={classes.logo} key={item.key}>
          {item.logo}
        </div>
      )
    },
    [classes]
  )

  const renderCustom = useCallback((item: CustomElement) => {
    return (
      <div data-testid={item.testId} key={item.key}>
        {item.custom}
      </div>
    )
  }, [])

  const renderItem = useCallback(
    (item: NavElement) => {
      switch (item.type) {
        case 'link':
          return renderLink(item)
        case 'dropdownLink':
          return renderDropdownLink(item)
        case 'button':
          return renderButton(item)
        case 'icon':
          return renderIcon(item)
        case 'logo':
          return renderLogo(item)
        case 'custom':
          return renderCustom(item)
      }
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
