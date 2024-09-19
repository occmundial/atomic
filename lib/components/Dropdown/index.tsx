import { cloneElement, ReactElement, ReactNode, useState } from 'react'
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
  FloatingPortal
} from '@floating-ui/react'

interface DropdownProps {
  children: ReactNode
  menuTrigger?: ReactElement
  id?: string
  className?: string
  placement?: 'left' | 'right'
}

export default function Dropdown({
  children,
  id,
  className,
  menuTrigger,
  placement = 'left'
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: placement === 'left' ? 'bottom-start' : 'bottom-end',
    middleware: [offset(16), shift()],
    whileElementsMounted: autoUpdate
  })

  const click = useClick(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role
  ])

  return (
    <>
      {menuTrigger
        ? cloneElement(menuTrigger, {
            ref: refs.setReference,
            ...getReferenceProps()
          })
        : ''}
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
