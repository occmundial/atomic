import { ReactElement, ReactNode } from 'react'
import useStyles from './styles'
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  FloatingPortal,
  ReferenceType,
  Placement
} from '@floating-ui/react'

interface MenuProps {
  children: ReactNode
  triggerElement?: ReactElement
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef?: ReferenceType
  id?: string
  className?: string
  placement?: Placement
}

export default function Menu({
  children,
  id,
  className,
  triggerRef,
  open,
  setOpen,
  placement = 'left'
}: MenuProps) {
  const classes = useStyles()

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: placement,
    middleware: [offset(16), shift()],
    whileElementsMounted: autoUpdate,
    elements: {
      reference: triggerRef
    }
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getFloatingProps } = useInteractions([click, dismiss, role])

  return (
    <>
      {open && (
        <FloatingPortal>
          <FloatingFocusManager context={context} modal={false}>
            <div
              className={`${classes.contentWrapper}${
                className ? ` ${className}` : ''
              }`}
              id={id}
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingPortal>
      )}
    </>
  )
}
