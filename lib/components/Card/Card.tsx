import { ReactNode } from 'react'

import useStyles from './styles'

interface CardProps {
  children: ReactNode
  rest?: boolean
  raised?: boolean
  raisable?: boolean
  noPadding?: boolean
  id?: string
  className?: string
  style?: { [key: string]: string }
}

/** Container component with a card style */
const Card = ({
  children,
  rest,
  raised,
  raisable,
  noPadding,
  className,
  style,
  id
}: CardProps) => {
  const classes = useStyles()

  const getElevation = () => {
    let classNames
    const elevations = [{ rest }, { raised }]
    const filtered = filter(elevations)
    if (filtered.length) classNames = classes[Object.keys(filtered[0])[0]]
    else classNames = classes.flat
    if (raisable && !raised) classNames += ` ${classes.raisable}`
    return classNames
  }

  const filter = array => {
    return array.filter(item => {
      const key = Object.keys(item)[0]
      if (item[key]) return key
    })
  }

  return (
    <div
      id={id}
      className={`${
        !noPadding ? classes.card : classes.cardNoPadding
      } ${getElevation()}${className ? ` ${className}` : ''}`}
      style={style}
    >
      {children}
    </div>
  )
}

export default Card
