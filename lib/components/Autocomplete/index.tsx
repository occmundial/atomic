import {
  useState,
  useEffect,
  useRef,
  useCallback,
  CSSProperties,
  forwardRef,
  useImperativeHandle
} from 'react'
import cloneDeep from 'lodash/cloneDeep'
import classnames from 'classnames'

import TextField, { TextFieldProps } from '@/components/TextField'
import Droplist, { DroplistProps, Item } from '@/components/Droplist'
import usePrevious from '@/hooks/usePrevious'

import useStyles from './styles'

type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>

export interface AutocompleteProps {
  textfieldProps: Optional<
    TextFieldProps,
    | 'id'
    | 'type'
    | 'name'
    | 'label'
    | 'placeholder'
    | 'selectOnFocus'
    | 'clear'
    | 'iconName'
    | 'value'
    | 'className'
    | 'inputClassName'
    | 'disabled'
    | 'testId'
    | 'disableAutoComplete'
  >
  droplistProps: Optional<
    DroplistProps,
    'groups' | 'className' | 'filter' | 'term' | 'testId'
  >
  onChange?: (value: string) => void
  onKeyUp?: (code: string) => void
  onEnter?: (item: any) => void
  onMouseDown?: (item: any) => void
  onFocus?: () => void
  onBlur?: () => void
  onClear?: () => void
  showInitialData?: boolean
  id?: string
  className?: string
  style?: CSSProperties
}

const Autocomplete = forwardRef(
  (
    {
      textfieldProps,
      droplistProps,
      onChange,
      onFocus,
      onBlur,
      onKeyUp,
      onClear,
      onMouseDown,
      onEnter,
      showInitialData,
      id,
      className,
      style
    }: AutocompleteProps,
    ref
  ) => {
    const classes = useStyles()
    const [value, setValue] = useState(textfieldProps.value || '')
    const [focus, setFocus] = useState(false)
    const autocompleteRef = useRef(null)
    const textfieldRef = useRef(null)
    const prevTextfieldProps = usePrevious(textfieldProps) || {}
    const showDropList = showInitialData
      ? focus && !!droplistProps.items.length
      : value && focus && !!droplistProps.items.length

    useEffect(() => {
      if (textfieldProps.value !== prevTextfieldProps.value)
        setValue(textfieldProps.value)
    }, [textfieldProps.value, prevTextfieldProps.value])

    useImperativeHandle(ref, () => ({
      focus: () => textfieldRef.current.focus(),
      blur: () => textfieldRef.current.blur(),
      value,
      setValue
    }))

    const _onChange = useCallback(
      (value: string) => {
        setValue(value)
        setFocus(true)
        if (onChange) onChange(value)
      },
      [onChange]
    )

    const _onFocus = useCallback(() => {
      setFocus(true)
      if (onFocus) onFocus()
    }, [onFocus])

    const _onBlur = useCallback(() => {
      setFocus(false)
      if (onBlur) onBlur()
    }, [onBlur])

    const _onKeyUp = useCallback(
      (code: string) => {
        if (onKeyUp) onKeyUp(code)
      },
      [onKeyUp]
    )

    const _onClear = useCallback(() => {
      setValue('')
      if (onClear) onClear()
    }, [onClear])

    const _onMouseDown = useCallback(
      (item: Item) => {
        setValue(item.text)
        setFocus(false)
        if (onChange) onChange(item.text)
        if (onMouseDown) onMouseDown(item)
      },
      [onChange, onMouseDown]
    )

    const _onEnter = useCallback(
      (item: Item) => {
        setValue(item.text)
        setFocus(false)
        if (onChange) onChange(item.text)
        if (onEnter) onEnter(item)
      },
      [onChange, onEnter]
    )

    const hasBottom =
      textfieldProps.assistiveText ||
      (textfieldProps.counter && textfieldProps.maxLength)

    return (
      <div
        className={classnames(classes.autoComplete, className)}
        id={id}
        style={style}
        ref={autocompleteRef}
      >
        <TextField
          {...textfieldProps}
          value={value}
          ref={textfieldRef}
          onChange={_onChange}
          onFocus={_onFocus}
          onBlur={_onBlur}
          onKeyUp={_onKeyUp}
          onClear={_onClear}
        />
        {showDropList && (
          <Droplist
            {...droplistProps}
            items={cloneDeep(droplistProps.items)}
            term={value}
            onMouseDown={_onMouseDown}
            onEnter={_onEnter}
            isOnFocus
            className={classnames(
              classes.droplist,
              {
                [classes.pushDroplist]: hasBottom
              },
              droplistProps.className
            )}
          />
        )}
      </div>
    )
  }
)

Autocomplete.defaultProps = {
  textfieldProps: {},
  droplistProps: {
    items: []
  },
  showInitialData: false
}

export default Autocomplete
