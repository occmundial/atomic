import { useEffect, useRef, useState, useCallback, CSSProperties } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'

import useStyles from './styles'

interface RadioOption {
  label?: string
  value?: string | number
  right?: string
  trk?: string
  disabled?: boolean
}

interface RadioProps {
  selected?: string | number
  onChange?: CallableFunction
  options?: RadioOption[]
  textOverflow?: boolean
  id?: string
  className?: string
  style?: CSSProperties
}

const Radio = ({
  selected,
  onChange,
  options,
  textOverflow,
  id,
  className,
  style
}: RadioProps) => {
  const classes = useStyles()
  const [_selected, setSelected] = useState(selected)
  const selectedRef = useRef<string | number>()

  useEffect(() => {
    selectedRef.current = _selected
  })

  useEffect(() => {
    if (selected !== selectedRef.current) {
      setSelected(selected)
    }
  }, [selected])

  const handleOnChange = useCallback(
    (option: RadioOption) => {
      if (!option.disabled) {
        setSelected(option.value)
        if (onChange) onChange(option.value)
      }
    },
    [onChange]
  )

  return (
    <div id={id}>
      {options.map(option => (
        <div
          id={option.trk}
          key={option.value}
          className={classnames(
            classes.cont,
            { [classes.active]: option.value === _selected },
            { [classes.disabled]: option.disabled },
            className
          )}
          onClick={() => handleOnChange(option)}
          style={style}
        >
          <div className={classes.radio} id={option.trk} />
          {option.label && (
            <Text
              tag="label"
              className={classnames(classes.label, {
                [classes.overflow]: textOverflow
              })}
            >
              {option.label}
            </Text>
          )}
          {option.right && (
            <Text tag="label" mid className={classes.right}>
              {option.right}
            </Text>
          )}
        </div>
      ))}
    </div>
  )
}

Radio.defaultProps = {
  options: []
}

export default Radio
