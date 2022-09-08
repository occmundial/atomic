import React, {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  ReactElement
} from 'react'
import classnames from 'classnames'

import Icon from '@/components/Icon'
import usePrevious from '@/hooks/usePrevious'
import colors from '@/tokens/colors'

import Page from './Page'
import Break from './Break'
import useStyles from './styles'
import iconSizes from '@/tokens/iconSizes'

interface PagerProps {
  pageCount?: number
  pageRangeDisplayed?: number
  marginPagesDisplayed?: number
  previousLabel?: string
  nextLabel?: string
  onPageChange?: (selected: number) => void
  initialPage?: number
  forcePage?: number
  disableInitialCallback?: boolean
  hideNumbers?: boolean
  breakLabel?: string
  className?: string
}

const Pager = ({
  initialPage,
  forcePage,
  disableInitialCallback,
  pageCount,
  pageRangeDisplayed,
  marginPagesDisplayed,
  breakLabel,
  previousLabel,
  nextLabel,
  hideNumbers,
  className,
  onPageChange
}: PagerProps) => {
  const classes = useStyles()
  const [selected, setSelected] = useState(initialPage || forcePage || 1)
  const prevForcePage = usePrevious(forcePage)

  const callCallback = useCallback(
    (selectedItem: number) => {
      if (onPageChange) onPageChange(selectedItem)
    },
    [onPageChange]
  )

  useEffect(() => {
    if (typeof initialPage !== 'undefined' && !disableInitialCallback) {
      callCallback(initialPage)
    }
  }, [callCallback, disableInitialCallback, initialPage])

  useEffect(() => {
    if (typeof forcePage !== 'undefined' && prevForcePage !== forcePage) {
      setSelected(forcePage)
    }
  }, [forcePage, prevForcePage])

  const handlePageSelected = useCallback(
    (newSelected, e: MouseEvent) => {
      if (selected === newSelected) return
      setSelected(newSelected)
      callCallback(newSelected)
    },
    [callCallback, selected]
  )

  const handlePrevPage = useCallback(
    (e: MouseEvent) => {
      if (selected > 1) handlePageSelected(selected - 1, e)
    },
    [handlePageSelected, selected]
  )

  const handleNextPage = useCallback(
    (e: MouseEvent) => {
      if (selected < pageCount) handlePageSelected(selected + 1, e)
    },
    [handlePageSelected, selected, pageCount]
  )

  const getPageElement = useCallback(
    (index: number) => (
      <Page
        key={index}
        onClick={event => handlePageSelected(index, event)}
        selected={selected === index}
        page={index}
      />
    ),
    [handlePageSelected, selected]
  )

  const pagination = useCallback(() => {
    const items = []
    if (pageCount <= pageRangeDisplayed) {
      for (let index = 1; index <= pageCount; index++) {
        items.push(getPageElement(index))
      }
    } else {
      let leftSide = pageRangeDisplayed / 2
      let rightSide = pageRangeDisplayed - leftSide

      if (selected > pageCount - pageRangeDisplayed / 2) {
        rightSide = pageCount - selected
        leftSide = pageRangeDisplayed - rightSide
      } else if (selected < pageRangeDisplayed / 2) {
        leftSide = selected
        rightSide = pageRangeDisplayed - leftSide
      }

      let index: number
      let page: number
      let breakView: ReactElement

      for (index = 1; index <= pageCount; index++) {
        page = index

        if (page <= marginPagesDisplayed) {
          items.push(getPageElement(index))
          continue
        }

        if (page > pageCount - marginPagesDisplayed) {
          items.push(getPageElement(index))
          continue
        }

        if (index >= selected - leftSide && index <= selected + rightSide) {
          items.push(getPageElement(index))
          continue
        }

        if (
          breakLabel &&
          items[items.length - 1] !== breakView &&
          marginPagesDisplayed > 0
        ) {
          breakView = <Break key={index} label={breakLabel} />
          items.push(breakView)
        }
      }
    }
    return items
  }, [
    breakLabel,
    getPageElement,
    marginPagesDisplayed,
    pageCount,
    pageRangeDisplayed,
    selected
  ])

  return (
    <ul className={classnames(classes.pager, className)}>
      <li
        className={classnames(classes.btn, classes.prev, {
          [classes.disabled]: selected === 1
        })}
        tabIndex={0}
        onClick={handlePrevPage}
      >
        <Icon
          iconName="arrow-left"
          color={colors.prim}
          size={iconSizes.tiny}
          className={classes.icon}
        />{' '}
        {previousLabel}
      </li>
      {!hideNumbers && pagination()}
      <li
        className={classnames(classes.btn, classes.next, {
          [classes.disabled]: selected === pageCount
        })}
        tabIndex={0}
        onClick={handleNextPage}
      >
        {nextLabel}{' '}
        <Icon
          iconName="arrow-right"
          color={colors.prim}
          size={iconSizes.tiny}
          className={classes.icon}
        />
      </li>
    </ul>
  )
}

Pager.defaultProps = {
  pageCount: 10,
  pageRangeDisplayed: 2,
  marginPagesDisplayed: 3,
  previousLabel: 'Previous',
  nextLabel: 'Next',
  breakLabel: '...'
}

export default Pager
