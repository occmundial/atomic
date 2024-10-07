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
  FloatingPortal,
  Placement
} from '@floating-ui/react'
import Portal from '../Portal'
import Drawer from '../Drawer'
import NavTab from '../NavTab'

interface MenuProps {
  children: ReactNode
  triggerElement?: ReactElement
  id?: string
  className?: string
  placement?: Placement
  drawer?: boolean
}

export default function Menu({
  children,
  id,
  className,
  triggerElement,
  placement,
  drawer
}: MenuProps) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
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
      {triggerElement
        ? cloneElement(triggerElement, {
            ref: refs.setReference,
            ...getReferenceProps()
          })
        : ''}
      <Portal show={open && drawer}>
        <Drawer
          header={
            <NavTab
              right={[
                {
                  key: 'close',
                  type: 'navButton',
                  iconName: 'x',
                  onClick: () => setOpen(false)
                }
              ]}
            />
          }
        >
          {children}
        </Drawer>
      </Portal>
      {open && !drawer && (
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
