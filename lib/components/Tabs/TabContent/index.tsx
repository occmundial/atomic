import { ReactNode, useEffect, useState } from 'react'
import { useTabsContext } from '../context'

import useStyles from './styles'

interface TabContentProps {
  value: any
  children: ReactNode
  testId?: string
}

export default function TabContent(props: TabContentProps) {
  const [show, setShow] = useState(false)
  const { currentValue } = useTabsContext()
  const { children, value, testId } = props

  useEffect(() => {
    let timeout = setTimeout(() => setShow(currentValue === value), 150)
    return () => clearTimeout(timeout)
  }, [currentValue, value])

  const classes = useStyles()
  return (
    <div
      className={`${classes.container}${
        currentValue !== value ? ` ${classes.hide}` : ''
      }`}
      data-testid={testId}
      role="tabpanel"
      id={`tabpanel-${value}`}
      aria-labelledby={`tab-${value}`}
    >
      {currentValue === value ? (
        <div
          style={{
            opacity: show ? 1 : 0,
            transition: 'all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s'
          }}
        >
          {children}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}
