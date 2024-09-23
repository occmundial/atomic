import React, {
  MouseEvent,
  ReactNode,
  TransitionEventHandler,
  useCallback
} from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'

import Card from '@/components/Card'
import Flexbox from '@/components/Flexbox'
import Button from '@/components/Button'
import useEventListener from '@/hooks/useEventListener'

import styles from './styles'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'

const ESCAPE = 'Escape'

interface NavAsideProps {
  classes: { [key: string]: string }
  top?: ReactNode
  children: ReactNode
  onClose: () => void
  show?: boolean
  onTransitionEnd?: TransitionEventHandler<HTMLDivElement>
  right?: boolean
}

const NavAside = ({
  classes,
  top,
  children,
  onClose,
  show,
  onTransitionEnd,
  right
}: NavAsideProps) => {
  useLockBodyScroll()
  const onKeyDown = useCallback(
    ({ code }: KeyboardEvent) => {
      if (code == ESCAPE) onClose()
    },
    [onClose]
  )

  useEventListener('keydown', onKeyDown)

  const avoidClose = useCallback((e: MouseEvent) => {
    e.stopPropagation()
  }, [])

  return (
    <div
      className={classnames(
        classes.overlay,
        { [classes.overlayShow]: show },
        { [classes.overlayHide]: !show }
      )}
      onClick={onClose}
      onTransitionEnd={onTransitionEnd}
    >
      <div
        className={classnames(
          classes.block,
          { [classes.showLeft]: !right && show },
          { [classes.showRight]: right && show },
          { [classes.hideLeft]: !right && !show },
          { [classes.hideRight]: right && !show }
        )}
        onClick={avoidClose}
      >
        <Card raised className={classes.card}>
          <Flexbox
            display="flex"
            justifyContent="end"
            alignItems="start"
            className={classes.top}
          >
            {top && (
              <Flexbox flex="1" className={classes.topContent}>
                {top}
              </Flexbox>
            )}
            <Button theme="ghost" iconLeft="x" size="md" onClick={onClose} />
          </Flexbox>
          <div className={classes.content}>{children}</div>
        </Card>
      </div>
    </div>
  )
}

export default withStyles(styles)(NavAside)
