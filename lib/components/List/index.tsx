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
import { ListProvider } from '../ListProvider'

type ListProps<T extends ElementType> = {
  className?: string
  disablePadding: boolean
  dense: boolean
  children?: ReactNode
  component: T
} & Omit<ComponentPropsWithRef<T>, 'children'>

const List = forwardRef(
  <T extends ElementType = 'ul'>(
    {
      children,
      className,
      component = 'ul' as T,
      disablePadding = false,
      dense,
      ...props
    }: ListProps<T>,
    ref: RefObject<T>
  ) => {
    const classes = useStyles()

    return (
      <ListProvider dense={dense}>
        {createElement(
          component,
          {
            className: classNames(
              classes.container,
              !disablePadding && classes.paddingVertical,
              className
            ),
            ref,
            ...props
          },
          children
        )}
      </ListProvider>
    )
  }
)

export default List
