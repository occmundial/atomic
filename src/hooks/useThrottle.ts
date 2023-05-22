import { useEffect, useRef } from 'react'

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

  function throttle({
    callback,
    throttleTime,
    leading,
    trailing
  }: ThrottleFunctionProps) {
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
  }

  function flush() {
    if (!lastCallback.current) return
    lastCallback.current()
    lastCallback.current = null
    date.current = null
    cancel()
  }

  function cancel() {
    if (!timeout.current) return
    window.clearTimeout(timeout.current)
    timeout.current = null
    date.current = null
  }

  useEffect(() => cancel, [])

  throttle.flush = flush

  throttle.cancel = cancel

  throttle.date = date

  throttle.isActive = () => !!date.current

  return throttle
}
