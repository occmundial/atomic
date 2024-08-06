import { ComponentProps } from 'react'

import Text from '@/components/Text'

import useStyles from './styles'

type TdProps = ComponentProps<'td'>

export default function Td({ children, ...props }: TdProps) {
  const classes = useStyles()

  return (
    <Text tag="td" className={classes.td} {...props}>
      {children}
    </Text>
  )
}
