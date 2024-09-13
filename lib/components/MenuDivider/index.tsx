import classNames from 'classnames'
import useStyles from './styles'
import { CSSProperties } from 'react'

type MenuDividerProps = {
  className: string
  style: CSSProperties
}

const MenuDivider = ({ className, style }: MenuDividerProps) => {
  const classes = useStyles()

  return <hr className={classNames(classes.root, className)} style={style} />
}

export default MenuDivider
