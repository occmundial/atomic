import {
  createContext,
  ReactNode,
  useEffect,
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

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const AtomicProvider = ({ data, children }: AtomicProviderProps) => {
  const [value, setValue] = useState<Partial<AtomicData>>({
    iconsUrl: '',
    iconsPrefix: 'atomic',
    ...data
  })
  const valueRef = useRef<Partial<AtomicData>>()
  const prevData = usePrevious(data)

  useIsomorphicLayoutEffect(() => {
    valueRef.current = value
  }, [value])

  useIsomorphicLayoutEffect(() => {
    if (prevData && !isEqual(prevData, data)) {
      setValue({ ...valueRef.current, ...data })
    }
  }, [data, prevData])

  useIsomorphicLayoutEffect(() => {
    if (value.iconsUrl) loadSprite(value.iconsUrl)
  }, [value.iconsUrl])

  const loadSprite = async (url: string) => {
    try {
      const res = await fetch(url)
      const data = await res.text()
      const div = document.createElement('div')
      div.style.display = 'none'
      div.innerHTML = data
      document.body.insertBefore(div, document.body.firstChild)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <AtomicContext.Provider value={value}>{children}</AtomicContext.Provider>
  )
}

export { AtomicContext }
export default AtomicProvider
