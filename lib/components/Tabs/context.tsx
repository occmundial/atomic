import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'

type TabsContextProps = {
  currentValue: string | number
  setCurrentValue: Dispatch<SetStateAction<string | number>>
  initialize: boolean
}

const initialContext: TabsContextProps = {
  currentValue: 0,
  setCurrentValue: () => {},
  initialize: false
}

const TabsContext = createContext<TabsContextProps>(initialContext)

interface ProviderProps {
  children: ReactNode
}

interface ProviderControlledProps {
  children: ReactNode
  value: string | number
  setCurrentValue: Dispatch<SetStateAction<any>>
}

export function TabsProviderUncontrolled(props: ProviderProps) {
  const [currentTabIndex, setCurrentTabIndex] = useState<string | number>(0)

  return (
    <TabsContext.Provider
      value={{
        currentValue: currentTabIndex,
        setCurrentValue: setCurrentTabIndex,
        initialize: true
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {props.children}
      </div>
    </TabsContext.Provider>
  )
}

export function TabsProviderControlled(props: ProviderControlledProps) {
  return (
    <TabsContext.Provider
      value={{
        currentValue: props.value,
        setCurrentValue: props.setCurrentValue,
        initialize: true
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {props.children}
      </div>
    </TabsContext.Provider>
  )
}

export function useTabsContext(): TabsContextProps {
  const context = useContext(TabsContext)
  if (context.initialize === false) {
    throw new Error('useTabsContext must be used within a TabsProvider')
  }
  return context
}
