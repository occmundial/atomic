import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useRef,
  useState
} from 'react'
import isEqual from 'lodash/isEqual'

import usePrevious from '@/hooks/usePrevious'

const AtomicContext = createContext<Partial<AtomicData>>({})

interface AtomicData {
  iconsUrl: string
  iconsPrefix: string
}

interface AtomicProviderProps {
  data: Partial<AtomicData>
  children: ReactNode
}

const AtomicProvider = ({ data, children }: AtomicProviderProps) => {
  const [value, setValue] = useState<Partial<AtomicData>>({
    iconsUrl: '',
    iconsPrefix: 'atomic',
    ...data
  })
  const valueRef = useRef<Partial<AtomicData>>()
  const prevData = usePrevious(data)

  useLayoutEffect(() => {
    valueRef.current = value
  }, [value])

  useLayoutEffect(() => {
    if (prevData && !isEqual(prevData, data)) {
      setValue({ ...valueRef.current, ...data })
    }
  }, [data, prevData])

  return (
    <AtomicContext.Provider value={value}>{children}</AtomicContext.Provider>
  )
}
const useAtomic = () => {
  return useContext(AtomicContext)
}

export { AtomicProvider, AtomicContext, useAtomic }
