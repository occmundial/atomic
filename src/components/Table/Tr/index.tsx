import useStyles from './styles'

import Text from '@/components/Text'

export default function Tr({ children }) {
  const classes = useStyles()

  return (
    <Text tag="tr" strong className={classes.tr}>
      {children}
    </Text>
  )
}
