import '@/styles/globals.css'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    const style: HTMLElement | null =
      document.getElementById('server-side-styles')
    if (style && style.parentNode) {
      style.parentNode.removeChild(style)
    }
  }, [])

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <Component key={isClient} {...pageProps} />
    </>
  )
}
export default MyApp
