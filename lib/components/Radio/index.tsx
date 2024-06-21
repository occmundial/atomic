import { useEffect, useRef, useState, useCallback, CSSProperties } from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Tag from '@/components/Tag'

import useStyles from './styles'

interface RadioOption {
  label?: string
  value?: string | number
  right?: string
  tag?: string
  trk?: string
  testId?: string
  disabled?: boolean
}

interface RadioProps {
  selected?: string | number
  onChange?: (value: string | number) => void
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

  const handleKeyDown = e => {
    if (e.keyCode == 13 || e.keyCode == 32) {
      e.preventDefault()
    }
  }

  const handleKeyUp = (e, option) => {
    if (e.keyCode == 13 || e.keyCode == 32) {
      handleOnChange(option)
    }
  }

  return (
    <div id={id}>
      {options.map(option => (
        <div
          id={option.trk}
          tabIndex={option.disabled ? -1 : 0}
          data-testid={option.testId}
          key={option.value}
          className={classnames(
            classes.cont,
            { [classes.active]: option.value === _selected },
            { [classes.disabled]: option.disabled },
            className
          )}
          onClick={() => handleOnChange(option)}
          onKeyDown={handleKeyDown}
          onKeyUp={e => handleKeyUp(e, option)}
          style={style}
        >
          <div className={classes.radioWrap}>
            <div className={classes.radio}>
              <div className={classes.radioOuter} />
              <div className={classes.radioInner} />
            </div>
          </div>
          {!!(option.label || option.right || option.tag) && (
            <div className={classes.labelWrap}>
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
                <Text tag="label" corpSecondary className={classes.right}>
                  {option.right}
                </Text>
              )}
              {option.tag && (
                <Tag theme="link" className={classes.tag}>
                  {option.tag}
                </Tag>
              )}
            </div>
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
