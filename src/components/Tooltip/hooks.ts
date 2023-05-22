import { useEffect, useMemo, useState } from 'react'
import { useThrottle } from '@/src/hooks/useThrottle'

type OpenTooltipState = [boolean, (show: boolean) => void]

export function useOpenTooltipState(
  openManual: boolean,
  setOpenManual: (show: boolean) => void,
  closeDelay: number
): OpenTooltipState {
  const delay = useThrottle({ trailing: true, leading: false })

  const [openAuto, setInnerShow] = useState(false)

  const open = useMemo(() => openManual ?? openAuto, [openManual, openAuto])

  const setOpenSource = useMemo(
    () =>
      openManual !== undefined ? setOpenManual ?? (() => {}) : setInnerShow,
    [openManual, setOpenManual, setInnerShow]
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
    if (openManual === false || closeDelay <= 0) return
    delay.cancel()
    setOpenSourceDelay(false)
  }, [openManual, setOpenSourceDelay, setOpenSource, delay, closeDelay])

  return [open, setOpen]
}
