import { useCallback, useMemo, CSSProperties, ReactElement } from 'react'
import isString from 'lodash/isString'
import flatten from 'lodash/flatten'
import classnames from 'classnames'

import Flexbox from '../Flexbox'
import Text from '../Text'
import Icon from '../Icon'
import colors from '@/tokens/colors'

import useStyles from './styles'

const boldRegex = /\*(.*?)\*/g

interface AlertProps {
  theme?: 'info' | 'warning' | 'success' | 'error'
  children: ReactElement | string
  icon?: string
  id?: string
  className?: string
  style?: CSSProperties
}

const Alert = ({ id, style, className, icon, theme, children }: AlertProps) => {
  const classes = useStyles()
  const themeObj = useMemo(() => ({ [theme]: true }), [theme])
  const iconColor = useMemo(() => [colors[`${theme}Text`]], [theme])

  const boldMatch = useCallback(
    (match, i) => {
      return (
        <Text key={i} strong tag="b" {...themeObj}>
          {match}
        </Text>
      )
    },
    [themeObj]
  )

  const replaceStringToBold = useCallback(
    text => {
      if (text === '') return text
      const chunks = text.split(boldRegex)
      if (chunks.length === 1) return text
      return chunks.map((chunk: string, i: number) =>
        i % 2 === 0 ? chunk : boldMatch(chunk, i)
      ) as (JSX.Element | string)[]
    },
    [boldMatch]
  )

  const renderText = useCallback(() => {
    if (typeof children === 'string') return replaceStringToBold(children)
    return children
  }, [children, replaceStringToBold])

  return (
    <div id={id} className={className} style={style}>
      <Flexbox
        display="flex"
        justifyContent="start"
        className={classnames(classes.container, classes[theme])}
      >
        {icon && (
          <Icon iconName={icon} className={classes.icon} colors={iconColor} />
        )}
        <Flexbox flex="1">
          <Text standard tag="div" {...themeObj}>
            {renderText()}
          </Text>
        </Flexbox>
      </Flexbox>
    </div>
  )
}

Alert.defaultProps = {
  theme: 'info'
}

export default Alert
