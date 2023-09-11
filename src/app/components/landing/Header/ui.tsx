import { Container } from "../../Container/ui"
import { Logo } from "../../Logo/ui"
import { LeftHeaderVector, PictureVector, RightHeaderVector } from "../Vector/ui"
import styles from './style.module.css'
import { oswald } from "../../Logo/ui"
import { Button } from "@mui/material"
const tags = [
    {id: 1, name: '#scratch'},
    {id: 2, name: '#от 6 лет '}
]

export const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.headerTopBlock}>
                    <Logo />
                    <menu className={styles.menu}>
                        <li>О нас</li>
                        <li>Отзывы</li>
                        <li>Программа</li>
                        <li>Как начать</li>
                    </menu>
                </div>
                <div className={styles.header__content}>
                    <div className={styles.header__contentInfo}>
                        <h1 className={`${oswald.className} ${styles.header__contentTitle}`}>обучим вашего ребенка навыкам будующего</h1>
                        <div className={styles.header__contentTags}>
                            {tags.map(tag => <div className={styles.header__contentTag} key={tag.id}>{tag.name}</div>)}
                        </div>
                        <p className={styles.header__contentDesription}>
                        Простой и доступный всем в использовании язык программирования. Ребенок сможет создать свои первые игры и анимации под руководством нашего опытного тренера
                        </p>
                        <p className={styles.header__contentSubDesription}>для детей и подростков от 6 до 14 лет</p>
                        <div>
                            <Button size="large" sx={{fontSize: 20, padding: '15px 50px'}} variant="contained" color="primary">Пробный урок</Button>
                        </div>
                    </div>
                    <PictureVector />
                </div>
            </Container>
            
           <div className={styles.leftVector}><LeftHeaderVector /></div>
           <div className={styles.rightVector}><RightHeaderVector /></div>
            
        </header>
    )
}