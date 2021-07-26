import useStyles from './styles'

import Text from '@/components/Text'

export default function Th({ children }) {
  const classes = useStyles()

  return (
    <Text tag="th" strong className={classes.th}>
      {children}
    </Text>
  )
}
