import Tabs from '@/components/Tabs'
import TabsProvider from '@/components/Tabs/context'
import Tab from '@/components/Tabs/Tab'
import TabContent from '@/components/Tabs/TabContent'

export default function TabsMDX() {
  return (
    <TabsProvider>
      <Tabs size="large">
        <Tab title="Titulo 1" icon="person" />
        <Tab title="Titulo 2" icon="search" counter="50" disabled />
        <Tab title="Titulo 3" icon="search" />
      </Tabs>
      <TabContent value={0}>Contenido 1</TabContent>
      <TabContent value={1}>Contenido 2</TabContent>
      <TabContent value={2}>Contenido 3</TabContent>
    </TabsProvider>
  )
}
