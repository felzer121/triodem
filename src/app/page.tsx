import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './components/landing/Header/ui'
import { theme } from './provider/theme'
import { ThemeProvider } from '@mui/material'
 

export default function Home() {
  return (
    // <ThemeProvider theme={theme}>
      <main>
        <Header />
      </main>
    // </ThemeProvider>
  )
}
