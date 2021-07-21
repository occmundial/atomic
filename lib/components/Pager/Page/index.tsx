import React, { EventHandler, MouseEvent } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

interface PageProps {
  onClick: EventHandler<MouseEvent>
  selected: boolean
  page: number
}

const Page = ({ onClick, selected, page }: PageProps) => {
  const classes = useStyles()
  return (
    <li
      className={classnames(classes.li, { [classes.active]: selected })}
      tabIndex={0}
      onClick={onClick}
    >
      {page}
    </li>
  )
}

export default Page
