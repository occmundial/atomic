import { MouseEvent, useCallback } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import colors from '@/tokens/colors'
import iconSizes from '@/tokens/iconSizes'

import useStyles from './styles'

interface PillStackProps {
  children: string
  id: string | number
  disabled: boolean
  onClick: (id: string | number) => void
  onClose: (id: string | number) => void
  idPrefix: string
}

const Stack = ({
  children,
  id,
  disabled,
  onClick,
  onClose,
  idPrefix
}: PillStackProps) => {
  const classes = useStyles()

  const handleOnClick = useCallback(
    (id: string | number) => {
      if (onClick) onClick(id)
    },
    [onClick]
  )

  const handleOnClose = useCallback(
    (e: MouseEvent, id: string | number) => {
      e.stopPropagation()
      if (onClose) onClose(id)
    },
    [onClose]
  )

  return (
    <button
      className={classnames(classes.pill, { [classes.disabled]: disabled })}
      onClick={() => handleOnClick(id)}
      id={idPrefix ? `${idPrefix}${id}` : null}
    >
      {children && (
        <Text className={classes.text} tag="span" disabled={disabled}>
          {children}
        </Text>
      )}
      {onClose && (
        <span className={classes.closeCont} onClick={e => handleOnClose(e, id)}>
          <Icon
            className={classes.close}
            iconName="c-micro"
            color={colors.grey300}
            size={iconSizes.small}
          />
        </span>
      )}
    </button>
  )
}

export default Stack
