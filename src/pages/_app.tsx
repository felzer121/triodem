import ThemeRegistry from '@/app/provider/ThemeRegistry'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
    
  return <Component {...pageProps} />
}