import React, {
  useState,
  useCallback,
  MouseEvent,
  ReactNode,
  Fragment,
  useEffect
} from 'react'
import classnames from 'classnames'

import Icon from '@/components/Icon'
import spacing from '@/tokens/spacing'
import colors from '@/tokens/colors'

import useStyles from './styles'
import useIcon from '@/hooks/useIcon'

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
  testId?: string
}

interface List {
  title?: string
  items?: ListItem[]
}

interface ListProps {
  list: List
  listClassName?: string
}

const List = ({ list: { title, items }, listClassName }: ListProps) => {
  const classes = useStyles()
  const [toggle, setToggle] = useState(false)
  const [overflowVisible, setOverflowVisible] = useState(false)

  const getIcon = useIcon()

  const toggleList = useCallback(() => setToggle(!toggle), [toggle])

  useEffect(() => {
    const timeout = setTimeout(
      () => setOverflowVisible(toggle),
      toggle ? 200 : 0
    )
    return () => clearTimeout(timeout)
  }, [toggle])

  const renderLink = useCallback(
    item => {
      return (
        <a
          key={item.key}
          href={item.href}
          target={item.target}
          rel={item.rel}
          className={classes.link}
          title={item.title}
          data-testid={item.testId}
        >
          {item.text}
        </a>
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
            testId={item.testId}
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

  return (
    <Fragment>
      <div
        onClick={toggleList}
        className={classnames(classes.title, classes.collapsible)}
        data-testid={`footer-list__title-${title}`}
      >
        <h5 className={classes.titleColor}>{title}</h5>
        <Icon
          iconName={getIcon('arrow-down', 'chevron-down')}
          size={spacing.small}
          className={classnames(classes.arrow, { [classes.arrowUp]: toggle })}
        />
      </div>
      <div className={classes.titleDesktop}>
        <h5 className={classes.titleColor}>{title}</h5>
      </div>
      <div
        className={classnames(
          classes.list,
          {
            [classes.toggle]: toggle
          },
          listClassName
        )}
      >
        <div
          className={`${classes.content}${
            toggle ? ` ${classes.showContent}` : ''
          }${overflowVisible ? ` ${classes.overflowVisible}` : ''}`}
        >
          {items.map(item => renderItem(item))}
        </div>
      </div>
    </Fragment>
  )
}

export default List
