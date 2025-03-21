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

export interface AtomicData {
  /** URL to fetch an svg sprite and insert it in the DOM as inline (does not work with `iconsPath`) */
  iconsUrl: string
  /** Path to access a local svg sprite (does not work with `iconsUrl`) */
  iconsPath: string
  /** A prefix for the icon name in the svg sprite */
  iconsPrefix: string
  /** Use the new icons and the icon name translation */
  translateIconsV2: boolean
  brand: string
}

interface AtomicProviderProps {
  data?: Partial<AtomicData>
  children: ReactNode
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

const AtomicProvider = ({ data, children }: AtomicProviderProps) => {
  const [value, setValue] = useState<Partial<AtomicData>>({
    iconsUrl: '',
    iconsPath: '',
    translateIconsV2: false,
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
