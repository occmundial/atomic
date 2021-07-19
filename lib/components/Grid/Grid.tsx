import { CSSProperties, EventHandler, ReactNode, SyntheticEvent } from 'react'
import classnames from 'classnames'

import RowItem from './Row'
import ColItem from './Col'

import useStyles from './styles'

interface GridProps {
  children: ReactNode
  fluid?: boolean
  onClick?: EventHandler<SyntheticEvent>
  id?: string
  className?: string
  style?: CSSProperties
}

const Grid = ({
  children,
  fluid,
  onClick,
  className,
  id,
  style
}: GridProps) => {
  const classes = useStyles()
  return (
    <div
      className={classnames(
        { [classes.conFluid]: fluid },
        { [classes.con]: !fluid },
        className
      )}
      style={style}
      id={id}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

Grid.Row = RowItem
Grid.Col = ColItem

export default Grid
