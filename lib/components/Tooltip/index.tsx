import {
  useRef,
  useMemo,
  JSXElementConstructor,
  ReactNode,
  createElement,
  ComponentProps
} from 'react'
import {
  useFloating,
  autoUpdate as autoUpdateFloating,
  offset,
  useHover,
  useRole,
  useInteractions,
  Placement,
  arrow,
  size,
  flip as flipMiddleware,
  FlipOptions,
  AutoUpdateOptions
} from '@floating-ui/react'
import classNames from 'classnames'
import { useOpenTooltipState } from './hooks'
import { Strategies, TooltipThemes } from './helper'
import { Tip } from './Tip'

type JSXTags = keyof JSX.IntrinsicElements | JSXElementConstructor<any>

export interface TooltipProps<T extends JSXTags> {
  tag?: T
  open?: boolean
  children?: ReactNode
  text: ReactNode
  theme?: TooltipThemes
  openOnHover?: boolean
  closeDelay?: number
  zIndex?: number
  placement?: Placement
  showArrow?: boolean
  activatorProps?: ComponentProps<T>
  tooltipProps?: ComponentProps<'div'>
  className?: {
    activator?: string
    tooltip?: string
  }
  fit?: boolean
  strategy?: Strategies
  autoUpdate?: AutoUpdateOptions | boolean
  flip: FlipOptions | boolean
  width?: number | string
  onChange?: (open: boolean) => void
}

export default function Tooltip<T extends JSXTags = 'div'>({
  tag = 'div' as T,
  open: openProp,
  children,
  text,
  theme,
  openOnHover = false,
  closeDelay = 4000,
  zIndex = 10,
  placement = 'top',
  flip = false,
  showArrow = true,
  className,
  fit = false,
  width = 220,
  strategy = 'absolute',
  autoUpdate = true,
  activatorProps = {} as ComponentProps<T>,
  tooltipProps = {},
  onChange
}: TooltipProps<T>) {
  const refArrow = useRef(null)

  const [open, setOpen] = useOpenTooltipState(openProp, onChange, closeDelay)

  const getMiddlewares = useMemo(() => {
    const middlewares = [offset(16)]
    showArrow && middlewares.push(arrow({ element: refArrow, padding: 16 }))
    flip &&
      middlewares.push(flipMiddleware(typeof flip === 'boolean' ? {} : flip))
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
  }, [showArrow, fit, width, flip])

  const { refs, floatingStyles, context } = useFloating({
    open: open,
    onOpenChange: setOpen,
    placement,
    strategy,
    whileElementsMounted: (reference, floating, update) => {
      if (autoUpdate)
        return autoUpdateFloating(
          reference,
          floating,
          update,
          typeof autoUpdate === 'boolean' ? {} : autoUpdate
        )
    },
    middleware: getMiddlewares
  })

  const hover = useHover(context, {
    enabled: openOnHover
  })

  const role = useRole(context, { role: 'tooltip' })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, role])

  return (
    <>
      {createElement(
        tag,
        {
          ...activatorProps,
          ref: refs.setReference,
          ...getReferenceProps(),
          className: classNames(className?.activator)
        },
        children
      )}

      {open && (
        <Tip
          classNameTip={className?.tooltip}
          context={context}
          propsFloating={getFloatingProps()}
          propsTip={tooltipProps}
          refArrow={refArrow}
          refFloating={refs.setFloating}
          showArrow={showArrow}
          strategy={strategy}
          styleTip={floatingStyles}
          theme={theme}
          zIndex={zIndex}
        >
          {text}
        </Tip>
      )}
    </>
  )
}
