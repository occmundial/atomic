import React, {
  MouseEvent,
  ReactNode,
  TransitionEventHandler,
  useCallback,
  useMemo
} from 'react'
import withStyles from 'react-jss'
import classnames from 'classnames'

import Card from '@/components/Card'
import Icon from '@/components/Icon'
import Text from '@/components/Text'
import Flexbox from '@/components/Flexbox'
import Button from '@/components/Button'
import colors from '@/tokens/colors'
import grid from '@/tokens/grid'
import iconSizes from '@/tokens/iconSizes'
import useWindowSize from '@/hooks/useWindowSize'
import useEventListener from '@/hooks/useEventListener'

import styles from './styles'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'

const ESCAPE = 'Escape'

interface ButtonType {
  text: string
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  href?: string
  target?: string
  disabled?: boolean
  loading?: boolean
  id?: string
  type?: 'button' | 'submit' | 'reset'
}

interface ModalImage {
  img: string
  color?: string
  alt?: string
  size?: 'contain' | 'cover' | string
  height: number
}

interface ImageTop extends ModalImage {
  position?: 'left' | 'center' | 'right'
}

interface ImageLeft extends ModalImage {
  position?: 'top' | 'center' | 'bottom'
}

export interface ModalProps {
  classes?: { [key: string]: string }
  children: ReactNode
  show?: boolean
  onClose: () => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  title?: string
  mainBtn?: ButtonType
  secBtn?: ButtonType
  imgTop?: ImageTop
  imgLeft?: ImageLeft
  onTransitionEnd?: TransitionEventHandler<HTMLDivElement>
  fullSize?: boolean
  testId?: string
}

const Modal = (props: ModalProps) => {
  const {
    classes,
    onClose,
    children,
    title,
    mainBtn,
    show,
    secBtn,
    size = 'md',
    imgTop,
    imgLeft,
    onTransitionEnd,
    fullSize,
    testId
  } = props
  const { width } = useWindowSize()
  useLockBodyScroll()
  const isMobile = useMemo(() => width < grid.xs, [width])

  const onKeyDown = useCallback(
    ({ code }: KeyboardEvent) => {
      if (onClose && code == ESCAPE) onClose()
    },
    [onClose]
  )

  useEventListener('keydown', onKeyDown)

  const avoidClose = useCallback((e: MouseEvent) => e.stopPropagation(), [])

  const closeButton = useMemo(
    () => (
      <div className={classes.closeIcon}>
        <Icon
          iconName="x"
          size={iconSizes.base}
          color={colors.grey900}
          onClick={onClose}
          {...(testId && {
            testId: `${testId}__close-icon`
          })}
        />
      </div>
    ),
    [classes, onClose, testId]
  )

  return (
    <div
      className={classnames(
        classes.overlay,
        { [classes.overlayShow]: show },
        { [classes.overlayHide]: !show },
        { [classes.noClose]: !onClose }
      )}
      onClick={onClose}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={classes.cardWrapper}>
        <div className={classes.cardBlock} onClick={avoidClose}>
          <Card
            raised
            className={classnames(
              classes.card,
              { [classes[size]]: size },
              { [classes.cardShow]: show },
              { [classes.cardHide]: !show }
            )}
          >
            <Flexbox display="flex" direction={imgLeft?.img ? 'row' : 'col'}>
              {(imgLeft?.img || imgTop?.img) && (
                <div
                  className={classnames(
                    { [classes.imgLeft]: imgLeft?.img },
                    { [classes.imgTop]: !imgLeft?.img }
                  )}
                >
                  {imgTop?.img && onClose && (
                    <div className={classes.closePosition}>{closeButton}</div>
                  )}
                </div>
              )}
              <Flexbox flex={imgLeft?.img ? '1' : null}>
                {fullSize && isMobile ? (
                  <div className={classes.top}>
                    <Flexbox className={classes.top}>
                      {!imgTop?.img && onClose && closeButton}
                    </Flexbox>
                    {title && (
                      <Text heading className={classes.title}>
                        {title}
                      </Text>
                    )}
                  </div>
                ) : (
                  <Flexbox
                    display="flex"
                    justifyContent="end"
                    alignItems="start"
                    className={classes.top}
                  >
                    {title && (
                      <Flexbox flex="1">
                        <Text heading className={classes.title}>
                          {title}
                        </Text>
                      </Flexbox>
                    )}
                    {!imgTop?.img && onClose && closeButton}
                  </Flexbox>
                )}
                <div className={classes.content}>{children}</div>
                {mainBtn && (
                  <div className={classes.bottom}>
                    {secBtn && (
                      <Button
                        type={secBtn.type}
                        theme="ghostGrey"
                        className={classes.secBtn}
                        onClick={secBtn.onClick}
                        href={secBtn.href}
                        target={secBtn.target}
                        loading={secBtn.loading}
                        disabled={secBtn.disabled}
                        id={secBtn.id}
                        {...(testId && {
                          testId: `${testId}__button-secondary`
                        })}
                      >
                        {secBtn.text}
                      </Button>
                    )}
                    <Button
                      className={classes.mainBtn}
                      type={mainBtn.type}
                      onClick={mainBtn.onClick}
                      href={mainBtn.href}
                      target={mainBtn.target}
                      loading={mainBtn.loading}
                      disabled={mainBtn.disabled}
                      id={mainBtn.id}
                      {...(testId && {
                        testId: `${testId}__button-main`
                      })}
                    >
                      {mainBtn.text}
                    </Button>
                  </div>
                )}
              </Flexbox>
            </Flexbox>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(Modal)
