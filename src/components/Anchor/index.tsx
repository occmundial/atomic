import Text from '@/components/Text'
import Link from 'next/link'
import useStyles from './styles'

export default function Anchor({ children, href }) {
  const classes = useStyles()
  return (
    <Link href={href}>
      <a className={classes.anchor}>{children}</a>
    </Link>
  )
}
