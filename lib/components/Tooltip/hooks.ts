import { useCallback, useEffect, useMemo, useState } from 'react'
import { useThrottle } from '@/hooks/useThrottle'

type OpenTooltipState = [boolean, (show: boolean) => void]

export function useOpenTooltipState(
  openExternal: boolean,
  setOpenExternal: (show: boolean) => void,
  closeDelay: number
): OpenTooltipState {
  const { throttle, cancel } = useThrottle({ trailing: true, leading: false })

  const [openInternal, setOpenInternal] = useState(false)

  const open = useMemo(
    () => openExternal ?? openInternal,
    [openExternal, openInternal]
  )

  const setOpenSource = useMemo(
    () =>
      openExternal !== undefined
        ? setOpenExternal ?? (() => {})
        : setOpenInternal,
    [openExternal, setOpenExternal, setOpenInternal]
  )

  const setOpenSourceDelay = useCallback(
    (show: boolean) => {
      throttle({
        throttleTime: closeDelay,
        callback: () => setOpenSource(show)
      })
    },
    [closeDelay, setOpenSource, throttle]
  )

  function setOpen(openValue: boolean) {
    if (openValue) {
      if (open) cancel()
      setOpenSource(true)
    } else {
      closeDelay > 0 ? setOpenSourceDelay(false) : setOpenSource(false)
    }
  }

  useEffect(() => {
    if (closeDelay <= 0) return
    if (openExternal === false) {
      cancel()
    } else {
      setOpenSourceDelay(false)
    }
  }, [openExternal, setOpenSourceDelay, setOpenSource, closeDelay, cancel])

  return [open, setOpen]
}
