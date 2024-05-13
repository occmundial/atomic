import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useMemo,
  createElement,
  ReactNode,
  CSSProperties,
  KeyboardEvent
} from 'react'
import MaskedInput from 'react-text-mask'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import colors from '@/tokens/colors'
import iconSizes from '@/tokens/iconSizes'
import usePrevious from '@/hooks/usePrevious'

import newColors from '@/tokens/future/colors.json'

import useStyles from './styles'
import useIcon from '@/hooks/useIcon'

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
  pattern?: string
  inputMode?:
    | 'text'
    | 'none'
    | 'search'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
  disableAutoComplete?: boolean
  onFocus?: () => void
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  onKeyUp?: (code: string) => void
  onClear?: () => void
  options?: any[]
  iconName?: string
  searchField?: boolean
  inputClassName?: string
  regex?: string | RegExp
  required?: boolean
  alignRight?: boolean
  id?: string
  className?: string
  style?: CSSProperties
  testId?: string
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
      pattern,
      searchField,
      inputMode,
      disableAutoComplete,
      testId
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
    const inputRef = useRef<HTMLInputElement>(null)
    const valueRef = useRef<string>()

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

    useImperativeHandle(ref, () => ({
      focus: (options?: FocusOptions) => inputRef.current.focus(options),
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
      ({ code }: KeyboardEvent) => {
        if (onKeyUp) onKeyUp(code)
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
          : status !== 'focus' && searchField && value
          ? 'filled'
          : status,
      [status, disabled, errorStatus, searchField, value]
    )

    const inputType = useMemo(
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
          { [classes.searchField]: searchField },
          { [classes.searchFieldHasIcon]: searchField && iconName },
          { [classes.select]: type === 'select' },
          { [classes.textarea]: type === 'textarea' },
          { [classes.hasPass]: type === 'password' },
          inputClassName
        ),
      [alignRight, classes, clear, iconName, inputClassName, type, searchField]
    )

    const setIconColor = useMemo(() => {
      if (disabled) return newColors.icon.default.disabled
      if (status === 'focus') return newColors.icon.brand.bold
      return newColors.icon.default.default
    }, [disabled, status])

    const commonProps = useMemo(
      () => ({
        name,
        id,
        className: _inputClassName,
        value: _value,
        autoFocus,
        maxLength,
        onFocus: _onFocus,
        onBlur: _onBlur,
        onChange: _onChange,
        onKeyUp: _onKeyUp,
        ref: inputRef,
        required,
        pattern,
        inputMode,
        'data-testid': testId
      }),
      [
        name,
        id,
        _inputClassName,
        _value,
        autoFocus,
        maxLength,
        _onFocus,
        _onBlur,
        _onChange,
        _onKeyUp,
        required,
        pattern,
        inputMode,
        testId
      ]
    )

    const element = useMemo(() => {
      if (disabled) {
        if (type === 'select') {
          const selectedOption = options.filter(
            option => option.value == _value
          )
          let optionLabel: string
          if (selectedOption.length) optionLabel = selectedOption[0].label
          return (
            <label
              className={classnames(classes.input, {
                [classes.hasIcon]: iconName
              })}
            >
              <div
                className={classnames(
                  classes.inputDisabled,
                  classes.hasRightIcon
                )}
              >
                {optionLabel ? optionLabel : _value ? _value : placeholder}
              </div>
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
              <div className={classes.inputDisabled}>
                {_value ? _value : placeholder}
              </div>
            </label>
          )
      } else if (type === 'select')
        return createElement(inputType, {
          ...commonProps,
          children: (
            <>
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
                        {...(testId && {
                          'data-testid': `${testId}__item-${item.value}`
                        })}
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
                    {...(testId && {
                      'data-testid': `${testId}__item-${item.value}`
                    })}
                  >
                    {item.label}
                  </option>
                )
              )}
            </>
          )
        })
      else if (mask) {
        const { ref, ...remainingProps } = commonProps
        return (
          <MaskedInput
            {...remainingProps}
            placeholder={placeholder}
            type={type === 'password' && showPass ? 'text' : type}
            {...(disableAutoComplete && { autoComplete: 'off' })}
            mask={mask}
            guide={guide}
            render={(textMaskRef, props) => (
              <input
                {...props}
                ref={node => {
                  textMaskRef(node)
                  ref.current = node
                }}
              />
            )}
          />
        )
      } else
        return createElement(inputType, {
          ...commonProps,
          placeholder,
          type: type === 'password' && showPass ? 'text' : type,
          ...(disableAutoComplete && { autoComplete: 'off' })
        })
    }, [
      classes,
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
      inputType,
      testId
    ])

    const passIcon = useMemo(
      () =>
        disabled ? (
          type !== 'select' ? (
            <Button
              theme="ghost"
              iconLeft={getIcon('eye-o', 'eye')}
              size="md"
              disabled
              className={classes.rightButton}
            />
          ) : null
        ) : type !== 'select' ? (
          <Button
            onClick={togglePass}
            onMouseUp={focusInput}
            onMouseOut={outOfPassIcon}
            iconLeft={
              showPass
                ? getIcon('eye-o', 'eye')
                : getIcon('eye-close-o', 'eye-slash')
            }
            theme="ghost"
            size="md"
            className={classes.rightButton}
          />
        ) : null,
      [
        classes.rightButton,
        disabled,
        showPass,
        togglePass,
        focusInput,
        outOfPassIcon,
        type,
        getIcon
      ]
    )

    return (
      <div className={_className} style={style}>
        {(label || lockHeight) && (
          <div className={classes.top}>
            {label && (
              <Text bodySmallStrong corpPrimary tag="label">
                {label}
              </Text>
            )}
          </div>
        )}
        <div className={classes.inputWrap}>
          {iconName && (
            <Icon
              iconName={iconName}
              size={24}
              className={classes.icon}
              color={setIconColor}
            />
          )}
          {type == 'select' && (
            <div className={classes.selectIcon}>
              <Icon
                iconName={getIcon('arrow-down', 'chevron-down')}
                size={iconSizes.small}
                color={disabled ? colors.grey200 : colors.grey900}
              />
            </div>
          )}
          {element}
          {type == 'password' && passIcon}
          {_value && clear && (
            <Button
              iconLeft="x"
              theme="ghost"
              onClick={_onClear}
              size="md"
              className={classes.rightButton}
              {...(testId && {
                testId: `${testId}__container-close-icon`
              })}
            />
          )}
        </div>
        {(assistiveText || (counter && maxLength) || lockHeight) && (
          <div className={classes.bottom}>
            <span className={classes.assistiveText}>
              {assistiveText && (
                <Text
                  bodySmallStrong
                  tag="label"
                  corpSecondary={realStatus !== 'error'}
                  error={realStatus === 'error'}
                >
                  {realStatus == 'error' ? (
                    <Icon
                      iconName={getIcon('warning', 'alert')}
                      size={iconSizes.tiny}
                      className={classes.errorIcon}
                    />
                  ) : null}{' '}
                  {assistiveText}
                </Text>
              )}
            </span>
            {counter && maxLength && (
              <Text
                bodySmallStrong
                tag="label"
                corpSecondary
                className={classes.label}
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
  options: []
}

export default TextField
