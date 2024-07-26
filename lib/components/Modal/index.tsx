import React, {
  MouseEvent,
  ReactNode,
  TransitionEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Flexbox from '@/components/Flexbox'
import Button from '@/components/Button'
import useEventListener from '@/hooks/useEventListener'

import useStyles from './styles'
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
  onClose?: () => void
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
  useLockBodyScroll()
  const classes = useStyles(props)
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentScroll, setContentScroll] = React.useState(0)
  const [headerBorder, setHeaderBorder] = React.useState(false)
  const [footerBorder, setFooterBorder] = React.useState(false)

  useEffect(() => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current
      if (scrollHeight > clientHeight) {
        if (scrollTop > 0) {
          setHeaderBorder(true)
        } else {
          setHeaderBorder(false)
        }
        if (scrollTop + clientHeight + 1 < scrollHeight) {
          setFooterBorder(true)
        } else {
          setFooterBorder(false)
        }
      } else {
        setHeaderBorder(false)
        setFooterBorder(false)
      }
    }
  }, [contentScroll])

  const onKeyDown = useCallback(
    ({ code }: KeyboardEvent) => {
      if (onClose && code === ESCAPE) onClose()
    },
    [onClose]
  )

  useEventListener('keydown', onKeyDown)

  const avoidClose = useCallback((e: MouseEvent) => e.stopPropagation(), [])

  const closeButton = useMemo(
    () => (
      <Button
        theme="ghostGrey"
        onClick={onClose}
        iconLeft="x"
        size="md"
        {...(testId && {
          testId: `${testId}__close-icon`
        })}
      />
    ),
    [onClose, testId]
  )

  return (
    <div
      data-testid={testId}
      className={classnames(
        classes.overlay,
        { [classes.show]: show },
        { [classes.hide]: !show },
        { [classes.noClose]: !onClose }
      )}
      onClick={onClose}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={classes.cardWrapper}>
        <div className={classes.cardBlock} onClick={avoidClose}>
          <div
            className={classnames(
              classes.card,
              { [classes[size]]: size },
              { [classes.fullSize]: fullSize }
            )}
          >
            <div className={classes.split}>
              {imgLeft?.img && (
                <div
                  style={{
                    backgroundColor: imgLeft.color || 'transparent',
                    backgroundImage: `url(${imgLeft.img})`,
                    backgroundSize: imgLeft.size || 'cover',
                    backgroundPosition: imgLeft.position || 'center'
                  }}
                  className={classes.imgLeft}
                />
              )}
              <Flexbox
                display="flex"
                direction="col"
                className={classes.contentWrapper}
              >
                {title || onClose ? (
                  <Flexbox
                    display="flex"
                    justifyContent="end"
                    alignItems="start"
                    className={classnames(classes.header, {
                      [classes.headerBorder]: headerBorder,
                      [classes.stickyHeader]: imgTop?.img,
                      [classes.solidHeader]: imgTop?.img && headerBorder
                    })}
                  >
                    {title && (
                      <Flexbox flex="1">
                        <h4 className={classes.title}>{title}</h4>
                      </Flexbox>
                    )}
                    {onClose && closeButton}
                  </Flexbox>
                ) : null}
                <div
                  ref={contentRef}
                  onScroll={e => setContentScroll(e.currentTarget.scrollTop)}
                  className={classnames(classes.content)}
                >
                  {imgTop?.img && (
                    <div
                      style={{
                        backgroundColor: imgTop.color || 'transparent',
                        backgroundImage: `url(${imgTop.img})`,
                        backgroundSize: imgTop.size || 'cover',
                        backgroundPosition: imgTop.position || 'center'
                      }}
                      className={classes.imgTop}
                    />
                  )}
                  <Text
                    tag="div"
                    className={classnames(classes.contentChild, {
                      [classes.noHeader]: !title && !onClose,
                      [classes.noFooter]: !mainBtn
                    })}
                  >
                    {children}
                  </Text>
                </div>
                {mainBtn && (
                  <div
                    className={classnames(classes.footer, {
                      [classes.footerBorder]: footerBorder
                    })}
                  >
                    {secBtn && (
                      <Button
                        type={secBtn.type}
                        size="lg"
                        theme="ghostGrey"
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
                      type={mainBtn.type}
                      size="lg"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
