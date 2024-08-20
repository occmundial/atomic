import { KeyboardEvent, ReactNode } from 'react'
import useStyles from './styles'

export interface TabListProps {
  children: ReactNode
  tabRef: any
  indexValueMap: any
}

function getNextFocusElement(parentElement: Element, activeElement: Element) {
  if (activeElement?.nextElementSibling)
    return activeElement.nextElementSibling as HTMLElement
  return parentElement.firstChild as HTMLElement
}

function getPreviousFocusElement(
  parentElement: Element,
  activeElement: Element
) {
  if (activeElement?.previousElementSibling)
    return activeElement.previousElementSibling as HTMLElement
  return parentElement.lastChild as HTMLElement
}

export default function TabList({ children, tabRef }) {
  const classes = useStyles()

  const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case 'ArrowRight':
        {
          e.preventDefault()
          const parentElement = tabRef?.current
          if (parentElement.childElementCount > 1) {
            const { activeElement } = document
            let nextFocusElement = getNextFocusElement(
              parentElement,
              activeElement
            )

            while (nextFocusElement) {
              if (nextFocusElement.getAttribute('disabled') === '')
                nextFocusElement = getNextFocusElement(
                  parentElement,
                  nextFocusElement
                )
              else {
                nextFocusElement.focus()

                let left =
                  nextFocusElement.offsetLeft > 0
                    ? nextFocusElement.offsetLeft -
                      tabRef?.current.parentElement.clientWidth / 2 +
                      nextFocusElement.clientWidth / 2
                    : 0

                tabRef.current.parentElement.scrollTo({
                  behavior: 'smooth',
                  left: left
                })

                return
              }
            }
          }
        }
        break
      case 'ArrowLeft':
        {
          e.preventDefault()
          const parentElement = tabRef?.current
          if (parentElement.childElementCount > 1) {
            const { activeElement } = document
            let nextFocusElement = getPreviousFocusElement(
              parentElement,
              activeElement
            )

            while (nextFocusElement) {
              if (nextFocusElement.getAttribute('disabled') === '')
                nextFocusElement = getPreviousFocusElement(
                  parentElement,
                  nextFocusElement
                )
              else {
                nextFocusElement.focus()
                let left =
                  nextFocusElement.offsetLeft > 0
                    ? nextFocusElement.offsetLeft -
                      tabRef?.current.parentElement.clientWidth / 2 +
                      nextFocusElement.clientWidth / 2
                    : 0

                tabRef.current.parentElement.scrollTo({
                  behavior: 'smooth',
                  left: left
                })
                return
              }
            }
          }
        }
        break
      default:
        break
    }
  }

  return (
    <div
      className={classes.container}
      ref={tabRef}
      onKeyDown={onKeyDownHandler}
    >
      {children}
    </div>
  )
}
