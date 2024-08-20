import {
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
  MouseEventHandler
} from 'react'

import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Tag from '@/components/Tag'
import Flexbox from '@/components/Flexbox'
import colors from '@/tokens/colors'
import usePrevious from '@/hooks/usePrevious'

import useStyles from './styles'
import useIcon from '@/hooks/useIcon'

export interface SlideDownProps {
  children: ReactNode
  title?: string
  customTitle?: ReactNode
  expanded?: boolean
  tag?: string
  onToggle?: (value: boolean) => void
  textSize?: 'sm' | 'md' | 'lg'
  strong?: boolean
  theme?: 'default' | 'blue'
  noJustified?: boolean
  divider?: boolean
  icon?: string
  noPadding?: boolean
}

const SlideDown = ({
  children,
  expanded,
  title,
  customTitle,
  tag,
  onToggle,
  textSize,
  theme,
  strong,
  noJustified,
  divider,
  icon,
  noPadding
}: SlideDownProps) => {
  const classes = useStyles()
  const [_expanded, setExpanded] = useState(expanded)
  const prevExpanded = usePrevious(expanded)

  const getIcon = useIcon()

  const toggleContent: MouseEventHandler<HTMLDivElement> = useCallback(
    e => {
      e.stopPropagation()
      setExpanded(!_expanded)
      if (onToggle) onToggle(!_expanded)
    },
    [onToggle, _expanded]
  )

  useEffect(() => {
    if (prevExpanded !== expanded) {
      setExpanded(expanded)
    }
  }, [expanded, prevExpanded])

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
    <div
      className={`${classes.wrapper}${divider ? ` ${classes.divider}` : ''}`}
    >
      <div
        className={`${classes.button} ${
          textSize === 'lg' ? classes.largePadding : classes.normalPadding
        }${!noPadding ? ` ${classes.buttonPadding}` : ''}`}
        role="button"
        onClick={toggleContent}
      >
        <Flexbox
          display="flex"
          justifyContent={!noJustified ? 'between' : null}
          alignItems="start"
        >
          <Flexbox display="flex" alignItems="center" wrap="wrap">
            {icon ? (
              <Icon
                iconName={icon}
                size={16}
                color={iconColor}
                className={classes.leftIcon}
              />
            ) : (
              ''
            )}
            {customTitle || (
              <Text
                {...textProps}
                strong={strong}
                tag="label"
                className={classes.text}
              >
                {title}
              </Text>
            )}
            {tag && (
              <Tag theme="info" className={classes.tag}>
                {tag}
              </Tag>
            )}
          </Flexbox>
          <Flexbox flex="0 0 auto">
            <Icon
              iconName={getIcon('arrow-down', 'chevron-down')}
              color={iconColor}
              size={16}
              className={`${classes.icon}${
                _expanded ? ` ${classes.rotateIcon}` : ''
              }`}
            />
          </Flexbox>
        </Flexbox>
      </div>
      <div
        className={`${classes.contentWrapper}${
          _expanded ? ` ${classes.showContentWrapper}` : ''
        }`}
      >
        <div
          className={`${classes.content}${
            _expanded ? ` ${classes.showContent}` : ''
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

SlideDown.defaultProps = {
  textSize: 'md',
  theme: 'default',
  noJustified: false,
  divider: false,
  icon: '',
  noPadding: false
}

export default SlideDown
