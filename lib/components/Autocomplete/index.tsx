import { useState, useEffect, useRef, useCallback, CSSProperties } from 'react'
import cloneDeep from 'lodash/cloneDeep'
import classnames from 'classnames'

import TextField, { TextFieldProps } from '@/components/TextField'
import Droplist, { DroplistProps, Item, Group } from '@/components/Droplist'
import usePrevious from '@/hooks/usePrevious'

import useStyles from './styles'

export interface AutocompleteProps {
  textfieldProps: Pick<
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
    | 'lockHeight'
  >
  droplistProps: Pick<
    DroplistProps,
    'items' | 'groups' | 'className' | 'filter' | 'term'
  >
  onChange?: (item: any) => void
  onKeyUp?: (item: any) => void
  onEnter?: (item: any) => void
  onMouseDown?: (item: any) => void
  onFocus?: () => void
  onBlur?: () => void
  onClear?: () => void
  onRef?: CallableFunction
  disableAutoComplete?: boolean
  showInitialData?: boolean
  id?: string
  className?: string
  style?: CSSProperties
}

const Autocomplete = (props: AutocompleteProps) => {
  const {
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
  } = props
  const classes = useStyles(props)
  const [value, setValue] = useState(textfieldProps.value || '')
  const [focus, setFocus] = useState(false)
  const autocompleteRef = useRef(null)
  const textfieldRef = useRef(null)
  const prevTextfieldProps = usePrevious(textfieldProps) || {}
  const showDropList = showInitialData
    ? focus && droplistProps.items
    : value && focus && droplistProps.items

  useEffect(() => {
    if (textfieldProps.value !== prevTextfieldProps.value)
      setValue(textfieldProps.value)
  }, [textfieldProps.value, prevTextfieldProps.value])

  const _onChange = useCallback(
    value => {
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
    key => {
      if (onKeyUp) onKeyUp(key)
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
          className={classnames(classes.droplist, droplistProps.className)}
        />
      )}
    </div>
  )
}

Autocomplete.defaultProps = {
  textfieldProps: {},
  droplistProps: {},
  disableAutoComplete: false,
  showInitialData: false
}

export default Autocomplete
