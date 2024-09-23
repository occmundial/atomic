import { AnimationEventHandler, ReactNode, TransitionEventHandler } from 'react'
import useStyles from './styles'
import classNames from 'classnames'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'

interface DrawerProps {
  header?: ReactNode
  children?: ReactNode
  testId?: string
  show?: boolean
  onAnimationEnd?: AnimationEventHandler<HTMLDivElement>
}

export default function Drawer({
  header,
  children,
  testId,
  show,
  onAnimationEnd
}: DrawerProps) {
  const classes = useStyles()
  useLockBodyScroll()
  return (
    <div
      className={classNames(classes.container, {
        [classes.show]: show,
        [classes.hide]: !show
      })}
      onAnimationEnd={e => {
        if (onAnimationEnd) onAnimationEnd(e)
      }}
      data-testid={testId}
    >
      {header}
      <div className={classes.content}>{children}</div>
    </div>
  )
}
