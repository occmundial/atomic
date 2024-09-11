import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

type ListContext = {
  dense: boolean
  setDense: Dispatch<SetStateAction<boolean>>
}

export const ListContext = createContext<ListContext | null>(null)

export const useListContext = () => {
  return useContext(ListContext)
}

type ListProviderProps = {
  children: ReactNode
  dense: boolean
}

export const ListProvider = ({
  children,
  dense: initialValue = false
}: ListProviderProps) => {
  const [dense, setDense] = useState(initialValue)
  return (
    <ListContext.Provider value={{ dense, setDense }}>
      {children}
    </ListContext.Provider>
  )
}
