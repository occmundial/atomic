import { useState, useEffect, ReactNode, CSSProperties } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'

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
  const [iValue, setValue] = useState(value)
  const [iUndetermined, setUndetermined] = useState(undetermined)

  useEffect(() => {
    if (iValue !== value) setValue(value)
  }, [iValue, value])

  const toggle = () => {
    if (!disabled) {
      setValue(!iValue)
      setUndetermined(false)
      if (onChange) onChange(!iValue, id)
    }
  }

  return (
    <div
      id={id}
      className={classnames(
        classes.cont,
        { [classes.undetermined]: iUndetermined },
        { [classes.active]: value && !iUndetermined },
        { [classes.disabled]: disabled },
        className
      )}
      onClick={toggle}
      style={style}
    >
      <div className={classes.check} id={trk} />
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
