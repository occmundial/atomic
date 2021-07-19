import { useRef, useEffect, MutableRefObject } from 'react'

const usePrevious: <T>(value: T) => MutableRefObject<T | undefined>['current'] =
  value => {
    const ref = useRef<any>()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }

export default usePrevious
