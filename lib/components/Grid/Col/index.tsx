import React, { CSSProperties, ReactNode, useCallback } from 'react'
import classnames from 'classnames'

import useStyles from './styles'

interface BreakpointSpec {
  col?: number
  push?: number
  pull?: number
  offset?: number
}

export interface ColProps {
  children?: ReactNode
  xxs?: BreakpointSpec
  xs?: BreakpointSpec
  sm?: BreakpointSpec
  md?: BreakpointSpec
  lg?: BreakpointSpec
  xl?: BreakpointSpec
  id?: string
  className?: string
  style?: CSSProperties
}

const Col = ({
  children,
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  id,
  className,
  style
}: ColProps) => {
  const classes = useStyles()

  const getClasses = useCallback(
    (size, data) => {
      const classNames = [
        data.col && classes[`${size}${data.col}`],
        data.offset && classes[`offset-${size}${data.offset}`],
        data.push && classes[`push-${size}${data.push}`],
        data.pull && classes[`pull-${size}${data.pull}`]
      ].filter(Boolean)
      return classnames(...classNames)
    },
    [classes]
  )

  return (
    <div
      className={classnames(
        classes.col,
        xxs && getClasses('xxs', xxs),
        xs && getClasses('xs', xs),
        sm && getClasses('sm', sm),
        md && getClasses('md', md),
        lg && getClasses('lg', lg),
        xl && getClasses('xl', xl),
        className
      )}
      id={id}
      style={style}
    >
      {children}
    </div>
  )
}

export default Col
