import React, {
  useEffect,
  useState,
  CSSProperties,
  ReactNode,
  useRef,
  useCallback,
  useMemo
} from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'

import useStyles from './styles'
import colors from '@/tokens/future/colors.json'
import useIcon from '@/hooks/useIcon'

const ICON_SIZE = 16

interface ToggleProps {
  value?: boolean
  onChange?: (value: boolean) => void
  disabled?: boolean
  label?: ReactNode
  trk?: string
  id?: string
  className?: string
  style?: CSSProperties
}

const { icon } = colors

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
      if (onChange) onChange(!_value)
    }
  }, [onChange, disabled, _value])

  const iconColor = useMemo(() => {
    if (disabled) return icon.default.disabled
    return _value ? icon.brand.bold : icon.brand.disabled
  }, [disabled, _value])

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
      onClick={toggle}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      className={classnames(
        classes.cont,
        { [classes.disabled]: disabled },
        className
      )}
      style={style}
    >
      <div className={classes.switchWrap}>
        <div
          id={trk}
          className={classnames(classes.switch, { [classes.checked]: _value })}
        >
          <div className={classes.switchBg}>
            <span className={classes.slider}>
              <Icon
                iconName={
                  _value
                    ? getIcon('check-o', 'check')
                    : getIcon('x-micro-o', 'x')
                }
                className={classes.icon}
                size={ICON_SIZE}
                color={iconColor}
              />
            </span>
          </div>
        </div>
      </div>
      {label && (
        <div className={classes.labelWrap}>
          <Text tag="label" className={classes.label}>
            {label}
          </Text>
        </div>
      )}
    </div>
  )
}

export default Toggle
