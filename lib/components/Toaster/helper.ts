import isEmpty from 'lodash/isEmpty'

import { ToastType } from './Toast'

interface ToastListener {
  add: (toast: ToastType, toastId: number) => void
  close: (toast: ToastType) => void
}
export class ToastLauncher {
  toastId: number
  toast: ToastType
  private listeners: ToastListener[]

  constructor() {
    this.toastId = 0
    this.toast = null
    this.listeners = []
  }

  addListener(listener: ToastListener) {
    this.listeners.push(listener)
  }

  removeListener(listener: ToastListener) {
    const newListeners: ToastListener[] = this.listeners.filter(
      l => l !== listener
    )
    this.listeners = newListeners
  }

  private addToast(toast: ToastType) {
    if (this.listeners) {
      this.toastId++
      this.toast = toast
      this.listeners.forEach(listener => {
        listener.add(this.toast, this.toastId)
      })
    }
  }

  closeToast() {
    if (this.listeners && !isEmpty(this.toast)) {
      this.listeners.forEach(listener => {
        listener.close(this.toast)
      })
    }
  }

  removeToast() {
    this.toast = null
  }

  success(toast: ToastType) {
    toast.type = 'success'
    this.addToast(toast)
  }

  error(toast: ToastType) {
    toast.type = 'error'
    this.addToast(toast)
  }

  warning(toast: ToastType) {
    toast.type = 'warning'
    this.addToast(toast)
  }

  info(toast: ToastType) {
    toast.type = 'info'
    this.addToast(toast)
  }
}

export const toastLauncher = new ToastLauncher()

export class Timer {
  private timerId: number
  private start: Date
  private remaining: number
  private callback: () => void

  constructor(callback: () => void, delay: number) {
    this.remaining = delay
    this.callback = callback
    this.resume()
  }

  cancel() {
    window.clearTimeout(this.timerId)
  }

  pause() {
    window.clearTimeout(this.timerId)
    this.remaining -= new Date().getTime() - this.start.getTime()
  }

  resume() {
    this.start = new Date()
    window.clearTimeout(this.timerId)
    this.timerId = window.setTimeout(this.callback, this.remaining)
  }
}
