import React, { forwardRef, LegacyRef } from 'react'
import classnames from 'classnames'
import useStyles from './styles'
import Button, { ButtonProps } from '../Button'
import Avatar, { AvatarProps } from '../Avatar'

export type NavAvatarButtonProps = {
  mini: boolean
} & Omit<ButtonProps, 'children'> &
  Omit<AvatarProps, 'onEdit' | 'onClick' | 'disabled' | 'size'>

const NavAvatarButton = forwardRef(
  (
    {
      photo,
      name,
      disabled,
      mini,
      type,
      className,
      ...buttonProps
    }: NavAvatarButtonProps,
    ref: LegacyRef<HTMLDivElement>
  ) => {
    const classes = useStyles()

    return (
      <div ref={ref}>
        <Button
          iconRight="chevron-down"
          disabled={disabled}
          {...buttonProps}
          className={classnames(
            mini && classes.mini,
            className,
            classes.avatarButton
          )}
        >
          <Avatar photo={photo} name={name} disabled={disabled} />
        </Button>
      </div>
    )
  }
)

export default NavAvatarButton
