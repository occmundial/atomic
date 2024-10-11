import {
  CSSProperties,
  ElementType,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref
} from 'react'
import useStyles from './styles'
import classNames from 'classnames'
import Text, { TextProps } from '../Text'
import MenuItemBase, { MenuItemBaseProps } from '../MenuItemBase'
import Avatar, { AvatarProps } from '../Avatar'
import { useMenuListContext } from '../MenuListProvider'

type MenuItemProps<T extends ElementType> = {
  disableText?: boolean
  title: ReactNode
  titleTextProps?: TextProps
  subtitle: ReactNode
  subtitleTextProps?: TextProps
  avatarProps?: AvatarProps
  className?: {
    root?: string
    title?: string
    subtitle?: string
    avatarContainer?: string
    textContainer?: string
  }
  style?: {
    root?: CSSProperties
    textContainer?: CSSProperties
    avatarContainer?: CSSProperties
  }
} & MenuItemBaseProps<T>

const MenuItem = <T extends ElementType = 'div'>(
  {
    disableText = false,
    className,
    title,
    subtitle,
    titleTextProps,
    subtitleTextProps,
    avatarProps,
    dense,
    children,
    style,
    component = 'div' as T,
    ...menuItemprops
  }: MenuItemProps<T>,
  ref: Ref<T>
) => {
  const classes = useStyles()
  const primary = children ?? title
  const listContext = useMenuListContext()
  const isDense = dense ?? listContext?.dense

  const titleText = !primary ? null : disableText ? (
    primary
  ) : (
    <Text
      className={classNames(classes.title, className?.title)}
      tag="span"
      bodyLargeStrong={!isDense}
      bodyRegularStrong={isDense}
      {...titleTextProps}
    >
      {primary}
    </Text>
  )

  const subtitleText = !subtitle ? null : disableText ? (
    subtitle
  ) : (
    <Text
      className={classNames(classes.subtitle, className?.subtitle)}
      tag="span"
      bodyXSmall
      corpSecondary
      {...subtitleTextProps}
    >
      {subtitle}
    </Text>
  )

  return (
    <MenuItemBase
      className={className?.root}
      component={component as ElementType | undefined}
      ref={ref}
      style={style?.root}
      {...menuItemprops}
    >
      {avatarProps && (
        <div
          className={classNames(
            classes.avatarContainer,
            className?.avatarContainer
          )}
          style={style?.avatarContainer}
        >
          <Avatar size={isDense ? 40 : 56} {...avatarProps} />
        </div>
      )}
      <div
        className={classNames(classes.textContainer, className)}
        style={style?.textContainer}
      >
        {titleText}
        {subtitleText}
      </div>
    </MenuItemBase>
  )
}

export default forwardRef(MenuItem) as <T extends ElementType>(
  p: MenuItemProps<T> & { ref?: Ref<T> }
) => ReactElement
