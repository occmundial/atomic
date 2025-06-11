import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useMemo,
  CSSProperties
} from 'react'
import classnames from 'classnames'

import Icon from '@/components/Icon'
import usePrevious from '@/hooks/usePrevious'
import useIcon from '@/hooks/useIcon'

import newColors from '@/tokens/ct/colors.json'
import useStyles from './styles'
import Droplist, { Item } from '../Droplist'

export interface OptionProps {
  key: string | number
  label: string
  value: string
  disabled?: boolean
  options?: OptionProps[]
}

export interface SelectProps {
  value?: string
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: (value: string) => void
  onMouseDown?: (item: any) => void
  onEnter?: (item: any) => void
  options?: OptionProps[]
  placeholder?: string
  disabled?: boolean
  label?: string
  testId?: string
  className?: string
  inputClassName?: string
  id?: string
  style?: CSSProperties
}

const Select = forwardRef<HTMLInputElement, SelectProps>(
  (
    {
      value = '',
      onChange,
      onFocus,
      onBlur,
      onMouseDown,
      onEnter,
      options = [],
      placeholder,
      disabled,
      label,
      testId,
      className,
      inputClassName,
      id,
      style
    },
    ref
  ) => {
    const classes = useStyles()
    const [status, setStatus] = useState<'default' | 'focus'>('default')
    const [_value, setValue] = useState(value)
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const valueRef = useRef<string>()
    const prevDisabled = usePrevious(disabled)
    const getIcon = useIcon()

    useEffect(() => {
      valueRef.current = _value
    })

    useEffect(() => {
      if (value !== valueRef.current) setValue(value)
    }, [value])

    useEffect(() => {
      if (disabled && !prevDisabled) setStatus('default')
    }, [disabled, prevDisabled])

    useImperativeHandle(ref, () => inputRef.current)

    const _onFocus = useCallback(
      (open: boolean) => {
        if (disabled) return
        setStatus('focus')
        setIsOpen(!open)
        onFocus?.()
      },
      [disabled, onFocus]
    )

    const _onBlur = useCallback(() => {
      setStatus('default')
      setIsOpen(false)
      onBlur?.(_value)
    }, [onBlur, _value])

    const _onMouseDown = useCallback(
      (item: Item) => {
        setValue(item.text)
        setIsOpen(false)
        if (onChange) onChange(item.text)
        if (onMouseDown) onMouseDown(item)
      },
      [onChange, onMouseDown]
    )

    const _onEnter = useCallback(
      (item: Item) => {
        setValue(item.text)
        setIsOpen(false)
        if (onChange) onChange(item.text)
        if (onEnter) onEnter(item)
      },
      [onChange, onEnter]
    )

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        _onBlur()
      }
    }

    useEffect(() => {
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside)
      } else {
        document.removeEventListener('mousedown', handleClickOutside)
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [isOpen])

    const handleSelect = useCallback(
      (item: { id: string; text: string }) => {
        setValue(item.text)
        setIsOpen(false)
        setStatus('default')
        onChange?.(item.id)
      },
      [onChange]
    )

    const selectedLabel = useMemo(() => {
      return options.find(opt => opt.label === _value)?.label || ''
    }, [_value, options])

    const droplistItems = options.map(item => ({
      id: item.value,
      text: item.label,
      disabled: item.disabled
    }))

    const _className = classnames(classes.container, classes[status], className)

    const _inputClassName = classnames(
      classes.input,
      classes.select,
      inputClassName
    )

    const iconColor = disabled
      ? newColors.icon.default.disabled
      : newColors.icon.default.bold

    return (
      <div
        className={_className}
        style={style}
        ref={containerRef}
        data-testid={testId}
      >
        {label && (
          <div className={classes.top}>
            <label className={classes.label}>{label}</label>
          </div>
        )}
        <div className={classes.inputWrap} onClick={() => _onFocus(isOpen)}>
          <div className={_inputClassName} id={id}>
            {_value ? selectedLabel : placeholder}
          </div>
          <Icon
            iconName={getIcon('arrow-down', 'chevron-down')}
            size={24}
            className={classes.selectIcon}
            color={iconColor}
          />
        </div>
        {isOpen && (
          <Droplist
            items={droplistItems}
            onClick={handleSelect}
            onMouseDown={_onMouseDown}
            onEnter={_onEnter}
            onNavigate={item => item && setValue(item?.text || '')}
            onMouseUp={_onMouseDown}
            isOnFocus
            testId={`${testId}__droplist`}
            selectedValue={_value}
          />
        )}
      </div>
    )
  }
)

export default Select
