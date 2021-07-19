import {
  Fragment,
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  EventHandler
} from 'react'
import PropTypes from 'prop-types'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'
import classnames from 'classnames'

import useStyles from './styles'
import Text from '../Text'
import Icon from '../Icon'
import Colors from '@/tokens/colors'
import iconSizes from '@/tokens/iconSizes'
import usePrevious from '@/hooks/usePrevious'
import { compareText, separateText } from './functions'

const arrowDown = 40
const arrowUp = 38
const enter = 13
const { inkLighter } = Colors
const { small: iconSmall } = iconSizes

export interface DroplistProps {
  items: any[]
  term?: string
  itemTextKey?: string
  itemTextRightKey?: string
  itemIdKey?: string
  groups?: boolean
  groupNameKey?: string
  groupIdKey?: string
  groupItemsKey?: string
  onClick?: (item: any) => void
  onMouseDown?: (item: any) => void
  onMouseUp?: (item: any) => void
  onEnter?: (item: any) => void
  filter?: boolean
  isOnFocus?: boolean
  id?: string
  className?: string
  style?: { [key: string]: string }
}

/**
 * The Droplist component displays a list and filters it with the prop 'term'.
 * The value of 'term' es highlighted in every item that matches.
 * The array of objects needed to display the items needs a text and an id, and can contain a text that floats on the right. If you're going to group your items by category, you first need to set an array of groups, and each group must contain an array with the items.
 */
