import { useRef, useCallback } from 'react'
import {
  useFloating,
  autoUpdate,
  offset,
  useHover,
  useRole,
  useInteractions,
  FloatingPortal,
  Placement,
  arrow,
  FloatingArrow,
  size
} from '@floating-ui/react'
import useStyles from './styles'
import classNames from 'classnames'
import colors from '@/tokens/colors'
import { useOpenTooltipState } from './hooks'

const {
  successLight,
  errorLight,
  warningLight,
  infoLight,
  white,
  grey900,
  info
} = colors

enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
  SUCCESS = 'success',
  INFO = 'info',
  PURPLE = 'purple',
  WARNING = 'warning',
  ERROR = 'error'
}

const colorsArrow = {
  [Themes.DARK]: grey900,
  [Themes.LIGHT]: white,
  [Themes.SUCCESS]: successLight,
  [Themes.INFO]: infoLight,
  [Themes.PURPLE]: info,
  [Themes.WARNING]: warningLight,
  [Themes.ERROR]: errorLight
}

type TooltipThemes = `${Themes}`

export interface TooltipProps {
  show?: boolean
  children?: React.ReactNode
  text: string
  theme?: TooltipThemes
  openOnHover?: boolean
  closeDelay?: number
  zIndex?: number
  placement?: Placement
  showArrow?: boolean
  className?: string
  fit?: boolean
  onShowChange?: (show: boolean) => void
}

export default function Tooltip({
  children,
  text,
  placement = 'top',
  openOnHover = false,
  closeDelay = 8000,
  theme,
  showArrow = true,
  fit = true,
  show,
  zIndex = 10,
  onShowChange
}: TooltipProps) {
  const classes = useStyles()
  const arrowRef = useRef(null)

  const [open, setOpen] = useOpenTooltipState(show, onShowChange, closeDelay)

  const getMiddlewares = useCallback(() => {
    const middlewares = [offset(8)]
    showArrow && middlewares.push(arrow({ element: arrowRef, padding: 16 }))
    fit &&
      middlewares.push(
        size({
          apply({ elements, rects }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`
            })
          }
        })
      )
    return middlewares
  }, [showArrow, fit])

  const { refs, floatingStyles, context } = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: getMiddlewares()
  })

  const hover = useHover(context, {
    enabled: openOnHover
  })
  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, role])

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className={classes.activator}
      >
        {children}
      </div>

      <FloatingPortal>
        {open && (
          <div
            className={classNames(
              classes.container,
              classes[theme] || classes.purple
            )}
            ref={refs.setFloating}
            style={{ ...floatingStyles, zIndex }}
            {...getFloatingProps()}
          >
            {text}
            {showArrow && (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                fill={colorsArrow[theme] || colorsArrow[Themes.PURPLE]}
              />
            )}
          </div>
        )}
      </FloatingPortal>
    </>
  )
}
