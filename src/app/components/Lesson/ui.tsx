import { Container } from '../Container/ui'
import { ScratchFonVector, ScratchSubFonVector } from '../landing/Vector/ui'
import styles from './style.module.css'
import Image from 'next/image'

export const Lesson = () => {
    return (
        <Container>
            <div className={styles.lesson}>
                <div className={styles.lesson__info}>
                    <h2 className={styles.lesson__title}><b>Все занятия</b> проходят в формате <b>онлайн-трансляций</b></h2>
                    <ol className={styles.lesson__list}>
                        <li>Повторяем тему прошлого урока и разбираем домашнее задание.</li>
                        <li>Разбираем новую тему и группа под контролем преподавателя решает первые задачи.</li>
                        <li>Ученики самостоятельно решают усложненные задачи и в конце часто идут игровые задания.</li>
                        <li>В конце урока преподаватель с группой подводят итоги, повторяют все что успели пройти и готовятся к следующему уроку.</li>
                    </ol>
                </div>
                <div className={styles.lesson__picture}>
                    <ScratchFonVector />
                    <div className={styles.lesson__pictureWrapper}>
                        <div className={styles.lesson__pictureImg}>
                            <Image
                                className={styles.lesson__pictureImgContainer}
                                src="/img/scratch.jpg"
                                fill={true}
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className={styles.lesson__pictureSubFon}>
                        <ScratchSubFonVector />
                    </div>
                </div>
            </div>
        </Container>
    )
}