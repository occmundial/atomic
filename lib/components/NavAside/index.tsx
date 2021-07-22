import React, {
  MouseEvent,
  ReactNode,
  TransitionEventHandler,
  useCallback
} from 'react'
import classnames from 'classnames'

import Card from '@/components/Card'
import Flexbox from '@/components/Flexbox'
import Icon from '@/components/Icon'
import colors from '@/tokens/colors'
import useEventListener from '@/hooks/useEventListener'

import useStyles from './styles'

interface NavAsideProps {
  top?: ReactNode
  children: ReactNode
  onClose: () => void
  show?: boolean
  onTransitionEnd?: TransitionEventHandler<HTMLDivElement>
  right?: boolean
}

const NavAside = ({
  top,
  children,
  onClose,
  show,
  onTransitionEnd,
  right
}: NavAsideProps) => {
  const classes = useStyles()

  const onKeyDown = useCallback(
    ({ which }) => {
      if (which == 27) onClose()
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
            <div className={classes.closeIcon}>
              <Icon
                iconName="close"
                width={24}
                height={24}
                colors={[colors.grey900]}
                onClick={onClose}
              />
            </div>
          </Flexbox>
          <div className={classes.content}>{children}</div>
        </Card>
      </div>
    </div>
  )
}

export default NavAside
