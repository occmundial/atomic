import { MouseEvent, useCallback } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import colors from '@/tokens/colors'

import useStyles from './styles'
import useIcon from '@/hooks/useIcon'

interface PillStackProps {
  children: string
  id: string | number
  disabled: boolean
  onClick: (id: string | number) => void
  onClose: (id: string | number) => void
  idPrefix: string
  testId: string
}

const Stack = ({
  children,
  id,
  disabled,
  onClick,
  onClose,
  idPrefix,
  testId
}: PillStackProps) => {
  const classes = useStyles()

  const getIcon = useIcon()

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
      data-testid={testId ? `${testId}${id}` : null}
    >
      {children && (
        <Text className={classes.text} tag="span" disabled={disabled}>
          {children}
        </Text>
      )}
      {onClose && (
        <span className={classes.closeCont} onClick={e => handleOnClose(e, id)}>
          <Icon
            iconName={getIcon('x-micro', 'x')}
            color={colors.grey300}
            size={16}
          />
        </span>
      )}
    </button>
  )
}

export default Stack
