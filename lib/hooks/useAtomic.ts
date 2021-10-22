import { useContext } from 'react'
import { AtomicContext } from '@/components/Provider'

const useAtomic = () => {
  return useContext(AtomicContext)
}

export default useAtomic
