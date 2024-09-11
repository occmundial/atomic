import useStyles from './styles'
import classNames from 'classnames'
import Icon, { IconProps } from '../Icon'
import { colors } from '@/tokens/future'
import { useListContext } from '../ListProvider'

type ListItemIconProps = {
  containerClassName?: string
  dense?: boolean
  contentEnd?: boolean
} & IconProps

const ListItemIcon = ({
  containerClassName,
  contentEnd,
  dense,
  ...iconProps
}: ListItemIconProps) => {
  const classes = useStyles()
  const listContext = useListContext()
  const isDense = dense ?? listContext?.dense

  return (
    <div
      className={classNames(
        classes.container,
        isDense ? classes.containerDense : classes.containerWidth,
        contentEnd && classes.contentEnd,
        containerClassName
      )}
    >
      {iconProps?.iconName && (
        <Icon size={16} color={colors.icon.default.bold} {...iconProps} />
      )}
    </div>
  )
}

export default ListItemIcon
