import {
  ComponentProps,
  CSSProperties,
  ElementType,
  forwardRef,
  ReactElement,
  Ref
} from 'react'
import useStyles from './styles'
import classNames from 'classnames'
import Text, { TextProps } from '../Text'
import Icon, { IconProps } from '../Icon'
import { colors } from '@/tokens/future'
import MenuItemBase, { MenuItemBaseProps } from '../MenuItemBase'
import { useMenuListContext } from '../MenuListProvider'

type MenuItemStaticProps = {
  disableText?: boolean
  textProps?: TextProps
  iconRightProps?: IconProps
  iconLeftProps?: IconProps
  className?: {
    root?: string
    textContainer?: string
    iconRightContainer?: string
    iconLeftContainer?: string
  }
  style?: {
    root?: CSSProperties
    textContainer?: CSSProperties
    iconRightContainer?: CSSProperties
    iconLeftContainer?: CSSProperties
  }
}

type MenuItemProps<T extends ElementType> = MenuItemStaticProps &
  MenuItemBaseProps<T>

const MenuItem = <T extends ElementType = 'div'>(
  {
    disableText = false,
    className,
    textProps,
    iconRightProps,
    iconLeftProps,
    dense,
    children,
    style,
    component,
    ...menuItemprops
  }: MenuItemProps<T>,
  ref: Ref<T>
) => {
  const classes = useStyles()
  const listContext = useMenuListContext()
  const isDense = dense ?? listContext?.dense

  return (
    <MenuItemBase
      className={className?.root}
      dense={isDense}
      component={component as ElementType | undefined}
      ref={ref}
      style={style?.root}
      {...menuItemprops}
    >
      {iconLeftProps?.iconName && (
        <div
          className={classNames(
            classes.iconContainer,
            className?.iconLeftContainer,
            isDense ? classes.iconContainerSizeDense : classes.iconContainerSize
          )}
          style={style?.iconLeftContainer}
        >
          <Icon size={16} color={colors.icon.default.bold} {...iconLeftProps} />
        </div>
      )}
      {
        <div
          className={classNames(
            classes.textContainer,
            className?.textContainer
          )}
          style={style?.textContainer}
        >
          {disableText ? (
            children
          ) : (
            <Text
              bodyRegularStrong={!isDense}
              bodySmallStrong={isDense}
              tag="span"
              {...textProps}
            >
              {children}
            </Text>
          )}
        </div>
      }
      {iconRightProps?.iconName && (
        <div
          className={classNames(
            classes.iconContainer,
            className?.iconRightContainer,
            classes.iconRight,
            isDense ? classes.iconContainerSizeDense : classes.iconContainerSize
          )}
          style={style?.iconLeftContainer}
        >
          <Icon
            size={16}
            color={colors.icon.default.default}
            {...iconRightProps}
          />
        </div>
      )}
    </MenuItemBase>
  )
}

export default forwardRef(MenuItem) as <T extends ElementType = 'div'>(
  p: MenuItemProps<T> & { ref?: Ref<T> }
) => ReactElement
