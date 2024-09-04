import { ComponentProps } from 'react'
import Link from 'next/link'

import useStyles from './styles'

type AnchorProps = ComponentProps<'a'>

export default function Anchor({
  children,
  href,
  ...anchorProps
}: AnchorProps) {
  const classes = useStyles()
  return (
    <Link href={href}>
      <a className={classes.anchor} {...anchorProps}>
        {children}
      </a>
    </Link>
  )
}
