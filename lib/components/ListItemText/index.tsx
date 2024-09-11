import { ReactNode, forwardRef } from 'react'
import useStyles from './styles'
import classNames from 'classnames'
import Text, { TextProps } from '../Text'
import { useListContext } from '../ListProvider'

type ListItemTextProps = {
  className?: string
  children?: ReactNode
  disableTypography?: boolean
  primary?: ReactNode
  primaryTypographyProps?: TextProps
  secondary?: ReactNode
  dense?: boolean
  secondaryTypographyProps?: TextProps
}

const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  (
    {
      children,
      primary: primaryChildren,
      primaryTypographyProps,
      secondary,
      secondaryTypographyProps,
      className,
      disableTypography = false,
      dense
    },
    ref
  ) => {
    const classes = useStyles()
    const primary = children ?? primaryChildren

    const listContext = useListContext()
    const isDense = dense ?? listContext?.dense

    const primaryText = !primary ? null : disableTypography ? (
      primary
    ) : (
      <Text
        className={classes.primaryText}
        tag="span"
        bodyLargeStrong={!!secondary && !isDense}
        bodyRegularStrong={(!secondary && !isDense) || (!!secondary && isDense)}
        bodySmallStrong={!secondary && isDense}
        {...primaryTypographyProps}
      >
        {primary}
      </Text>
    )

    const secondaryText = !secondary ? null : disableTypography ? (
      secondary
    ) : (
      <Text
        className={classes.secondaryText}
        tag="span"
        small
        corpSecondary
        {...secondaryTypographyProps}
      >
        {secondary}
      </Text>
    )

    return (
      <div className={classNames(classes.container, className)} ref={ref}>
        {primaryText}
        {secondaryText}
      </div>
    )
  }
)

export default ListItemText
