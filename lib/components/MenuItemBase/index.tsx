import {
  forwardRef,
  ReactNode,
  createElement,
  ElementType,
  Ref,
  ReactElement,
  ComponentProps
} from 'react'
import useStyles from './styles'
import classNames from 'classnames'
import { useMenuListContext } from '../MenuListProvider'

export type MenuItemBaseProps<T extends ElementType> = {
  alignItems?: 'center' | 'start'
  className?: string
  nonActivatable?: boolean
  dense?: boolean
  disablePadding?: boolean
  disableGutters?: boolean
  children?: ReactNode
  selected?: boolean
  component?: T
} & (ComponentProps<T> extends any ? {} : Omit<ComponentProps<T>, 'children'>)

const MenuItemBase = <T extends ElementType = 'div'>(
  {
    alignItems = 'center',
    className,
    nonActivatable,
    dense,
    disablePadding = false,
    disableGutters = false,
    children,
    selected = false,
    component = 'div' as T,
    ...props
  }: MenuItemBaseProps<T>,
  ref: Ref<T>
) => {
  const classes = useStyles()
  const listContext = useMenuListContext()
  const isDense = dense ?? listContext?.dense

  return createElement(
    component,
    {
      className: classNames(
        classes.root,
        className,
        !disablePadding
          ? isDense
            ? classes.paddingVerticalDense
            : classes.paddingVertical
          : null,
        !disablePadding && !disableGutters && classes.paddingHorizontal,
        alignItems === 'center'
          ? classes.alignItemsCenter
          : classes.alignItemsStart,
        component === 'a' && classes.containerAnchor,
        selected && classes.selected,
        !nonActivatable && classes.activatable
      ),
      ref,
      tabIndex: '0',
      ...props
    },
    children
  )
}

export default forwardRef(MenuItemBase) as <T extends ElementType>(
  p: MenuItemBaseProps<T> & { ref?: Ref<T> }
) => ReactElement
