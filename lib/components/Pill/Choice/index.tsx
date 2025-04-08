import { useCallback, useMemo } from 'react'
import Icon from '@/components/Icon'
import colors from '@/tokens/future/colors.json'

import useStyles from './styles'
import { CT } from '@/constants/index'

interface PillChoiceProps {
  id: string | number
  onClick: (id: string | number) => void
  children: string
  selected: boolean
  disabled: boolean
  leftIcon: string
  rightIcon: string
  idPrefix: string
  testId: string
}

const getStylesByStatus = (selected, disabled, brand = false) => {
  if (selected) {
    if (disabled) {
      return {
        iconColor: brand ? undefined : colors.icon.inverse.disabled,
        button: 'selectedDisabled',
        text: 'textSelectedDisabled'
      }
    }
    return {
      iconColor: brand ? undefined : colors.icon.inverse.default,
      button: 'selected',
      text: 'textSelected'
    }
  }
  if (disabled) {
    return {
      iconColor: brand ? undefined : colors.icon.brand.disabled,
      button: 'disabled',
      text: 'textDisabled'
    }
  }
  return {
    iconColor: brand ? undefined : colors.icon.brand.default,
    button: 'enabled',
    text: 'textEnabled'
  }
}

const Choice = ({
  onClick,
  children,
  selected,
  disabled,
  idPrefix,
  testId,
  leftIcon,
  rightIcon,
  id
}: PillChoiceProps) => {
  const classes = useStyles()

  const handleOnClick = useCallback(() => {
    if (onClick) onClick(id)
  }, [id, onClick])

  const conditionedStyles = useMemo(() => {
    const brand = process.env.ATOMIC_BRAND === CT
    return getStylesByStatus(!!selected, !!disabled, brand)
  }, [selected, disabled])

  return (
    <button
      className={`${classes.pill} ${classes[conditionedStyles.button]}`}
      onClick={handleOnClick}
      disabled={disabled}
      id={idPrefix ? `${idPrefix}${id}` : null}
      data-testid={testId ? `${testId}${id}` : null}
      type="button"
    >
      {leftIcon && (
        <Icon
          iconName={leftIcon}
          color={conditionedStyles.iconColor}
          className={classes.leftIcon}
          size={16}
        />
      )}
      {children && (
        <span className={`${classes.text} ${classes[conditionedStyles.text]}`}>
          {children}
        </span>
      )}
      {rightIcon && (
        <Icon
          iconName={rightIcon}
          color={conditionedStyles.iconColor}
          className={classes.rightIcon}
          size={16}
        />
      )}
    </button>
  )
}

export default Choice
