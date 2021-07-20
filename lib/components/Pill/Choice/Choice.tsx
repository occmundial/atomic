import { useCallback, useMemo } from 'react'
import classnames from 'classnames'

import Icon from '@/components/Icon'
import Text from '@/components/Text'
import colors from '@/tokens/colors'
import iconSizes from '@/tokens/iconSizes'

import useStyles from './styles'

interface PillChoiceProps {
  id: string | number
  onClick: CallableFunction
  children: string
  selected: boolean
  disabled: boolean
  leftIcon: string
  rightIcon: string
  idPrefix: string
}

const Choice = ({
  onClick,
  children,
  selected,
  disabled,
  idPrefix,
  leftIcon,
  rightIcon,
  id
}: PillChoiceProps) => {
  const classes = useStyles()

  const handleOnClick = useCallback(() => {
    if (onClick) onClick(id)
  }, [id, onClick])

  const iconColor = useMemo(
    () => (disabled ? colors.grey200 : selected ? colors.prim : colors.grey900),
    [disabled, selected]
  )

  return (
    <button
      className={classnames(
        classes.pill,
        { [classes.selected]: selected },
        { [classes.disabled]: !selected && disabled }
      )}
      onClick={handleOnClick}
      id={idPrefix ? `${idPrefix}${id}` : null}
    >
      {leftIcon && (
        <Icon
          iconName={leftIcon}
          colors={[iconColor]}
          width={iconSizes.small}
          height={iconSizes.small}
        />
      )}
      {children && (
        <Text
          tag="span"
          className={classes.text}
          primary={selected}
          disabled={!selected && disabled}
        >
          {children}
        </Text>
      )}
      {rightIcon && (
        <Icon
          iconName={rightIcon}
          colors={[iconColor]}
          width={iconSizes.small}
          height={iconSizes.small}
        />
      )}
    </button>
  )
}

export default Choice
