import styles from './style.module.css'

const tags = [
    {id: 1, name: '#программированию'},
    {id: 2, name: '#разработке игр'},
    {id: 3, name: '#компьютерной граммотности'},
    {id: 4, name: '#самостоятельности'},
    {id: 5, name: '#командной работе'},
    {id: 6, name: '#алгоритмичному мышлению'}
]

export const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutLeft}>
                    1
                </div>
                <div className={styles.aboutInfo}>
                   <h2 className={styles.aboutTitle}>Hello <span className={styles.aboutSubtitle}>Тетриум!</span></h2>
                   <p className={styles.aboutTxt}>Мы учим практическим навыкам, которые будут полезны в будущем:</p>
                   <div className={styles.aboutTags}>{tags.map(tag => <div className={styles.aboutTag}>{tag.name}</div>)}</div>
                   <p className={styles.aboutTxt}>Занятия проходят онлайн, а вместо скучных контрольных ребята создают реальные проекты.</p>
                </div>
            </div>
            <svg className={styles.aboutFon} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 760" fill="none">
                <path d="M0 760H1920V157.941C1920 103.951 1877.14 59.7082 1823.18 57.9917L0 0V760Z" fill="#2F364B"/>
            </svg>
        </div>
    )
}
