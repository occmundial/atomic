import { ReactNode } from 'react'

import Text from '@/components/Text'

import useStyles from './styles'

interface TrProps {
  children: ReactNode
}

export default function Tr({ children }: TrProps) {
  const classes = useStyles()

  return (
    <Text tag="tr" strong className={classes.tr}>
      {children}
    </Text>
  )
}
