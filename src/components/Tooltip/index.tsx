import { useRef, useMemo } from 'react'
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
    activator?: string
    container?: string
  }
  fit?: boolean
  width?: number | string
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
  width = 220,
  onShowChange
}: TooltipProps) {
  const classes = useStyles()
  const arrowRef = useRef(null)

  const [open, setOpen] = useOpenTooltipState(show, onShowChange, closeDelay)

  const getMiddlewares = useMemo(() => {
    const middlewares = [offset(16)]
    showArrow && middlewares.push(arrow({ element: arrowRef, padding: 16 }))
    const sizeMiddleware = size({
      apply({ elements, rects, availableWidth }) {
        const styles: Record<string, string> = {}
        if (fit) {
          styles.width = `${rects.reference.width}px`
        } else {
          styles.maxWidth = `${availableWidth}px`
          if (width)
            styles.width = typeof width === 'string' ? width : `${width}px`
        }
        Object.assign(elements.floating.style, styles)
      }
    })
    sizeMiddleware.name = `size-${fit}-${width}`
    middlewares.push(sizeMiddleware)
    return middlewares
  }, [showArrow, fit, width])

  const { refs, floatingStyles, context } = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: getMiddlewares
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
                width={14}
                height={10}
              />
            )}
          </div>
        )}
      </FloatingPortal>
    </>
  )
}
