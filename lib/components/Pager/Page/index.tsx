import React, { EventHandler, MouseEvent } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

interface PageProps {
  onClick?: EventHandler<MouseEvent>
  selected?: boolean
  page: number | string
  disabled?: boolean
}

const Page = ({ onClick, selected, page, disabled }: PageProps) => {
  const classes = useStyles()
  return (
    <button
      className={classnames(classes.page, {
        [classes.active]: selected,
        [classes.disabled]: disabled,
        [classes.static]: !onClick
      })}
      disabled={disabled}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
    >
      {page}
    </button>
  )
}

export default Page
