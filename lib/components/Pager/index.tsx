import React, { useCallback, useEffect } from 'react'
import classnames from 'classnames'

import Page from './Page'
import useStyles from './styles'
import useIcon from '@/hooks/useIcon'
import Button from '../Button'

type PaginatorElement = {
  key: string
  type: 'page' | 'break'
  selected?: boolean
  disabled?: boolean
}

interface PagerProps {
  currentPage: number
  pageCount?: number
  centerPages?: number
  marginPages?: number
  previousLabel?: string
  nextLabel?: string
  onPageChange?: (selected: number) => void
  hideNumbers?: boolean
  breakSymbol?: string
  disabled?: boolean
  className?: string
  testId?: string
}

const Pager = ({
  currentPage,
  pageCount = 10,
  centerPages = 3,
  marginPages = 2,
  breakSymbol = '...',
  previousLabel = 'Previous',
  nextLabel = 'Next',
  hideNumbers,
  disabled,
  className,
  onPageChange,
  testId
}: PagerProps) => {
  const classes = useStyles()

  const getIcon = useIcon()

  const handlePageSelected = useCallback(
    (newPage: number) => {
      if (currentPage === newPage) return
      if (onPageChange) onPageChange(newPage)
    },
    [currentPage, onPageChange]
  )

  useEffect(() => {
    if (currentPage > pageCount || currentPage < 1) {
      handlePageSelected(1)
    }
  }, [currentPage, pageCount, handlePageSelected])

  const handlePrevPage = () => {
    if (currentPage > 1) handlePageSelected(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < pageCount) handlePageSelected(currentPage + 1)
  }

  const addPage = (page: number) => {
    const pageData: PaginatorElement = {
      key: page.toString(),
      type: 'page',
      selected: currentPage === page
    }
    return pageData
  }

  const getStartAndEndPages = () => {
    let startPage = Math.max(
      currentPage - Math.floor(centerPages / 2),
      marginPages + 1
    )
    let endPage = Math.min(startPage + centerPages - 1, pageCount - marginPages)

    if (endPage === pageCount - marginPages) {
      startPage = Math.max(endPage - centerPages + 1, marginPages + 1)
    }

    return { startPage, endPage }
  }

  function getPagination(): PaginatorElement[] {
    const elements: PaginatorElement[] = []

    if (pageCount <= centerPages + marginPages * 2) {
      for (let i = 1; i <= pageCount; i++) {
        elements.push(addPage(i))
      }
    } else {
      for (let i = 1; i <= marginPages; i++) {
        elements.push(addPage(i))
      }

      const { startPage, endPage } = getStartAndEndPages()

      if (currentPage > marginPages + 1 && startPage > marginPages + 1) {
        elements.push({ key: 'left-break', type: 'break' })
      }

      for (let i = startPage; i <= endPage; i++) {
        elements.push(addPage(i))
      }

      if (currentPage < pageCount - marginPages - 1) {
        elements.push({ key: 'right-break', type: 'break' })
      }

      for (let i = pageCount - marginPages + 1; i <= pageCount; i++) {
        elements.push(addPage(i))
      }
    }

    return elements
  }

  return (
    <div className={classnames(classes.pager, className)} data-testid={testId}>
      <Button
        className={classes.prev}
        disabled={currentPage === 1 || disabled}
        theme="secondary"
        onClick={handlePrevPage}
        iconLeft="arrow-left"
        size={!previousLabel ? 'lg' : 'sm'}
        testId={testId ? `${testId}-prev-button` : undefined}
      >
        {previousLabel}
      </Button>
      {!hideNumbers &&
        getPagination().map(({ key, type, selected }) => {
          if (type === 'page') {
            return (
              <Page
                key={key}
                onClick={() => handlePageSelected(Number(key))}
                selected={selected}
                page={Number(key)}
                disabled={disabled}
                testId={testId ? `${testId}-page-${key}` : undefined}
              />
            )
          }
          return <Page key={key} page={breakSymbol} disabled={disabled} />
        })}
      <Button
        className={classes.next}
        disabled={currentPage === pageCount || disabled}
        theme="secondary"
        onClick={handleNextPage}
        iconRight="arrow-right"
        size={!nextLabel ? 'lg' : 'sm'}
        testId={testId ? `${testId}-next-button` : undefined}
      >
        {nextLabel}
      </Button>
    </div>
  )
}

export default Pager
