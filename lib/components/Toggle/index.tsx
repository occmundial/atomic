import React, {
  useEffect,
  useState,
  CSSProperties,
  ReactNode,
  useRef,
  useCallback
} from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'

import useStyles from './styles'

interface ToggleProps {
  value?: boolean
  onChange: CallableFunction
  disabled?: boolean
  label?: ReactNode
  trk?: string
  id?: string
  className?: string
  style?: CSSProperties
}

const Toggle = ({
  value,
  onChange,
  disabled,
  label,
  trk,
  id,
  className,
  style
}: ToggleProps) => {
  const classes = useStyles()
  const [_value, setValue] = useState(value)
  const valueRef = useRef<boolean>()

  useEffect(() => {
    valueRef.current = _value
  })

  useEffect(() => {
    if (valueRef.current !== value) {
      setValue(value)
    }
  }, [value])

  const toggle = useCallback(() => {
    if (!disabled) {
      setValue(!_value)
      if (onChange) onChange(!_value, id)
    }
  }, [onChange, id, disabled, _value])

  return (
    <div
      id={id}
      className={classnames(
        classes.cont,
        { [classes.disabled]: disabled },
        className
      )}
      style={style}
    >
      <div
        id={trk}
        className={classnames(classes.switch, { [classes.checked]: value })}
        onClick={toggle}
      >
        <span className={classes.slider}>
          <span className={classes.icon} />
        </span>
      </div>
      {label && (
        <Text tag="label" className={classes.label}>
          {label}
        </Text>
      )}
    </div>
  )
}

export default Toggle
