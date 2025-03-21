import { useCallback } from 'react'
import useAtomic from './useAtomic'

const useBrand = (): string => {
  const atomic = useAtomic()
  const brand: string = atomic.brand

  return brand
}

export default useBrand
