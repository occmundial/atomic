import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

type MenuListContext = {
  dense: boolean
  setDense: Dispatch<SetStateAction<boolean>>
}

export const MenuListContext = createContext<MenuListContext | null>(null)

export const useMenuListContext = () => {
  return useContext(MenuListContext)
}

type MenuListProviderProps = {
  children: ReactNode
  dense: boolean
}

export const MenuListProvider = ({
  children,
  dense: initialValue = false
}: MenuListProviderProps) => {
  const [dense, setDense] = useState(initialValue)
  return (
    <MenuListContext.Provider value={{ dense, setDense }}>
      {children}
    </MenuListContext.Provider>
  )
}
