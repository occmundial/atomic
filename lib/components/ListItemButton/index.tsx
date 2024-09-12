import {
  forwardRef,
  ReactNode,
  ComponentPropsWithRef,
  createElement,
  ElementType,
  RefObject
} from 'react'
import useStyles from './styles'
import classNames from 'classnames'
import { ListProvider, useListContext } from '../ListProvider'

type ListItemButtonProps<T extends ElementType> = {
  alignItems?: 'center' | 'start'
  className?: string
  dense?: boolean
  disablePadding?: boolean
  disableGutters?: boolean
  children: ReactNode
  selected: boolean
  component?: T
} & Omit<ComponentPropsWithRef<T>, 'children'>

const ListItemButton = forwardRef(
  <T extends ElementType = 'li'>(
    {
      dense,
      children,
      className,
      component = 'li' as T,
      alignItems = 'center',
      disablePadding = false,
      disableGutters = false,
      selected,
      ...props
    }: ListItemButtonProps<T>,
    ref: RefObject<T>
  ) => {
    const classes = useStyles()
    const listContext = useListContext()
    const isDense = dense ?? listContext?.dense

    const item = createElement(
      component,
      {
        className: classNames(
          !disablePadding
            ? isDense
              ? classes.paddingVerticalDense
              : classes.paddingVertical
            : null,
          !disablePadding && !disableGutters && classes.paddingHorizontal,
          alignItems === 'center'
            ? classes.alignItemsCenter
            : classes.alignItemsStart,
          classes.container,
          classes.activable,
          selected && classes.selected,
          className
        ),
        ref,
        tabIndex: 0,
        ...props
      },
      children
    )

    return <ListProvider dense={isDense}>{item}</ListProvider>
  }
)

export default ListItemButton
