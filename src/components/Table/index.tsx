import { ReactNode } from 'react'

import useStyles from './styles'
import classNames from 'classnames'

interface TableProps {
  children: ReactNode
  fullWidth: boolean
}

export default function Table({ children, fullWidth }: TableProps) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <table
        className={classNames(classes.table, fullWidth && classes.fullWidth)}
      >
        {children}
      </table>
    </div>
  )
}
