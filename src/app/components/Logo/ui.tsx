import { LeftHeaderVector, RightHeaderVector } from "../landing/Vector/ui"
import styles from './style.module.css'
import { Oswald } from 'next/font/google'
 
export const oswald = Oswald({
  weight: '700',
  subsets: ['latin'],
})

export const Logo = () => {
    return (
        <div className={oswald.className}>
            <span className={styles.logo}>Тетриум</span>
        </div>
    )
}