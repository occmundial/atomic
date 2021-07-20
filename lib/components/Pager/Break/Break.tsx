import React from 'react'

import useStyles from './styles'

interface BreakProps {
  label: string
}

const Break = ({ label }: BreakProps) => {
  const classes = useStyles()
  return <li className={classes.li}>{label}</li>
}

export default Break
