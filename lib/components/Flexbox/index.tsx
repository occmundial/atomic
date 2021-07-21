import { CSSProperties, ReactNode } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

interface FlexboxProps {
  children?: ReactNode
  display?: 'flex' | 'inline-flex'
  direction?: 'col' | 'row' | 'colR' | 'rowR'
  wrap?: 'wrap' | 'noWrap' | 'wrapR'
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  alignItems?: 'start' | 'end' | 'center' | 'base' | 'stretch'
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  flex?: string
  order?: number
  alignSelf?: 'auto' | 'start' | 'end' | 'center' | 'base' | 'stretch'
  id?: string
  className?: string
  style?: CSSProperties
}

const Flexbox = ({
  children,
  display,
  direction,
  wrap,
  justifyContent,
  alignItems,
  alignContent,
  order,
  flex,
  alignSelf,
  id,
  className,
  style
}: FlexboxProps) => {
  const classes = useStyles()
  let displayClass = display
    ? display === 'inline-flex'
      ? classes.iFlex
      : classes.flex
    : ''
  if (!style) style = {}
  if (order) style.order = order
  if (flex) style.flex = flex
  return (
    <div
      className={classnames(
        displayClass,
        { [classes[direction]]: display && direction },
        { [classes[wrap]]: display && wrap },
        { [classes[`j${justifyContent}`]]: display && justifyContent },
        { [classes[`a${alignItems}`]]: display && alignItems },
        { [classes[`c${alignContent}`]]: display && alignContent },
        { [classes[`s${alignSelf}`]]: alignSelf },
        className
      )}
      id={id}
      style={style}
    >
      {children}
    </div>
  )
}

export default Flexbox
