import Tabs from '@/components/Tabs'
import TabsProvider from '@/components/Tabs/context'
import Tab from '@/components/Tabs/Tab'
import TabContent from '@/components/Tabs/TabContent'

export default function TabsMDX() {
  return (
    <TabsProvider>
      <Tabs size="large">
        <Tab title="Javi" icon="person" />
        <Tab title="Edna" icon="search" counter="123" disabled />
        <Tab title="Abril" icon="search" />
      </Tabs>
      <TabContent value={0}>Hola Que hace Javi!</TabContent>
      <TabContent value={1}>Hola Que hace Edna!</TabContent>
      <TabContent value={2}>Hola Que hace Abril!</TabContent>
    </TabsProvider>
  )
}
