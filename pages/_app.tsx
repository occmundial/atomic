import '@/styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'

import AtomicProvider from '@/components/Provider'
import { MediaContextProvider } from '@/components/Media'
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
      <MediaContextProvider>
        <AtomicProvider
          data={{
            iconsUrl:
              'https://cdn-icons.occ.com.mx/atomic-icons-1.7.0-beta.5.svg'
          }}
        >
          <Component key={isClient} {...pageProps} />
        </AtomicProvider>
      </MediaContextProvider>
    </>
  )
}
export default MyApp
