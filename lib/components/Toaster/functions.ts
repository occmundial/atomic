import isEmpty from 'lodash/isEmpty'
import { ToastType } from './Toast/Toast'

export const toaster = {
  toastId: 0,
  toast: null,
  success: function (value: ToastType) {
    value.type = 'success'
    this.addToast(value)
  },
  error: function (value: ToastType) {
    value.type = 'error'
    this.addToast(value)
  },
  info: function (value: ToastType) {
    value.type = 'info'
    this.addToast(value)
  },
  warning: function (value: ToastType) {
    value.type = 'warning'
    this.addToast(value)
  },
  close: function () {
    if (this.closeListener && !isEmpty(this.toast))
      this.closeListener(this.toast)
  },
  addToast: function (value: ToastType) {
    if (this.addListener) {
      this.toastId++
      this.toast = value
      this.addListener(this.toast, this.toastId)
    }
  },
  removeToast: function () {
    this.toast = null
  },
  addListener: null,
  registerAddListener: function (listener: CallableFunction) {
    this.addListener = listener
  },
  closeListener: null,
  registerCloseListener: function (listener: CallableFunction) {
    this.closeListener = listener
  }
}

export function Timer(callback: CallableFunction, delay: number) {
  let timerId: number
  let start: Date
  let remaining: number = delay

  this.cancel = function () {
    clearTimeout(timerId)
  }

  this.pause = function () {
    window.clearTimeout(timerId)
    remaining -= new Date().getTime() - start.getTime()
  }

  this.resume = function () {
    start = new Date()
    window.clearTimeout(timerId)
    timerId = window.setTimeout(callback, remaining)
  }

  this.resume()
}
