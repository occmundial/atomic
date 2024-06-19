import { useCallback, useMemo } from 'react'
import Icon from '@/components/Icon'
import colors from '@/tokens/future/colors.json'

import useStyles from './styles'

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

const getStylesByStatus = (selected, disabled) => {
  if (selected) {
    if (disabled) {
      return {
        iconColor: colors.icon.inverse.disabled,
        button: 'selectedDisabled',
        text: 'textSelectedDisabled'
      }
    }
    return {
      iconColor: colors.icon.inverse.default,
      button: 'selected',
      text: 'textSelected'
    }
  }
  if (disabled) {
    return {
      iconColor: colors.icon.brand.disabled,
      button: 'disabled',
      text: 'textDisabled'
    }
  }
  return {
    iconColor: colors.icon.brand.default,
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

  const conditionedStyles = useMemo(
    () => getStylesByStatus(!!selected, !!disabled),
    [selected, disabled]
  )

  return (
    <button
      className={`${classes.pill} ${classes[conditionedStyles.button]}`}
      onClick={handleOnClick}
      disabled={disabled}
      id={idPrefix ? `${idPrefix}${id}` : null}
      data-testid={testId ? `${testId}${id}` : null}
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
