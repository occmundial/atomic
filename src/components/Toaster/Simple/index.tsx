/* Simple toast */
import React, { Fragment } from 'react'
import Button from '@/components/Button'
import { toastLauncher } from '@/components/Toaster/helper'

const SimpleToaster = ({
  btnText = '',
  theme,
  description,
  closeIcon,
  action
}) => {
  const toast = {
    title: 'Simple toast',
    description,
    closeIcon,
    action: action
      ? {
          label: 'Label',
          onClick: () => console.log('Action clicked')
        }
      : null
  }

  const onClick = () => {
    switch (theme) {
      case 'success':
        toastLauncher.success(toast)
        break
      case 'info':
        toastLauncher.info(toast)
        break
      case 'warning':
        toastLauncher.warning(toast)
        break
      case 'error':
        toastLauncher.error(toast)
        break
      case 'promote':
        toastLauncher.promote(toast)
        break
    }
  }

  return (
    <Fragment>
      <Button onClick={onClick}>{btnText || 'Launch toast'}</Button>
    </Fragment>
  )
}

export default SimpleToaster
