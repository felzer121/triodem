import Image from 'next/image'
import styles from './page.module.css'
import { Header } from './components/landing/Header/ui'
import { About } from './components/landing/About/ui'
 

export default function Home() {
  return (
      <main>
        <Header />
        <About />
      </main>
  )
}
