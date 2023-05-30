import { useCallback, useEffect, useMemo, useRef } from 'react'

interface ThrottleFunctionProps {
  callback?: () => void
  throttleTime?: number
  leading?: boolean
  trailing?: boolean
}

export function useThrottle(defaults: ThrottleFunctionProps = {}) {
  const timeout = useRef<number | undefined>(null)
  const lastCallback = useRef<() => void | undefined>(null)
  const date = useRef<Date>(null)

  const cancel = useCallback(() => {
    if (!timeout.current) return
    window.clearTimeout(timeout.current)
    timeout.current = null
    date.current = null
  }, [])

  const flush = useCallback(() => {
    if (!lastCallback.current) return
    lastCallback.current()
    lastCallback.current = null
    date.current = null
    cancel()
  }, [cancel])

  const throttle = useCallback(
    ({ callback, throttleTime, leading, trailing }: ThrottleFunctionProps) => {
      if (timeout.current) {
        return (lastCallback.current = callback ?? defaults.callback ?? null)
      } else {
        date.current = new Date()
        if (defaults?.leading ?? leading ?? true) {
          callback()
        } else {
          lastCallback.current = callback
        }
      }
      timeout.current = window.setTimeout(() => {
        defaults?.trailing ?? trailing ? flush() : cancel()
      }, throttleTime ?? defaults.throttleTime ?? 1000)
    },
    [
      cancel,
      defaults.callback,
      defaults?.leading,
      defaults.throttleTime,
      defaults?.trailing,
      flush
    ]
  )

  useEffect(() => cancel, [cancel])

  return {
    throttle,
    flush,
    cancel,
    isActive: () => !!date.current,
    date
  }
}
