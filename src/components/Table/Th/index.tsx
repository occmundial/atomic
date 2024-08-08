import { ComponentProps } from 'react'

import Text from '@/components/Text'

import useStyles from './styles'

type ThProps = ComponentProps<'th'>

export default function Th({ children, ...props }: ThProps) {
  const classes = useStyles()

  return (
    <Text tag="th" strong className={classes.th} {...props}>
      {children}
    </Text>
  )
}
