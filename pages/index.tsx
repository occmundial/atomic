import Head from 'next/head'

import Button from '@/components/Button'
import Card from '@/components/Card'
import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Checkbox from '@/components/Checkbox'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Atomic 2.0</title>
      </Head>
      <Card>
        <Text hero>Hey</Text>
        <Icon iconName="search" />
        <Checkbox label="Hey" />
        <Button>Hey</Button>
      </Card>
    </div>
  )
}
