import { ReactNode } from 'react'
import Link from 'next/link'

import useStyles from './styles'

interface AnchorProps {
  children: ReactNode
  href: string
}

export default function Anchor({ children, href }: AnchorProps) {
  const classes = useStyles()
  return (
    <Link href={href}>
      <a className={classes.anchor}>{children}</a>
    </Link>
  )
}
