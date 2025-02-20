import { ReactNode } from 'react'
import { useRouter } from 'next/router'

import Grid from '@/components/Grid'
import Card from '@/components/Card'

import useStyles from './styles'

interface CardProps {
  children: ReactNode
}

export default function Content({ children }: CardProps) {
  const classes = useStyles()
  const router = useRouter()
  const { slug } = router.query

  return (
    <Grid className={classes.content} fluid={slug === 'Grid'}>
      <Grid.Row>
        <Grid.Col lg={slug === 'Grid' ? { col: 12 } : { col: 10, offset: 1 }}>
          <Card>{children}</Card>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}
