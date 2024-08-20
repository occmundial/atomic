import { useState } from 'react'

import Tabs from '@/components/Tabs'
import TabsProvider from '@/components/Tabs/context'
import Tab from '@/components/Tabs/Tab'
import TabContent from '@/components/Tabs/TabContent'

export default function TabsMDX() {
  const [value, setValue] = useState<string>('3')

  return (
    <TabsProvider value={value}>
      <Tabs onChange={setValue} size="large">
        <Tab title="Title 1" icon="person" value="1" />
        <Tab title="Title 2" icon="search" value="2" />
        <Tab title="Title 3" icon="search" value="3" />
        <Tab title="Title 4" icon="search" value="4" />
        <Tab title="Title 5" icon="search" value="5" />
        <Tab title="Title 6" icon="search" value="6" />
      </Tabs>
      <TabContent value="1">Contenido 1</TabContent>
      <TabContent value="2">Contenido 2</TabContent>
      <TabContent value="3">Contenido 3</TabContent>
      <TabContent value="4">Contenido 4</TabContent>
      <TabContent value="5">Contenido 5</TabContent>
      <TabContent value="6">Contenido 6</TabContent>
    </TabsProvider>
  )
}
