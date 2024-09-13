import { ReactNode } from 'react'
import useStyles from './styles'

interface DropdownProps {
  children: ReactNode
  open: boolean
  id?: string
  className?: string
  placement?: 'left' | 'right'
}

export default function Dropdown({
  children,
  open,
  id,
  className,
  placement = 'left'
}: DropdownProps) {
  const classes = useStyles()

  return (
    <div
      className={`${classes.contentWrapper} ${classes[placement]}${
        open ? ` ${classes.showContentWrapper}` : ''
      }${className ? ` ${className}` : ''}`}
    >
      <div
        id={id}
        className={`${classes.content}${open ? ` ${classes.showContent}` : ''}`}
      >
        {children}
      </div>
    </div>
  )
}
