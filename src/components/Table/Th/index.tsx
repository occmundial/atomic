import { ReactNode } from 'react'

import Text from '@/components/Text'

import useStyles from './styles'

interface ThProps {
  children: ReactNode
}

export default function Th({ children }: ThProps) {
  const classes = useStyles()

  return (
    <Text tag="th" strong className={classes.th}>
      {children}
    </Text>
  )
}
