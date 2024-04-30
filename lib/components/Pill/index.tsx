import {
  useState,
  useEffect,
  CSSProperties,
  useCallback,
  useMemo,
  useRef
} from 'react'
import classnames from 'classnames'

import Icon from '@/components/Icon'
import Text from '@/components/Text'
import iconSizes from '@/tokens/iconSizes'

import GroupItem from './Group'
import StackItem from './Stack'
import ChoiceItem from './Choice'
import useStyles from './styles'
import useAtomic from '@/hooks/useAtomic'

export interface PillType {
  id: string | number
  label: string
  disabled?: boolean
}

interface ChoiceType extends PillType {
  selected?: boolean
  leftIcon?: string
  rightIcon?: string
}

interface PillProps {
  label?: string
  assistiveText?: string
  group?: PillType[]
  stack?: PillType[]
  choice?: ChoiceType[]
  selected?: string | number
  onChange?: (selected: string | number) => void
  onClick?: (id: string | number) => void
  onClose?: (id: string | number) => void
  error?: boolean
  allowError?: boolean
  disabled?: boolean
  lockHeight?: boolean
  idPrefix?: string
  id?: string
  testId?: string
  className?: string
  style?: CSSProperties
}

const Pill = ({
  group,
  stack,
  choice,
  selected,
  onChange,
  onClose,
  onClick,
  error,
  allowError,
  assistiveText,
  disabled,
  label,
  lockHeight,
  idPrefix,
  id,
  testId,
  className,
  style
}: PillProps) => {
  const classes = useStyles()

  const atomic = useAtomic()
  const getIcon = (oldIcon: string, newIcon: string): string => {
    if (atomic.translateIconsV2) return newIcon
    return oldIcon
  }

  const [status, setStatus] = useState('default')
  const [touched, setTouched] = useState(false)
  const [_selected, setSelected] = useState(selected)
  const selectedRef = useRef<string | number>()

  useEffect(() => {
    selectedRef.current = _selected
  })

  useEffect(() => {
    if (selected !== selectedRef.current) setSelected(selected)
  }, [selected])

  const handleGroupOnSelect = useCallback(
    (selected: string | number) => {
      setSelected(selected)
      setTouched(true)
      if (onChange) onChange(selected)
    },
    [onChange]
  )

  const handleChoiceOnSelect = useCallback(
    (selected: string | number) => {
      setTouched(true)
      if (onChange) onChange(selected)
    },
    [onChange]
  )

  const handleStackItemOnClose = useCallback(
    (id: string | number) => {
      if (onClose) onClose(id)
    },
    [onClose]
  )

  const handleStackItemOnClick = useCallback(
    (id: string | number) => {
      if (onClick) onClick(id)
    },
    [onClick]
  )

  const realStatus = useMemo(() => {
    const errorStatus = error && (touched || allowError)
    if (disabled) return 'disabled'
    else if (errorStatus) return 'error'
    return status
  }, [error, allowError, disabled, touched, status])

  return (
    <div
      className={classnames(
        classes.container,
        { [classes.disabled]: realStatus === 'disabled' },
        className
      )}
      id={id}
      style={style}
    >
      {(label || lockHeight) && (
        <div className={classes.top}>{label && <Text small>{label}</Text>}</div>
      )}
      {group ? (
        <GroupItem
          items={group}
          onSelect={handleGroupOnSelect}
          selected={_selected}
          idPrefix={idPrefix}
          testId={testId}
        />
      ) : stack ? (
        <div className={classes.stackGroup}>
          {stack.map(pill => (
            <StackItem
              key={pill.id}
              idPrefix={idPrefix}
              id={pill.id}
              testId={testId}
              disabled={pill.disabled}
              onClick={onClick ? handleStackItemOnClick : null}
              onClose={onClose ? handleStackItemOnClose : null}
            >
              {pill.label}
            </StackItem>
          ))}
        </div>
      ) : choice ? (
        <div className={classes.choiceGroup}>
          {choice.map(pill => (
            <ChoiceItem
              key={pill.id}
              idPrefix={idPrefix}
              id={pill.id}
              testId={testId}
              disabled={pill.disabled}
              selected={pill.selected}
              onClick={handleChoiceOnSelect}
              leftIcon={pill.leftIcon}
              rightIcon={pill.rightIcon}
            >
              {pill.label}
            </ChoiceItem>
          ))}
        </div>
      ) : null}
      {(assistiveText || lockHeight) && (
        <div className={classes.bottom}>
          {assistiveText && (
            <>
              {realStatus == 'error' && (
                <Icon
                  iconName={getIcon('warning', 'alert')}
                  size={iconSizes.small}
                  className={classes.errorIcon}
                />
              )}
              <Text
                small
                error={realStatus === 'error'}
                low={realStatus !== 'error'}
              >
                {assistiveText}
              </Text>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Pill
