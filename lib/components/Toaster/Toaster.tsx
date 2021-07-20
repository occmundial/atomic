import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Toast from './Toast'
import { toaster, Timer } from './functions'
import useStyles from './styles'
import { ToastType } from './Toast/Toast'

const timings = {
  normal: 5000,
  longer: 8000
}

interface ToasterProps {
  container?: HTMLElement
}

const Toaster = ({ container }: ToasterProps) => {
  const classes = useStyles()
  const [toast, setToast] = useState<ToastType | null>()
  const [toastId, setToastId] = useState()
  const timer = useRef(null)

  const resetTimer = useCallback(() => {
    if (timer && timer.current) timer.current.cancel()
  }, [timer])

  const onClose = useCallback(
    toast => {
      const newToast = { ...toast }
      resetTimer()
      newToast.closing = true
      setToast(newToast)
      timer.current = new Timer(() => {
        toaster.removeToast()
        setToast(null)
      }, 300)
    },
    [resetTimer, timer]
  )

  const addTimer = useCallback(
    toast => {
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
    (toast, toastId) => {
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
    toaster.registerAddListener(onAdd)
    toaster.registerCloseListener(onClose)

    return () => {
      toaster.registerAddListener(null)
      toaster.registerCloseListener(null)
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
