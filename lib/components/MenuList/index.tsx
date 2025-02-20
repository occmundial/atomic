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
import { MenuListProvider } from '../MenuListProvider'
import { spacing } from '@/tokens/future'

type MenuListProps<T extends ElementType> = {
  className?: string
  dense: boolean
  children?: ReactNode
  padding: keyof typeof spacing | false
  component: T
} & Omit<ComponentPropsWithRef<T>, 'children'>

const MenuList = forwardRef(
  <T extends ElementType = 'menu'>(
    {
      children,
      className,
      component = 'menu' as T,
      padding = 'size-2',
      dense,
      ...props
    }: MenuListProps<T>,
    ref: RefObject<T>
  ) => {
    const classes = useStyles()

    return (
      <MenuListProvider dense={dense}>
        {createElement(
          component,
          {
            className: classNames(
              classes.container,
              padding && classes[padding],
              className
            ),
            ref,
            ...props
          },
          children
        )}
      </MenuListProvider>
    )
  }
)

export default MenuList
