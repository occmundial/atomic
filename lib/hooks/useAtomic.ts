import { useContext } from 'react'
import { AtomicContext, AtomicData } from '@/components/Provider'

const useAtomic = () => {
  return useContext<Partial<AtomicData>>(AtomicContext)
}

export default useAtomic
