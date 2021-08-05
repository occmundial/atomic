import { ReactNode } from 'react'

import Grid from '@/components/Grid'
import Card from '@/components/Card'

import useStyles from './styles'

interface CardProps {
  children: ReactNode
}

export default function Content({ children }: CardProps) {
  const classes = useStyles()
  return (
    <Grid className={classes.content}>
      <Grid.Row>
        <Grid.Col lg={{ col: 10, offset: 1 }}>
          <Card>{children}</Card>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}
