import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import ReactDOM from 'react-dom'

import Toast, { ToastType } from './Toast'
import { toastLauncher, Timer } from './helper'
import useStyles from './styles'

const timings = {
  normal: 5000,
  longer: 8000
} as const

interface ToasterProps {
  container?: HTMLElement
}

const Toaster = ({ container }: ToasterProps) => {
  const classes = useStyles()
  const [toast, setToast] = useState<ToastType | null>()
  const [toastId, setToastId] = useState<number>()
  const timer = useRef(null)

  const resetTimer = useCallback(() => {
    if (timer && timer.current) timer.current.cancel()
  }, [timer])

  const onClose = useCallback(
    (toast: ToastType) => {
      const newToast = { ...toast }
      resetTimer()
      newToast.closing = true
      setToast(newToast)
      timer.current = new Timer(() => {
        toastLauncher.removeToast()
        setToast(null)
      }, 300)
    },
    [resetTimer, timer]
  )

  const addTimer = useCallback(
    (toast: ToastType) => {
      const defaultTime = timings.normal
      const time = toast.timer
        ? timings[toast.timer] || defaultTime
        : defaultTime
      timer.current = new Timer(() => {
        onClose(toast)
      }, time)
    },
    [timer, onClose]
  )

  const onAdd = useCallback(
    (toast: ToastType, toastId: number) => {
      const newToast = { ...toast }
      resetTimer()
      newToast.closing = false
      setToast(newToast)
      setToastId(toastId)
    },
    [resetTimer]
  )

  const pauseTimer = useCallback(() => timer.current.pause(), [timer])

  const resumeTimer = useCallback(() => timer.current.resume(), [timer])

  useEffect(() => {
    const listener = { add: onAdd, close: onClose }
    toastLauncher.addListener(listener)

    return () => {
      toastLauncher.removeListener(listener)
    }
  }, [onAdd, onClose])

  useEffect(() => {
    if (toast && !toast.closing) addTimer(toast)
  }, [toast, addTimer])

  const ToasterComponent = useMemo(
    () => (
      <div className={classes.container}>
        {!!toast && (
          <Toast
            key={toastId}
            description={toast.description}
            title={toast.title}
            theme={toast.type}
            action={toast.action}
            hasIcon={toast.hasIcon}
            closing={toast.closing}
            onClose={() => onClose(toast)}
            pauseTimer={pauseTimer}
            resumeTimer={resumeTimer}
          />
        )}
      </div>
    ),
    [classes, toast, toastId, onClose, pauseTimer, resumeTimer]
  )

  return (
    <>
      {container
        ? ReactDOM.createPortal(ToasterComponent, container)
        : ToasterComponent}
    </>
  )
}

export default Toaster
