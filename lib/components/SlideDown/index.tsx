import { useState, useEffect, ReactNode, useCallback, useMemo } from 'react'
import classNames from 'classnames'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Tag from '@/components/Tag'
import Flexbox from '@/components/Flexbox'
import colors from '@/tokens/colors'
import usePrevious from '@/hooks/usePrevious'

import useStyles from './styles'

interface SlideDownProps {
  children: ReactNode
  title?: string
  expanded?: boolean
  tag?: string
  onToggle?: (value: boolean) => void
  textSize?: 'sm' | 'md' | 'lg'
  strong?: boolean
  theme?: 'default' | 'blue'
  noJustified?: boolean
}

const SlideDown = ({
  children,
  expanded,
  title,
  tag,
  onToggle,
  textSize,
  theme,
  strong,
  noJustified
}: SlideDownProps) => {
  const classes = useStyles()
  const [_expanded, setExpanded] = useState(expanded)
  const [toggled, setToggled] = useState(expanded)
  const prevExpanded = usePrevious(expanded)

  const toggleContent = useCallback(
    (value: boolean) => {
      if (value) setExpanded(value)
      else setToggled(value)
      if (onToggle) onToggle(value)
      setTimeout(
        () => {
          if (value) setToggled(value)
          else setExpanded(value)
        },
        value ? 0 : 300
      )
    },
    [onToggle]
  )

  useEffect(() => {
    if (prevExpanded !== expanded) {
      toggleContent(expanded)
    }
  }, [expanded, prevExpanded, toggleContent])

  const _textSize = useMemo(() => {
    switch (textSize) {
      case 'md':
        return { standard: true }
      case 'lg':
        return { large: true }
      case 'sm':
        return { small: true }
      default:
        return { standard: true }
    }
  }, [textSize])

  const textTheme = useMemo(() => {
    switch (theme) {
      case 'blue':
        return { link: true }
      case 'default':
      default:
        return null
    }
  }, [theme])

  const iconColor = useMemo(() => {
    switch (theme) {
      case 'blue':
        return colors.textLink
      case 'default':
      default:
        return colors.grey900
    }
  }, [theme])

  const textProps = useMemo(
    () => ({ ..._textSize, ...textTheme }),
    [_textSize, textTheme]
  )

  return (
    <div className={classes.wrapper}>
      <div className={classes.button} onClick={() => toggleContent(!_expanded)}>
        <Flexbox
          display="flex"
          justifyContent={!noJustified ? 'between' : null}
          alignItems="start"
        >
          <Flexbox display="flex" alignItems="center">
            <Flexbox display="flex" alignItems="start" wrap="wrap">
              <div>
                <Text
                  {...textProps}
                  strong={strong}
                  tag="label"
                  className={classes.text}
                >
                  {title}
                </Text>
                {tag && (
                  <Tag theme="info" className={classes.tag}>
                    {tag}
                  </Tag>
                )}
              </div>
            </Flexbox>
          </Flexbox>
          <Flexbox flex="0 0 auto">
            <Icon
              iconName="chevron-down"
              color={iconColor}
              className={classes.icon}
              style={{ transform: toggled ? 'rotate(180deg)' : '' }}
            />
          </Flexbox>
        </Flexbox>
      </div>
      {_expanded && (
        <div
          className={classNames(
            classes.content,
            { [classes.show]: toggled },
            { [classes.hide]: !toggled }
          )}
        >
          {children}
        </div>
      )}
    </div>
  )
}

SlideDown.defaultProps = {
  textSize: 'md',
  theme: 'default',
  noJustified: false
}

export default SlideDown
