import { ReactNode } from 'react'

import useStyles from './styles'

interface TableProps {
  children: ReactNode
}

export default function Table({ children }: TableProps) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <table className={classes.table}>{children}</table>
    </div>
  )
}
