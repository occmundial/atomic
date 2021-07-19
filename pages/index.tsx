import Head from 'next/head'

import Button from '@/components/Button'
import Card from '@/components/Card'
import Text from '@/components/Text'
import Icon from '@/components/Icon'
import Checkbox from '@/components/Checkbox'
import TextField from '@/components/TextField'
import Droplist from '@/components/Droplist'
import Autocomplete from '@/components/Autocomplete'
import Avatar from '@/components/Avatar'

export default function Home() {
  const items = [
    { name: 'Item 1', secondary: '(10)' },
    { name: 'Item 2', secondary: '(5)' },
    { name: 'Item 3', secondary: '(30)' }
  ]
  return (
    <div>
      <Head>
        <title>Atomic</title>
      </Head>
      <Card>
        <Text hero>Hey</Text>
        <Icon iconName="search" />
        <Checkbox label="Hey" />
        <Button>Hey</Button>
        <TextField />
        <Droplist
          items={items}
          itemIdKey="name"
          itemTextKey="name"
          itemTextRightKey="secondary"
          onClick={item => console.log(item)}
        />
        <Autocomplete
          textfieldProps={{
            label: 'Autocomplete'
          }}
          droplistProps={{
            items,
            itemIdKey: 'name',
            itemTextKey: 'name',
            itemTextRightKey: 'secondary'
          }}
        />
      </Card>
    </div>
  )
}
