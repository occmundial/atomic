import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import { AtomicProvider } from '@/components/Provider'
import useIsClient from '@/hooks/useIsClient'

function MyApp({ Component, pageProps }: AppProps) {
  const isClient = useIsClient()

  useEffect(() => {
    const style: HTMLElement | null =
      document.getElementById('server-side-styles')
    if (style && style.parentNode) {
      style.parentNode.removeChild(style)
    }
  }, [])

  return (
    <>
      <AtomicProvider
        data={{
          iconsUrl: '/atomic-icons.svg'
        }}
      >
        <Component key={isClient} {...pageProps} />
      </AtomicProvider>
    </>
  )
}
export default MyApp
