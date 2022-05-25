import { useCallback, useMemo, CSSProperties, ReactElement } from 'react'
import classnames from 'classnames'

import Flexbox from '@/components/Flexbox'
import Text from '@/components/Text'
import Icon from '@/components/Icon'

import useStyles from './styles'
import iconSizes from '@/tokens/iconSizes'

const boldRegex = /\*(.*?)\*/g
const icons = {
  info: 'info',
  warning: 'warning',
  success: 'check',
  error: 'x-micro',
  promote: null
}

interface AlertAction {
  href?: string
  target?: string
  onClick?: () => void
  text?: string
}

interface AlertProps {
  theme?: 'info' | 'warning' | 'success' | 'error' | 'promote'
  children: ReactElement | string
  icon?: boolean
  noBorderRadius?: boolean
  center?: boolean
  onClose?: () => void
  spacedClose?: boolean
  cta?: AlertAction
  id?: string
  className?: string
  style?: CSSProperties
}

const Alert = ({
  id,
  style,
  className,
  icon,
  theme,
  children,
  noBorderRadius,
  center,
  onClose,
  spacedClose,
  cta
}: AlertProps) => {
  const classes = useStyles()
  const iconName = useMemo(() => icons[theme], [theme])

  const boldMatch = useCallback((match, i) => {
    return (
      <Text key={i} strong tag="b" current>
        {match}
      </Text>
    )
  }, [])

  const replaceStringToBold = useCallback(
    text => {
      if (text === '') return [text]
      const chunks = text.split(boldRegex)
      if (chunks.length === 1) return [text]
      return chunks.map((chunk: string, i: number) =>
        i % 2 === 0 ? chunk : boldMatch(chunk, i)
      ) as (JSX.Element | string)[]
    },
    [boldMatch]
  )

  const renderText = useCallback(() => {
    let text: any[] = []
    if (typeof children === 'string') text = replaceStringToBold(children)
    else text = [children]

    if (cta) {
      text.push(
        <>
          {' '}
          <Text tag="span" current>
            <a
              className={classes.cta}
              href={cta.href}
              target={cta.target}
              onClick={cta.onClick}
            >
              {cta.text}
            </a>
          </Text>
        </>
      )
    }
    return text
  }, [classes, children, replaceStringToBold, cta])

  return (
    <div id={id} className={className} style={style}>
      <Flexbox
        display="flex"
        justifyContent="start"
        className={classnames(classes.container, classes[theme], {
          [classes.noBorderRadius]: noBorderRadius
        })}
      >
        <Flexbox
          display="flex"
          flex="1"
          justifyContent={center ? 'center' : null}
          alignItems="center"
        >
          {icon && (
            <Icon
              iconName={iconName}
              className={classes.icon}
              size={iconSizes.base}
            />
          )}
          <div
            className={classnames(
              { [classes.textWithIcon]: icon },
              { [classes.text]: !icon }
            )}
          >
            <Text standard tag="div" current>
              {renderText()}
            </Text>
          </div>
        </Flexbox>
        {onClose && (
          <Icon
            iconName="x"
            onClick={onClose}
            className={spacedClose ? classes.spacedClose : null}
          />
        )}
      </Flexbox>
    </div>
  )
}

Alert.defaultProps = {
  theme: 'info'
}

export default Alert
