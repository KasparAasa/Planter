import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Inter} from 'next/font/google'
import Script from 'next/script'

const inter = Inter({subsets: ['latin'], weight: 'variable'})

export default function App({Component, pageProps}: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
      <Script src="https://kit.fontawesome.com/d0b6b601e7.js" crossOrigin="anonymous"/>
    </main>
  )
}
