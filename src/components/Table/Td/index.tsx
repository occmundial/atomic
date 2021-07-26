import { ReactNode } from 'react'

import Text from '@/components/Text'

import useStyles from './styles'

interface TdProps {
  children: ReactNode
}

export default function Td({ children }: TdProps) {
  const classes = useStyles()

  return (
    <Text tag="td" className={classes.td}>
      {children}
    </Text>
  )
}
