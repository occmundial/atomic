import classNames from 'classnames'
import useStyles from './styles'
import { CSSProperties } from 'react'

type MenuDividerProps = {
  className: string
  styles: CSSProperties
  disablePadding: boolean
}

const MenuDivider = ({
  className,
  disablePadding,
  styles
}: MenuDividerProps) => {
  const classes = useStyles()

  return (
    <hr
      className={classNames(
        classes.root,
        className,
        !disablePadding && classes.paddingDefault
      )}
      style={styles}
    />
  )
}

export default MenuDivider
