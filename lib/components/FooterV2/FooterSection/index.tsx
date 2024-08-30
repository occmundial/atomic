import { Fragment, ReactNode } from 'react'

import Grid from '@/components/Grid'
import useStyles from './styles'

interface FooterSectionProps {
  divider?: boolean
  children: ReactNode
}

export default function FooterSection({
  divider,
  children
}: FooterSectionProps) {
  const classes = useStyles()
  return (
    <Fragment>
      {divider ? <div className={classes.divider} /> : ''}
      <section className={classes.gridContainer}>{children}</section>
    </Fragment>
  )
}
