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
import iconSizes from '@/tokens/iconSizes'

import useStyles from './styles'

interface CheckboxProps {
  value?: boolean
  undetermined?: boolean
  onChange?: CallableFunction
  disabled?: boolean
  label?: ReactNode
  right?: string | number
  textOverflow?: boolean
  trk?: string
  id?: string
  className?: string
  style?: CSSProperties
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
  trk
}: CheckboxProps) => {
  const classes = useStyles()
  const [_value, setValue] = useState(value)
  const [_undetermined, setUndetermined] = useState(undetermined)
  const valueRef = useRef<boolean>()

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

  return (
    <div
      id={id}
      className={classnames(
        classes.cont,
        { [classes.undetermined]: _undetermined },
        { [classes.active]: value && !_undetermined },
        { [classes.disabled]: disabled },
        className
      )}
      onClick={toggle}
      style={style}
    >
      <div className={classes.check} id={trk}>
        <Icon
          iconName={_undetermined ? 'minus' : 'success'}
          className={classes.icon}
          size={iconSizes.tiny}
        />
      </div>
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
  )
}

export default Checkbox
