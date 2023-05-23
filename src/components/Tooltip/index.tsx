import { useState, useRef, useMemo } from 'react'
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
  shift
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
  className?: {
    activator: string
    container: string
  }
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
  show,
  zIndex = 10,
  className,
  onShowChange
}: TooltipProps) {
  const classes = useStyles()
  const arrowRef = useRef(null)

  const [open, setOpen] = useOpenTooltipState(show, onShowChange, closeDelay)

  const getMiddlewares = () => {
    const middlewares = [offset(8), shift({ padding: 8, mainAxis: false })]
    showArrow && middlewares.push(arrow({ element: arrowRef, padding: 16 }))
    return middlewares
  }

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
