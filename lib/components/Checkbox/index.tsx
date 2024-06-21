import {
  useState,
  useEffect,
  ReactNode,
  CSSProperties,
  useRef,
  useCallback
} from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import useStyles from './styles'
import useIcon from '@/hooks/useIcon'
import colors from '@/tokens/future/colors.json'

interface CheckboxProps {
  value?: boolean
  undetermined?: boolean
  onChange?: (value: boolean) => void
  disabled?: boolean
  label?: ReactNode
  right?: string | number
  textOverflow?: boolean
  trk?: string
  id?: string
  className?: string
  style?: CSSProperties
  testId?: string
}

const Checkbox = ({
  value,
  undetermined,
  onChange,
  label,
  right,
  disabled,
  textOverflow,
  id,
  className,
  style,
  trk,
  testId
}: CheckboxProps) => {
  const classes = useStyles()
  const [_value, setValue] = useState(value)
  const [_undetermined, setUndetermined] = useState(undetermined)
  const valueRef = useRef<boolean>()

  const iconColor = disabled
    ? colors.icon.brand.disabled
    : colors.icon.inverse.default
  const getIcon = useIcon()

  useEffect(() => {
    valueRef.current = _value
  })

  useEffect(() => {
    if (valueRef.current !== value) setValue(value)
  }, [value])

  const toggle = useCallback(() => {
    if (!disabled) {
      setValue(!_value)
      setUndetermined(false)
      if (onChange) onChange(!_value)
    }
  }, [_value, disabled, onChange])

  const handleKeyDown = e => {
    if (e.keyCode == 13 || e.keyCode == 32) {
      e.preventDefault()
    }
  }

  const handleKeyUp = e => {
    if (e.keyCode == 13 || e.keyCode == 32) {
      toggle()
    }
  }

  return (
    <div
      id={id}
      tabIndex={disabled ? -1 : 0}
      className={classnames(
        classes.cont,
        { [classes.undetermined]: _undetermined },
        { [classes.active]: _value && !_undetermined },
        { [classes.disabled]: disabled },
        className
      )}
      onClick={toggle}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      style={style}
      data-testid={testId}
      {...(testId && {
        'data-value': value ? 1 : 0
      })}
    >
      <div className={classes.checkWrap}>
        <div className={classes.check} id={trk}>
          <div className={classes.box} />
          {_undetermined && (
            <Icon
              iconName={getIcon('minus', 'dash')}
              size={16}
              color={iconColor}
              className={classes.icon}
            />
          )}
          {!_undetermined && _value && (
            <Icon
              iconName={getIcon('success', 'check')}
              size={16}
              color={iconColor}
              className={classes.icon}
            />
          )}
        </div>
      </div>
      {!!(label || right) && (
        <div className={classes.labelWrap}>
          {label && (
            <Text
              tag="label"
              className={classnames(classes.label, {
                [classes.overflow]: textOverflow
              })}
            >
              {label}
            </Text>
          )}
          {right && (
            <Text tag="label" mid className={classes.right}>
              {right}
            </Text>
          )}
        </div>
      )}
    </div>
  )
}

export default Checkbox
