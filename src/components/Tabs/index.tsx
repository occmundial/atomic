import { useState } from 'react'

import Tabs from '@/components/Tabs'
import TabsProvider from '@/components/Tabs/context'
import Tab from '@/components/Tabs/Tab'
import TabContent from '@/components/Tabs/TabContent'

export default function TabsMDX() {
  const [value, setValue] = useState<string>('2')

  return (
    <TabsProvider value={value}>
      <Tabs onChange={setValue} size="large">
        <Tab title="Javi" icon="person" value="1" />
        <Tab title="Edna" icon="search" value="2" />
        <Tab title="Abril" icon="search" value="3" />
        <Tab title="Abril 4" icon="search" value="4" />
        <Tab title="Abril 5" icon="search" value="5" />
        <Tab title="Abril 6" icon="search" value="6" />
      </Tabs>
      <TabContent value="1">Hola Que hace Javi!</TabContent>
      <TabContent value="2">Hola Que hace Edna!</TabContent>
      <TabContent value="3">Hola Que hace Abril!</TabContent>
      <TabContent value="4">Hola Que hace Abril 4!</TabContent>
      <TabContent value="5">Hola Que hace Abril 5!</TabContent>
      <TabContent value="6">Hola Que hace Abril 6!</TabContent>
    </TabsProvider>
  )
}
