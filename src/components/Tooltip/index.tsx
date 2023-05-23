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

const { infoLight, white, grey900, info } = colors

enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
  INFO = 'info',
  PURPLE = 'purple'
}

const colorsArrow = {
  [Themes.DARK]: grey900,
  [Themes.LIGHT]: white,
  [Themes.INFO]: infoLight,
  [Themes.PURPLE]: info
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
  className?: {
    activator: string
    container: string
  }
  fit?: boolean
  maxWidth?: number | 'auto'
  onShowChange?: (show: boolean) => void
}

export default function Tooltip({
  show,
  children,
  text,
  theme,
  openOnHover = false,
  closeDelay = 4000,
  zIndex = 10,
  placement = 'top',
  showArrow = true,
  className,
  fit = false,
  maxWidth = 220,
  onShowChange
}: TooltipProps) {
  const classes = useStyles()
  const arrowRef = useRef(null)

  const [open, setOpen] = useOpenTooltipState(show, onShowChange, closeDelay)

  const getMiddlewares = useCallback(() => {
    const middlewares = [
      offset(8),
      size({
        apply({ availableWidth, elements }) {
          // Do things with the data, e.g.
          Object.assign(elements.floating.style, {
            maxWidth:
              maxWidth === 'auto'
                ? maxWidth
                : `${availableWidth < maxWidth ? availableWidth : maxWidth}px`
          })
        }
      })
    ]
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
  }, [showArrow, fit, maxWidth])

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
        className={classNames(classes.activator, className?.activator)}
      >
        {children}
      </div>

      <FloatingPortal>
        {open && (
          <div
            className={classNames(
              classes.container,
              className?.container,
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
