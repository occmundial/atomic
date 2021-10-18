import React, {
  useState,
  useCallback,
  useMemo,
  MouseEvent,
  ReactNode
} from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import spacing from '@/tokens/spacing'
import colors from '@/tokens/colors'

import useStyles from './styles'

const itemTypes = {
  link: 'link',
  icon: 'icon',
  custom: 'custom'
}

export interface ListItem {
  key: string | number
  type: 'link' | 'icon' | 'custom'
  text?: string
  href?: string
  target?: string
  rel?: string
  title?: string
  iconName?: string
  onClick?: (e: MouseEvent) => void
  custom?: ReactNode
}

interface List {
  collapse?: boolean
  title?: string
  items?: ListItem[]
}

interface ListProps {
  list: List
  isMobile?: boolean
  listClassName?: string
}

const List = ({
  list: { collapse, title, items },
  isMobile,
  listClassName
}: ListProps) => {
  const classes = useStyles()
  const [toggle, setToggle] = useState(false)

  const toggleList = useCallback(() => setToggle(!toggle), [toggle])

  const renderLink = useCallback(
    item => {
      return (
        <Text key={item.key} small bottomTiny>
          <a
            href={item.href}
            target={item.target}
            rel={item.rel}
            className={classes.link}
            title={item.title}
          >
            {item.text}
          </a>
        </Text>
      )
    },
    [classes]
  )

  const renderIcon = useCallback(
    item => {
      return (
        <div key={item.key} className={classes.iconWrapper} title={item.title}>
          <Icon
            iconName={item.iconName}
            onClick={item.onClick}
            color={colors.grey600}
          />
        </div>
      )
    },
    [classes]
  )

  const renderCustom = useCallback(
    item => <div key={item.key}>{item.custom}</div>,
    []
  )

  const renderItem = useCallback(
    item => {
      if (item.type === itemTypes.link) return renderLink(item)
      else if (item.type === itemTypes.icon) return renderIcon(item)
      else if (item.type === itemTypes.custom) return renderCustom(item)
    },
    [renderLink, renderIcon, renderCustom]
  )

  const isCollapsible = useMemo(
    () => collapse || isMobile,
    [collapse, isMobile]
  )

  return (
    <div>
      <div
        onClick={isCollapsible ? toggleList : null}
        className={classnames(classes.title, {
          [classes.collapsible]: isCollapsible
        })}
      >
        <Text tag="span">{title}</Text>
        {isCollapsible && (
          <Icon
            iconName="arrow-down"
            size={spacing.small}
            className={classnames(classes.arrow, { [classes.arrowUp]: toggle })}
          />
        )}
      </div>
      <div
        className={classnames(
          classes.list,
          {
            [classes.toggle]: toggle || !isCollapsible
          },
          listClassName
        )}
      >
        {items.map(item => renderItem(item))}
      </div>
    </div>
  )
}

export default List
