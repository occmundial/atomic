import { useCallback } from 'react'
import useAtomic from './useAtomic'

function useIcon() {
  const atomic = useAtomic()

  const getIcon = useCallback(
    (oldIcon: string, newIcon: string) => {
      if (atomic.translateIconsV2) {
        return newIcon
      }
      return oldIcon
    },
    [atomic.translateIconsV2]
  )

  return getIcon
}

export default useIcon
