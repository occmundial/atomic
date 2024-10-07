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

type MenuItemBaseStaticProps<T extends ElementType> = {
  alignItems?: 'center' | 'start'
  className?: string
  nonActivatable?: boolean
  dense?: boolean
  disablePadding?: boolean
  disableGutters?: boolean
  children?: ReactNode
  selected?: boolean
  component?: T
}

type MenuItemBaseDynamicProps<T extends ElementType> = Omit<
  ComponentProps<T>,
  keyof MenuItemBaseStaticProps<T>
>

export type MenuItemBaseProps<T extends ElementType> =
  MenuItemBaseStaticProps<T> & MenuItemBaseDynamicProps<T>

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

  return createElement(
    component,
    {
      className: classNames(
        classes.root,
        className,
        !disablePadding
          ? dense
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

export default forwardRef(MenuItemBase) as <T extends ElementType = 'div'>(
  props: MenuItemBaseProps<T> & { ref?: Ref<T> }
) => ReactElement
