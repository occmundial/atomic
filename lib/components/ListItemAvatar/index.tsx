import useStyles from './styles'
import classNames from 'classnames'
import Avatar, { AvatarProps } from '../Avatar'
import { useListContext } from '../ListProvider'

type ListItemAvatarProps = {
  className?: string
  dense?: boolean
} & AvatarProps

const ListItemAvatar = ({
  className,
  dense,
  ...avatarProps
}: ListItemAvatarProps) => {
  const classes = useStyles()
  const listContext = useListContext()
  const isDense = dense ?? listContext?.dense

  return (
    <div className={classNames(classes.container, className)}>
      <Avatar size={isDense ? 40 : 56} {...avatarProps}></Avatar>
    </div>
  )
}

export default ListItemAvatar
