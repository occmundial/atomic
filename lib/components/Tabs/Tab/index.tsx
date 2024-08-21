import classNames from 'classnames'

import Icon from '@/components/Icon'
import { useTabsContext } from '../context'
import useStyles from './styles'

interface TabProps {
  title: string
  size?: 'large' | 'medium' | 'small'
  onClick?: (value: any) => void
  value?: any
  icon?: string
  counter?: string
  disabled?: boolean
  id?: string
  testId?: string
}

export default function Tab(props: TabProps) {
  const { currentValue, setCurrentValue } = useTabsContext()
  const classes = useStyles()

  const { title, size, counter, icon, id, testId, value, onClick, disabled } =
    props
  const iconSize = size === 'small' ? 16 : 24

  const onClickHandler = () => {
    if (!disabled) {
      setCurrentValue(value)
      if (onClick) onClick(value)
    }
  }

  return (
    <button
      role="tab"
      onClick={onClickHandler}
      disabled={disabled}
      className={classNames(classes.button, classes[size], {
        [classes.selected]: value === currentValue,
        [classes.enabled]: !disabled,
        [classes.disabled]: disabled
      })}
      id={id}
      tabIndex={value === currentValue ? 0 : -1}
      data-testid={testId}
    >
      {icon ? (
        <Icon
          size={iconSize}
          iconName={icon}
          className={classNames(classes.icon, {
            [classes.iconDisabled]: disabled
          })}
          transition="all cubic-bezier(0.25,0.46,0.45,0.94) 0.2s"
        />
      ) : (
        ''
      )}
      {title}
      {counter ? <span>{counter}</span> : ''}
    </button>
  )
}
