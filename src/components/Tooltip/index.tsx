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
  FloatingArrow
} from '@floating-ui/react'
import useStyles from './styles'
import classNames from 'classnames'
import colors from '@/tokens/colors'

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

const colorsTheme = {
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
  onShowChange?: (show: boolean) => void
}

export default function Tooltip({
  children,
  text,
  placement = 'top-start',
  openOnHover = false,
  closeDelay = 8000,
  theme,
  showArrow = true,
  show: openManual,
  zIndex = 10,
  onShowChange: setOpenManual
}: TooltipProps) {
  const classes = useStyles()
  const arrowRef = useRef(null)

  const [openAuto, setInnerShow] = useState(false)

  const open = useMemo(() => openManual ?? openAuto, [openManual, openAuto])

  const setOpen = useMemo(
    () =>
      openManual !== undefined ? setOpenManual ?? (() => {}) : setInnerShow,
    [openManual, setOpenManual, setInnerShow]
  )

  const getMiddlewares = () => {
    const middlewares = [offset(8)]
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
        className={classes.activator}
      >
        {children}
      </div>

      <FloatingPortal>
        {open && (
          <div
            className={classNames(classes.container, {
              [classes.dark]: theme === Themes.DARK,
              [classes.light]: theme === Themes.LIGHT,
              [classes.success]: theme === Themes.SUCCESS,
              [classes.info]: theme === Themes.INFO,
              [classes.warning]: theme === Themes.WARNING,
              [classes.error]: theme === Themes.ERROR,
              [classes.purple]: !colorsTheme[theme] || theme === Themes.PURPLE
            })}
            ref={refs.setFloating}
            style={{ ...floatingStyles, zIndex }}
            {...getFloatingProps()}
          >
            {text}
            {showArrow && (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                fill={colorsTheme[theme] || colorsTheme[Themes.PURPLE]}
              />
            )}
          </div>
        )}
      </FloatingPortal>
    </>
  )
}