const Droplist = ({
  items,
  filter,
  term,
  isOnFocus,
  groups,
  groupNameKey,
  groupIdKey,
  groupItemsKey,
  itemIdKey,
  itemTextKey,
  itemTextRightKey,
  onClick,
  onEnter,
  onMouseDown,
  onMouseUp,
  className,
  id,
  style
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
    (item, e) => {
      e.stopPropagation()
      resetPosition()
      if (onClick) onClick(item)
    },
    [onClick, resetPosition]
  )

  const _onMouseDown = useCallback(
    (item, e) => {
      e.stopPropagation()
      resetPosition()
      if (onMouseDown) onMouseDown(item)
    },
    [onMouseDown, resetPosition]
  )

  const _onMouseUp = useCallback(
    (item, e) => {
      e.stopPropagation()
      resetPosition()
      if (onMouseUp) onMouseUp(item)
    },
    [onMouseUp, resetPosition]
  )

  const _onEnter = useCallback(() => {
    if (currentItem > -1) {
      if (groups) {
        const selectedGroup = _items.find((group, i) => i === currentGroup)
        const selectedItem = selectedGroup[groupItemsKey].find(
          (item, i) => i === currentItem
        )
        resetPosition()
        if (onEnter) onEnter(selectedItem)
      } else {
        const selectedItem = _items.find((item, i) => i === currentItem)
        setCurrentItem(-1)
        if (onEnter) onEnter(selectedItem)
      }
    }
  }, [
    _items,
    currentGroup,
    currentItem,
    groupItemsKey,
    groups,
    onEnter,
    resetPosition
  ])

  const moveDown = useCallback(
    items => {
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
        _items[newGroup][groupItemsKey] &&
        _items[newGroup][groupItemsKey].length
      )
        setCurrentItem(0)
      else moveToNextGroup()
    }
  }, [_items, currentGroup, groupItemsKey, resetPosition])

  const moveGroupDown = useCallback(() => {
    if (currentGroup === -1) moveToNextGroup()
    else {
      const groupItems = _items[currentGroup][groupItemsKey]
      if (currentItem === groupItems.length - 1) moveToNextGroup()
      else moveDown(groupItems)
    }
  }, [
    _items,
    currentGroup,
    currentItem,
    groupItemsKey,
    moveDown,
    moveToNextGroup
  ])

  const moveUp = useCallback(
    items => {
      if (currentItem === -1) setCurrentItem(items.length - 1)
      else setCurrentItem(currentItem - 1)
    },
    [currentItem]
  )

  const moveToPreviousGroup = useCallback(() => {
    if (currentGroup === -1) {
      const newGroup = _items.length - 1
      setCurrentGroup(newGroup)
      const subItems = _items[newGroup][groupItemsKey] || []
      if (subItems.length) setCurrentItem(subItems.length - 1)
      else moveToPreviousGroup()
    } else if (currentGroup === 0) {
      resetPosition()
    } else {
      const newGroup = currentGroup - 1
      setCurrentGroup(newGroup)
      const subItems = _items[newGroup][groupItemsKey] || []
      if (subItems.length) setCurrentItem(subItems.length - 1)
      else moveToPreviousGroup()
    }
  }, [_items, currentGroup, groupItemsKey, resetPosition])

  const moveGroupUp = useCallback(() => {
    if (currentGroup === -1) moveToPreviousGroup()
    else {
      const groupItems = _items[currentGroup][groupItemsKey]
      if (currentItem === 0) moveToPreviousGroup()
      else moveUp(groupItems)
    }
  }, [
    _items,
    currentGroup,
    currentItem,
    groupItemsKey,
    moveToPreviousGroup,
    moveUp
  ])

  const onKeyDown = useCallback(
    e => {
      if (isOnFocus) {
        if (e.which === arrowUp || e.which === arrowDown) {
          e.preventDefault()
          if (groups) {
            if (e.which === arrowDown) moveGroupDown()
            else moveGroupUp()
          } else {
            if (e.which === arrowDown) moveDown(_items)
            else moveUp(_items)
          }
        }
        if (e.which === enter) _onEnter()
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
    (items, term) => {
      if (groups) {
        let newItems = cloneDeep(items)
        newItems = items.map(group => {
          group[groupItemsKey] = group[groupItemsKey].filter(
            item => compareText(item[itemTextKey], term) >= 0
          )
          return group
        })
        newItems = newItems.filter(group => group[groupItemsKey].length > 0)
        setItems(newItems)
      } else {
        const newItems = items.filter(
          item => compareText(item[itemTextKey], term) >= 0
        )
        setItems(newItems)
      }
    },
    [groupItemsKey, groups, itemTextKey]
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
    (items, selectedGroup) => {
      const itemsDOM = items.map((item, i) => {
        let index = compareText(item[itemTextKey], term)
        const itemClassName = classnames(classes.item, {
          [classes.onFocus]: selectedGroup && currentItem === i
        })
        let content
        if (index >= 0) {
          let text = separateText(item[itemTextKey], index, term)
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
              {item[itemTextKey]}
            </Text>
          )
        return (
          <div
            key={item[itemIdKey]}
            onClick={e => _onClick(item, e)}
            onMouseDown={e => _onMouseDown(item, e)}
            onMouseUp={e => _onMouseUp(item, e)}
            className={itemClassName}
          >
            <Fragment>
              {item.iconName && (
                <Icon
                  iconName={item.iconName}
                  width={iconSmall}
                  height={iconSmall}
                  display="inline-block"
                  className={classes.icon}
                  colors={[inkLighter]}
                />
              )}
              {content}
              {item[itemTextRightKey] && (
                <span className={classes.right}>
                  <Text tag="span" low>
                    {item[itemTextRightKey]}
                  </Text>
                </span>
              )}
            </Fragment>
          </div>
        )
      })
      return itemsDOM
    },
    [
      _onClick,
      _onMouseDown,
      _onMouseUp,
      classes,
      currentItem,
      itemIdKey,
      itemTextKey,
      itemTextRightKey,
      term
    ]
  )

  return (
    <div className={classnames(classes.block, className)} id={id} style={style}>
      {groups
        ? _items.map((group, i) => (
            <div key={group[groupIdKey]}>
              <Text small mid className={classes.group}>
                {group[groupNameKey].toUpperCase()}
              </Text>
              {renderList(group[groupItemsKey], currentGroup === i)}
            </div>
          ))
        : renderList(_items, true)}
    </div>
  )
}

Droplist.defaultProps = {
  groups: false,
  groupNameKey: 'text',
  groupIdKey: 'id',
  groupItemsKey: 'items',
  itemTextKey: 'text',
  itemTextRightKey: 'textRight',
  itemIdKey: 'id',
  term: '',
  filter: true
}

export default Droplist
