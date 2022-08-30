import {
  useState,
  useEffect,
  CSSProperties,
  useCallback,
  MouseEvent,
  useMemo
} from 'react'
import classnames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Flexbox from '@/components/Flexbox'
import Card from '@/components/Card'
import colors from '@/tokens/colors'
import iconSizes from '@/tokens/iconSizes'

import useStyles from './styles'

interface Option {
  value: string | number
  text: string
}

interface OrderByProps {
  text?: string
  options?: Option[]
  selected?: string | number
  onChange?: (value: string | number) => void
  iconName?: string
  hideSelectedText?: boolean
  id?: string
  className?: string
  style?: CSSProperties
}

const OrderBy = ({
  onChange,
  options,
  selected,
  text,
  iconName,
  hideSelectedText,
  id,
  className,
  style
}: OrderByProps) => {
  const classes = useStyles()
  const [display, setDisplay] = useState(false)

  const hideCard = useCallback(() => {
    setDisplay(false)
    window.removeEventListener('click', hideCard)
  }, [])

  useEffect(
    () => () => window.removeEventListener('click', hideCard),
    [hideCard]
  )

  const toggleCard = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation()
      if (!display) {
        window.addEventListener('click', hideCard)
      }
      setDisplay(!display)
    },
    [display, hideCard]
  )

  const handleOnChange = useCallback(
    (value: string | number) => {
      if (onChange) onChange(value)
      hideCard()
    },
    [onChange, hideCard]
  )

  const stopPropagation = useCallback((e: MouseEvent) => {
    e.stopPropagation()
  }, [])

  const selectedOption = useMemo(
    () => options.filter(option => option.value == selected),
    [options, selected]
  )

  const selectedText = useMemo(
    () =>
      selectedOption.length && selectedOption[0].text
        ? selectedOption[0].text
        : '',
    [selectedOption]
  )

  return (
    <div className={classnames(classes.wrap, className)} id={id} style={style}>
      <div className={classes.button} onClick={toggleCard}>
        <Flexbox display="inline-flex">
          <Text small>
            {text}{' '}
            {!hideSelectedText && (
              <Text small strong tag="span">
                {selectedText}
              </Text>
            )}
          </Text>
          <Icon
            iconName={iconName}
            size={iconSizes.tiny}
            color={colors.grey800}
            className={classes.icon}
          />
        </Flexbox>
      </div>
      <div
        onClick={stopPropagation}
        className={classnames(classes.cardWrap, { [classes.show]: display })}
      >
        <Card className={classes.card}>
          {options.map(option => (
            <div
              className={classes.option}
              key={option.value}
              onClick={() => {
                handleOnChange(option.value)
              }}
            >
              <Text className={option.value === selected ? classes.link : ''}>
                {option.text}
              </Text>
            </div>
          ))}
        </Card>
      </div>
    </div>
  )
}

OrderBy.defaultProps = {
  iconName: 'arrowDown'
}

export default OrderBy
