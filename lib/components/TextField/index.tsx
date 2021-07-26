import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useMemo,
  ReactNode,
  CSSProperties
} from 'react'
import MaskedInput from 'react-text-mask'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import colors from '@/tokens/colors'
import iconSizes from '@/tokens/iconSizes'
import usePrevious from '@/hooks/usePrevious'

import useStyles from './styles'

export interface TextFieldProps {
  type?: string
  maxLength?: number
  label?: string
  placeholder?: string
  assistiveText?: ReactNode
  name?: string
  disabled?: boolean
  counter?: boolean
  autoFocus?: boolean
  clear?: boolean
  error?: boolean
  allowError?: boolean
  lockHeight?: boolean
  value?: string
  selectOnFocus?: boolean
  mask?: any
  guide?: boolean
  disableAutoComplete?: boolean
  onFocus?: () => void
  onBlur?: (item: any) => void
  onChange?: (item: any) => void
  onKeyUp?: (item: any) => void
  onClear?: () => void
  options?: any[]
  iconName?: string
  inputClassName?: string
  hjWhitelist?: boolean
  regex?: string
  required?: boolean
  alignRight?: boolean
  inputMode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url'
  id?: string
  className?: string
  style?: CSSProperties
}

const TextField = forwardRef(
  (
    {
      className,
      value,
      disabled,
      onFocus,
      selectOnFocus,
      onBlur,
      onChange,
      onKeyUp,
      onClear,
      regex,
      iconName,
      clear,
      type,
      inputClassName,
      alignRight,
      hjWhitelist,
      label,
      placeholder,
      counter,
      maxLength,
      name,
      options,
      id,
      style,
      autoFocus,
      error,
      assistiveText,
      allowError,
      lockHeight,
      required,
      mask,
      guide,
      disableAutoComplete,
      inputMode
    }: TextFieldProps,
    ref
  ) => {
    const classes = useStyles()
    const [status, setStatus] = useState('default')
    const [_value, setValue] = useState(value || '')
    const [touched, setTouched] = useState(false)
    const [showPass, setShowPass] = useState(false)
    const [passIconBeingClicked, setPassIconBeingClicked] = useState(false)
    const prevDisabled = usePrevious(disabled)
    const inputRef = useRef(null)
    const valueRef = useRef<string>()

    useEffect(() => {
      valueRef.current = _value
    })

    useEffect(() => {
      if (value !== valueRef.current) setValue(value)
    }, [value])

    useEffect(() => {
      if (disabled && !prevDisabled) setStatus('default')
    }, [disabled, prevDisabled])

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current.focus(),
      blur: () => inputRef.current.blur()
    }))

    const _onFocus = useCallback(
      ({ target }) => {
        if (selectOnFocus) target.select()
        setStatus('focus')
        setTouched(true)
        if (onFocus) onFocus()
      },
      [onFocus, selectOnFocus]
    )

    const _onBlur = useCallback(
      ({ target: { value } }) => {
        setValue(value)
        setStatus('default')
        if (onBlur) onBlur(value)
      },
      [onBlur]
    )

    const _onChange = useCallback(
      ({ target: { value } }) => {
        let valid = true
        if (regex) valid = new RegExp(regex).test(value)
        if (valid) {
          setValue(value)
          if (onChange) onChange(value)
        }
      },
      [onChange, regex]
    )

    const _onKeyUp = useCallback(
      ({ which, keyCode }) => {
        if (onKeyUp) onKeyUp(which || keyCode)
      },
      [onKeyUp]
    )

    const _onClear = useCallback(() => {
      setValue('')
      setStatus('default')
      if (onClear) onClear()
    }, [onClear])

    const togglePass = useCallback(() => {
      setShowPass(!showPass)
      setPassIconBeingClicked(true)
    }, [showPass])

    const focusInput = useCallback(() => {
      setPassIconBeingClicked(false)
      inputRef.current.focus()
    }, [])

    const outOfPassIcon = useCallback(() => setPassIconBeingClicked(false), [])

    const errorStatus = useMemo(
      () => error && (touched || allowError) && !passIconBeingClicked,
      [allowError, error, passIconBeingClicked, touched]
    )

    const realStatus = useMemo(
      () =>
        disabled
          ? 'disabled'
          : status !== 'focus' && errorStatus
          ? 'error'
          : status,
      [status, disabled, errorStatus]
    )

    const InputType = useMemo(
      () =>
        type == 'select' ? 'select' : type == 'textarea' ? 'textarea' : 'input',
      [type]
    )

    const _className = useMemo(
      () => classnames(classes.container, classes[realStatus], className),
      [className, classes, realStatus]
    )

    const _inputClassName = useMemo(
      () =>
        classnames(
          classes.input,
          { [classes.hasIcon]: iconName },
          { [classes.hasClear]: clear },
          { [classes.alignRight]: alignRight },
          { [classes.select]: type === 'select' },
          { [classes.textarea]: type === 'textarea' },
          { [classes.hasPass]: type === 'password' },
          { 'data-hj-whitelist': hjWhitelist },
          inputClassName
        ),
      [
        alignRight,
        classes.alignRight,
        classes.hasClear,
        classes.hasIcon,
        classes.hasPass,
        classes.input,
        classes.select,
        classes.textarea,
        clear,
        hjWhitelist,
        iconName,
        inputClassName,
        type
      ]
    )

    const commonProps = useMemo(
      () => ({
        name,
        id,
        className: _inputClassName,
        value,
        autoFocus,
        maxLength,
        onFocus: _onFocus,
        onBlur: _onBlur,
        onChange: _onChange,
        onKeyUp: _onKeyUp,
        ref: inputRef,
        inputMode,
        required
      }),
      [
        name,
        id,
        _inputClassName,
        value,
        autoFocus,
        maxLength,
        _onFocus,
        _onBlur,
        _onChange,
        _onKeyUp,
        inputMode,
        required
      ]
    )

    const element = useMemo(() => {
      if (disabled) {
        if (type === 'select') {
          const selectedOption = options.filter(
            option => option.value == _value
          )
          let optionLabel
          if (selectedOption.length) optionLabel = selectedOption[0].label
          return (
            <label
              className={classnames(classes.input, {
                [classes.hasIcon]: iconName
              })}
            >
              {optionLabel ? optionLabel : _value ? _value : placeholder}
            </label>
          )
        } else
          return (
            <label
              className={classnames(
                classes.input,
                { [classes.textarea]: type === 'textarea' },
                { [classes.hasIcon]: iconName }
              )}
            >
              {_value ? _value : placeholder}
            </label>
          )
      } else if (type === 'select')
        return (
          <InputType {...commonProps}>
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options.map(item =>
              item.grouped ? (
                <optgroup
                  key={item.key}
                  label={item.label}
                  disabled={item.disabled}
                >
                  {item.options.map(option => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ) : (
                <option
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                >
                  {item.label}
                </option>
              )
            )}
          </InputType>
        )
      else if (mask)
        return (
          <MaskedInput
            {...commonProps}
            placeholder={placeholder}
            type="text"
            mask={mask}
            guide={guide}
          />
        )
      else
        return (
          <InputType
            {...commonProps}
            placeholder={placeholder}
            type={type == 'password' && showPass ? 'text' : type}
            {...(disableAutoComplete && { autoComplete: 'off' })}
          />
        )
    }, [
      classes.hasIcon,
      classes.input,
      classes.textarea,
      commonProps,
      disableAutoComplete,
      disabled,
      guide,
      iconName,
      mask,
      options,
      placeholder,
      showPass,
      type,
      _value,
      InputType
    ])

    const passIcon = useMemo(
      () =>
        disabled ? (
          type !== 'select' ? (
            <div className={classes.passIcon}>
              <Icon
                iconName="eye"
                width={iconSizes.small}
                height={iconSizes.small}
                colors={[colors.grey100]}
              />
            </div>
          ) : null
        ) : type !== 'select' ? (
          <div
            onMouseDown={togglePass}
            onMouseUp={focusInput}
            onMouseOut={outOfPassIcon}
            className={classes.passIcon}
          >
            <Icon
              iconName="eye"
              width={iconSizes.small}
              height={iconSizes.small}
              colors={showPass ? [colors.grey500] : [colors.grey200]}
            />
          </div>
        ) : null,
      [
        classes.passIcon,
        disabled,
        focusInput,
        outOfPassIcon,
        showPass,
        togglePass,
        type
      ]
    )

    return (
      <div className={_className} style={style}>
        {(label || lockHeight) && (
          <div className={classes.top}>
            {label && (
              <Text
                small
                tag="label"
                disabled={disabled}
                className={classnames(classes.label, classes.left)}
              >
                {label}
              </Text>
            )}
          </div>
        )}
        <div className={classes.inputWrap}>
          {iconName && (
            <Icon
              iconName={iconName}
              width={iconSizes.base}
              height={iconSizes.base}
              className={classes.icon}
              colors={[colors.grey500]}
            />
          )}
          {type == 'select' && (
            <div className={classes.selectIcon}>
              <Icon
                iconName="arrowDown"
                width={iconSizes.small}
                height={iconSizes.small}
                colors={disabled ? [colors.grey200] : [colors.grey900]}
              />
            </div>
          )}
          {type == 'password' && passIcon}
          {_value && clear && (
            <div onClick={_onClear} className={classes.clear}>
              <Icon iconName="close" />
            </div>
          )}
          {element}
        </div>
        {(assistiveText || (counter && maxLength) || lockHeight) && (
          <div className={classes.bottom}>
            {assistiveText && (
              <Text
                small
                tag="label"
                disabled={disabled && realStatus !== 'error'}
                low={!disabled && realStatus !== 'error'}
                error={!disabled && realStatus === 'error'}
                className={classnames(classes.label, classes.left)}
              >
                {realStatus == 'error' ? (
                  <Icon
                    iconName="warning"
                    width={iconSizes.tiny}
                    height={iconSizes.tiny}
                    className={classes.errorIcon}
                  />
                ) : null}{' '}
                {assistiveText}
              </Text>
            )}
            {counter && maxLength && (
              <Text
                small
                tag="label"
                disabled={disabled}
                low={!disabled}
                className={classnames(classes.label, classes.right)}
              >
                {_value.length} / {maxLength}
              </Text>
            )}
          </div>
        )}
      </div>
    )
  }
)

TextField.defaultProps = {
  type: 'text',
  value: '',
  options: [],
  hjWhitelist: true
}

export default TextField
