import Grid from '@/components/Grid'
import Card from '@/components/Card'
import grid from '@/tokens/grid'
import { colors } from '@/tokens/future'
import useWindowSize from '@/hooks/useWindowSize'

export default function GridExample() {
  const windowSize = useWindowSize()
  return (
    <Grid style={{ background: colors['bright-blue'][200] }}>
      <Grid.Row>
        <Grid.Col xxs={{ col: 3 }}>
          <Card
            noPadding={windowSize.width < grid.xs}
            style={{ textAlign: 'center', borderRadius: 0 }}
          >
            {' '}
            1{' '}
          </Card>
        </Grid.Col>
        <Grid.Col xxs={{ col: 3 }}>
          <Card
            noPadding={windowSize.width < grid.xs}
            style={{ textAlign: 'center', borderRadius: 0 }}
          >
            {' '}
            2{' '}
          </Card>
        </Grid.Col>
        <Grid.Col xxs={{ col: 3 }}>
          <Card
            noPadding={windowSize.width < grid.xs}
            style={{ textAlign: 'center', borderRadius: 0 }}
          >
            {' '}
            3{' '}
          </Card>
        </Grid.Col>
        <Grid.Col xxs={{ col: 3 }}>
          <Card
            noPadding={windowSize.width < grid.xs}
            style={{ textAlign: 'center', borderRadius: 0 }}
          >
            {' '}
            4
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  )
}
