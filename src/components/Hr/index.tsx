import { ReactNode } from 'react'

import useStyles from './styles'

interface TdProps {
  children: ReactNode
}

export default function Td({ children }: TdProps) {
  const classes = useStyles()

  return <hr className={classes.hr} />
}
