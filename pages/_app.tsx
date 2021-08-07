import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'

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
      <Component key={isClient} {...pageProps} />
    </>
  )
}
export default MyApp
