import { useRef, useMemo } from 'react'
import {
  useFloating,
  autoUpdate,
  offset,
  useHover,
  useRole,
  useInteractions,
  Placement,
  arrow,
  FloatingArrow,
  size,
  FloatingPortal
} from '@floating-ui/react'
import useStyles from './styles'
import classNames from 'classnames'
import colors from '@/tokens/colors'
import newColors from '@/tokens/future/colors.json'
import Icon from '../Icon'
import { useOpenTooltipState } from './hooks'

const { infoLight, info } = colors

enum Themes {
  DARK = 'dark',
  LIGHT = 'light',
  INFO = 'info',
  PURPLE = 'purple'
}

const colorsArrow = {
  [Themes.DARK]: newColors.bg.neutral,
  [Themes.INFO]: infoLight,
  [Themes.LIGHT]: newColors.bg.surface.default,
  [Themes.PURPLE]: info
}

const borderColors = {
  [Themes.DARK]: {
    bg: 'black',
    border: 'rgba(0, 0, 0, 0.8)'
  },
  [Themes.LIGHT]: {
    bg: newColors.border.default.subtle,
    border: newColors.border.default.subtle
  },
  [Themes.INFO]: {
    bg: infoLight,
    border: infoLight
  },
  [Themes.PURPLE]: {
    bg: info,
    border: info
  }
}

type TooltipThemes = `${Themes}`

export interface TooltipProps {
  open?: boolean
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
    tooltip?: string
  }
  fit?: boolean
  strategy?: 'absolute' | 'fixed'
  width?: number | string
  onChange?: (open: boolean) => void
  icon?: string
}

export default function Tooltip({
  open: openProp,
  children,
  text,
  theme = 'purple',
  openOnHover = false,
  closeDelay = 4000,
  zIndex = 10,
  placement = 'top',
  showArrow = true,
  className,
  fit = false,
  width = 'auto',
  strategy = 'absolute',
  onChange,
  icon
}: TooltipProps) {
  const classes = useStyles()
  const arrowRef = useRef(null)

  const [open, setOpen] = useOpenTooltipState(openProp, onChange, closeDelay)

  const getMiddlewares = useMemo(() => {
    const middlewares = [
      offset(({ rects }) => {
        if (placement === 'top-start' || placement === 'bottom-start') {
          return {
            crossAxis: rects.reference.width / 2 - 18,
            mainAxis: 16
          }
        } else if (placement === 'top-end' || placement === 'bottom-end') {
          return {
            crossAxis: -(rects.reference.width / 2) + 18,
            mainAxis: 16
          }
        }

        return {
          mainAxis: 16
        }
      })
    ]
    showArrow &&
      middlewares.push(
        arrow({
          element: arrowRef
        })
      )
    const sizeMiddleware = size({
      apply({ elements, rects, availableWidth }) {
        const styles: Record<string, string> = {}
        if (fit) {
          styles.width = `${rects.reference.width}px`
        } else {
          styles.maxWidth = `${availableWidth}px`
          if (width) {
            styles.width = typeof width === 'string' ? width : `${width}px`
          } else styles.width = ''
        }
        Object.assign(elements.floating.style, styles)
      }
    })
    sizeMiddleware.name = `size-${fit}-${width}`
    middlewares.push(sizeMiddleware)
    return middlewares
  }, [showArrow, fit, width, placement])

  const { refs, floatingStyles, context } = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement,
    strategy,
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

      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={{ ...floatingStyles, zIndex, position: strategy }}
            {...getFloatingProps()}
          >
            <div
              className={classNames(
                classes.tooltip,
                className?.tooltip,
                classes[theme] || classes.purple
              )}
            >
              {icon && <Icon iconName={icon} size={12} />}
              <p className={classes.text}>{text}</p>
            </div>
            {showArrow && (
              <FloatingArrow
                style={{ transform: 'translateY(1px)' }}
                ref={arrowRef}
                context={context}
                fill={colorsArrow[theme] || colorsArrow[Themes.PURPLE]}
                strokeWidth={1}
                stroke={borderColors[theme].border}
                width={20}
                d="M0 20C0 20 2.06906 19.9829 5.91817 15.4092C7.49986 13.5236 8.97939 12.3809 10.0002 12.3809C11.0202 12.3809 12.481 13.6451 14.0814 15.5472C17.952 20.1437 20 20 20 20H0Z"
              />
            )}
          </div>
        </FloatingPortal>
      )}
    </>
  )
}
