import { useEffect, useMemo, useState } from 'react'
import { useThrottle } from '@/hooks/useThrottle'

type OpenTooltipState = [boolean, (show: boolean) => void]

export function useOpenTooltipState(
  openExternal: boolean,
  setOpenExternal: (show: boolean) => void,
  closeDelay: number
): OpenTooltipState {
  const delay = useThrottle({ trailing: true, leading: false })

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

  const setOpenSourceDelay = useMemo(
    () => (show: boolean) =>
      delay({
        throttleTime: closeDelay,
        callback: () => setOpenSource(show)
      }),
    [closeDelay, setOpenSource, delay]
  )

  function setOpen(open: boolean) {
    if (open) {
      delay.cancel()
      setOpenSource(true)
    } else {
      closeDelay > 0 ? setOpenSourceDelay(false) : setOpenSource(false)
    }
  }

  useEffect(() => {
    if (openExternal === false || closeDelay <= 0) return
    delay.cancel()
    setOpenSourceDelay(false)
  }, [openExternal, setOpenSourceDelay, setOpenSource, delay, closeDelay])

  return [open, setOpen]
}
