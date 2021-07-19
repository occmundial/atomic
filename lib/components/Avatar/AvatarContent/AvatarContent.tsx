import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import useStyles from './styles'

export interface AvatarContentProps {
  photo?: string
  gender?: 'f' | 'm'
  name?: string
  size?: number
}

const capitalLetter = name => {
  if (name) {
    let capitals = name.toUpperCase().split(' ')
    capitals = capitals.filter(Boolean)
    return (
      <span>
        {capitals[0] ? capitals[0].charAt(0) : 'N'}
        {capitals[1] ? capitals[1].charAt(0) : 'O'}
      </span>
    )
  }
  return ''
}

const AvatarContent = ({ photo, gender, name, size }: AvatarContentProps) => {
  const classes = useStyles()
  return (
    <div className={classes.wrap}>
      {gender && <div className={classnames(classes.cont, classes[gender])} />}
      {!gender && name && (
        <div
          className={`${classes.cont} ${classes.capital}`}
          style={
            size ? { fontSize: `${size * 0.4}px`, lineHeight: `${size}px` } : {}
          }
        >
          {capitalLetter(name)}
        </div>
      )}
      {photo && (
        <div
          className={classes.cont}
          style={{
            background: `url('${photo}') no-repeat center center / cover`
          }}
        />
      )}
    </div>
  )
}

export default AvatarContent
