import { CSSProperties, ReactNode } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

export interface RowProps {
  children?: ReactNode
  id?: string
  className?: string
  style?: CSSProperties
}

const Row = ({ children, className, id, style }: RowProps) => {
  const classes = useStyles()
  return (
    <div className={classnames(classes.row, className)} style={style} id={id}>
      {children}
    </div>
  )
}

export default Row
