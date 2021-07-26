import useStyles from './styles'

import Text from '@/components/Text'

export default function Td({ children }) {
  const classes = useStyles()

  return (
    <Text tag="td" className={classes.td}>
      {children}
    </Text>
  )
}
