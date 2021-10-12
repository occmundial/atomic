import { useCallback, useMemo, CSSProperties, ReactElement } from 'react'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'
import Text from '@/components/Text'
import Icon from '@/components/Icon'
import colors from '@/tokens/colors'

import useStyles from './styles'

const boldRegex = /\*(.*?)\*/g
const icons = {
  info: 'infoSolid',
  warning: 'warning',
  success: 'checkSolid',
  error: 'crossSolid',
  promote: null
}

interface AlertProps {
  theme?: 'info' | 'warning' | 'success' | 'error'
  children: ReactElement | string
  icon?: boolean
  id?: string
  className?: string
  style?: CSSProperties
}

const Alert = ({ id, style, className, icon, theme, children }: AlertProps) => {
  const classes = useStyles()
  const themeObj = useMemo(() => ({ [theme]: true }), [theme])
  const iconColor = useMemo(() => [colors[`${theme}Text`]], [theme])
  const iconName = useMemo(() => icons[theme], [theme])

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
          <Icon
            iconName={iconName}
            className={classes.icon}
            colors={iconColor}
          />
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
