import {
  useState,
  useEffect,
  useCallback,
  isValidElement,
  cloneElement,
  ReactElement,
  useMemo
} from 'react'
import ReactDOM from 'react-dom'

import usePrevious from '@/hooks/usePrevious'

interface Portal {
  show?: boolean
  container?: HTMLElement | null
  children: ReactElement
}

const Portal = ({ show, container, children }: Portal) => {
  const [mount, setMount] = useState(false)
  const showPrev = usePrevious(show)

  useEffect(() => {
    if (show && !showPrev) setMount(true)
  }, [, show, showPrev])

  const onTransitionEnd = useCallback(() => setMount(false), [])
  const onAnimationEnd = useCallback(() => setMount(false), [])

  const childrenWithProps = useMemo(() => {
    if (isValidElement(children)) {
      return cloneElement(children as ReactElement, {
        onTransitionEnd: !show && mount ? onTransitionEnd : null,
        onAnimationEnd: !show && mount ? onAnimationEnd : null,
        show
      })
    }
    return children
  }, [children, mount, onTransitionEnd, onAnimationEnd, show])

  return mount
    ? ReactDOM.createPortal(childrenWithProps, container || document.body)
    : null
}
export default Portal
