import {
  Fragment,
  useState,
  useEffect,
  useCallback,
  CSSProperties,
  MouseEvent
} from 'react'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Colors from '@/tokens/colors'
import iconSizes from '@/tokens/iconSizes'
import usePrevious from '@/hooks/usePrevious'

import { compareText, separateText } from './helper'
import useStyles from './styles'

const ARROW_DOWN = 'ArrowDown'
const ARROW_UP = 'ArrowUp'
const ENTER = 'Enter'
const { inkLighter } = Colors
const { small: iconSmall } = iconSizes

export interface Item {
  id: string | number
  text: string
  textRight?: string
  iconName?: string
}

export interface Group {
  id: string | number
  text: string
  items: Item[]
}

export interface DroplistProps {
  items: Item[] | Group[]
  term?: string
  groups?: boolean
  onClick?: (item: Item) => void
  onMouseDown?: (item: Item) => void
  onMouseUp?: (item: Item) => void
  onEnter?: (item: Item) => void
  filter?: boolean
  isOnFocus?: boolean
  id?: string
  className?: string
  style?: CSSProperties
  testId?: string
}

const Droplist = ({
  items,
  filter,
  term,
  isOnFocus,
  groups,
  onClick,
  onEnter,
  onMouseDown,
  onMouseUp,
  className,
  id,
  style,
  testId
}: DroplistProps) => {
  const classes = useStyles()
  const [currentItem, setCurrentItem] = useState(-1)
  const [currentGroup, setCurrentGroup] = useState(-1)
  const [_items, setItems] = useState(items)
  const prevTerm = usePrevious(term)
  const prevItems = usePrevious(items)

  const resetPosition = useCallback(() => {
    setCurrentGroup(-1)
    setCurrentItem(-1)
  }, [])

  const _onClick = useCallback(
    (item: Item, e: MouseEvent) => {
      e.stopPropagation()
      resetPosition()
      if (onClick) onClick(item)
    },
    [onClick, resetPosition]
  )

  const _onMouseDown = useCallback(
    (item: Item, e: MouseEvent) => {
      e.stopPropagation()
      resetPosition()
      if (onMouseDown) onMouseDown(item)
    },
    [onMouseDown, resetPosition]
  )

  const _onMouseUp = useCallback(
    (item: Item, e: MouseEvent) => {
      e.stopPropagation()
      resetPosition()
      if (onMouseUp) onMouseUp(item)
    },
    [onMouseUp, resetPosition]
  )

  const _onEnter = useCallback(() => {
    if (currentItem > -1) {
      if (groups) {
        const selectedGroup = (_items as Group[]).find(
          (_, i) => i === currentGroup
        )
        const selectedItem = selectedGroup.items.find(
          (_, i) => i === currentItem
        )
        resetPosition()
        if (onEnter) onEnter(selectedItem)
      } else {
        const selectedItem = (_items as Item[]).find(
          (_, i) => i === currentItem
        )
        setCurrentItem(-1)
        if (onEnter) onEnter(selectedItem)
      }
    }
  }, [_items, currentGroup, currentItem, groups, onEnter, resetPosition])

  const moveDown = useCallback(
    (items: Item[]) => {
      if (currentItem === items.length - 1) setCurrentItem(-1)
      else setCurrentItem(currentItem + 1)
    },
    [currentItem]
  )

  const moveToNextGroup = useCallback(() => {
    if (currentGroup === _items.length - 1) {
      resetPosition()
    } else {
      const newGroup = currentGroup + 1
      setCurrentGroup(newGroup)
      if (
        (_items as Group[])[newGroup].items &&
        (_items as Group[])[newGroup].items.length
      )
        setCurrentItem(0)
      else moveToNextGroup()
    }
  }, [_items, currentGroup, resetPosition])

  const moveGroupDown = useCallback(() => {
    if (currentGroup === -1) moveToNextGroup()
    else {
      const groupItems = (_items as Group[])[currentGroup].items
      if (currentItem === groupItems.length - 1) moveToNextGroup()
      else moveDown(groupItems)
    }
  }, [_items, currentGroup, currentItem, moveDown, moveToNextGroup])

  const moveUp = useCallback(
    (items: Item[]) => {
      if (currentItem === -1) setCurrentItem(items.length - 1)
      else setCurrentItem(currentItem - 1)
    },
    [currentItem]
  )

  const moveToPreviousGroup = useCallback(() => {
    if (currentGroup === -1) {
      const newGroup = _items.length - 1
      setCurrentGroup(newGroup)
      const subItems = (_items as Group[])[newGroup].items || []
      if (subItems.length) setCurrentItem(subItems.length - 1)
      else moveToPreviousGroup()
    } else if (currentGroup === 0) {
      resetPosition()
    } else {
      const newGroup = currentGroup - 1
      setCurrentGroup(newGroup)
      const subItems = (_items as Group[])[newGroup].items || []
      if (subItems.length) setCurrentItem(subItems.length - 1)
      else moveToPreviousGroup()
    }
  }, [_items, currentGroup, resetPosition])

  const moveGroupUp = useCallback(() => {
    if (currentGroup === -1) moveToPreviousGroup()
    else {
      const groupItems = (_items as Group[])[currentGroup].items
      if (currentItem === 0) moveToPreviousGroup()
      else moveUp(groupItems)
    }
  }, [_items, currentGroup, currentItem, moveToPreviousGroup, moveUp])

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const { code, preventDefault } = event
      if (isOnFocus) {
        if (code === ARROW_UP || code === ARROW_DOWN) {
          preventDefault.call(event)
          if (groups) {
            if (code === ARROW_DOWN) moveGroupDown()
            else moveGroupUp()
          } else {
            if (code === ARROW_DOWN) moveDown(_items)
            else moveUp(_items)
          }
        }
        if (code === ENTER) _onEnter()
      }
    },
    [
      _items,
      _onEnter,
      groups,
      isOnFocus,
      moveDown,
      moveGroupDown,
      moveGroupUp,
      moveUp
    ]
  )

  const filterItems = useCallback(
    (items: Item[] | Group[], term: string) => {
      if (groups) {
        const groupsItems = cloneDeep(items) as Group[]
        const newItems = groupsItems.reduce((groups: Group[], group) => {
          group.items = group.items.filter(
            item => compareText(item.text, term) >= 0
          )
          if (group.items.length) groups.push(group)
          return groups
        }, [])
        setItems(newItems)
      } else {
        const newItems = (items as Item[]).filter(
          item => compareText(item.text, term) >= 0
        )
        setItems(newItems)
      }
    },
    [groups]
  )

  useEffect(() => {
    global.addEventListener('keydown', onKeyDown)
    return () => global.removeEventListener('keydown', onKeyDown)
  })

  useEffect(() => {
    if (filter) filterItems(items, term)
  }, [filterItems, filter, items, term])

  useEffect(() => {
    if (term !== prevTerm || !isEqual(items, prevItems)) {
      setCurrentItem(-1)
      if (filter) filterItems(items, term)
      else setItems(items)
    }
  }, [term, filter, items, prevTerm, prevItems, filterItems])

  const renderList = useCallback(
    (items: Item[], selectedGroup: boolean) => {
      const itemsDOM = items.map((item, i) => {
        let index = compareText(item.text, term)
        const itemClassName = classnames(classes.item, {
          [classes.onFocus]: selectedGroup && currentItem === i
        })
        let content
        if (index >= 0) {
          let text = separateText(item.text, index, term)
          content = (
            <Text className={item.iconName ? classes.iconText : ''}>
              {text[0].length ? text[0] : ''}
              <Text tag="b" strong>
                {text[1].length ? text[1] : ''}
              </Text>
              {text[2].length ? text[2] : ''}
            </Text>
          )
        } else
          content = (
            <Text className={item.iconName ? classes.iconText : ''}>
              {item.text}
            </Text>
          )
        return (
          <div
            key={item.id}
            onClick={e => _onClick(item, e)}
            onMouseDown={e => _onMouseDown(item, e)}
            onMouseUp={e => _onMouseUp(item, e)}
            className={itemClassName}
            {...(testId && {
              'data-testid': `${testId}__droplist-item-${item.id}`
            })}
          >
            <Fragment>
              {item.iconName && (
                <Icon
                  iconName={item.iconName}
                  size={iconSmall}
                  className={classes.icon}
                  color={inkLighter}
                />
              )}
              {content}
              {item.textRight && (
                <span className={classes.right}>
                  <Text tag="span" low>
                    {item.textRight}
                  </Text>
                </span>
              )}
            </Fragment>
          </div>
        )
      })
      return itemsDOM
    },
    [_onClick, _onMouseDown, _onMouseUp, classes, currentItem, term, testId]
  )

  return (
    <div className={classnames(classes.block, className)} id={id} style={style}>
      {groups
        ? (_items as Group[]).map((group, i) => (
            <div key={group.id}>
              <Text small mid className={classes.group}>
                {group.text.toUpperCase()}
              </Text>
              {renderList(group.items, currentGroup === i)}
            </div>
          ))
        : renderList(_items, true)}
    </div>
  )
}

Droplist.defaultProps = {
  groups: false,
  term: '',
  filter: true
}

export default Droplist
