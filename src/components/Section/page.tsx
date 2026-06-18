import styles from '@/components/Section/page.module.css';
import { SectionItem } from '../SectionItem/page';

export const Section = () => {
    return (
        <section className={styles.section} id='projetos'>
            <div className={styles.title}>MEUS TRABALHOS</div>
            <h2>Projetos em destaque</h2>

            <p className={styles.subTitle}>Alguns dos projetos que desenvolvi com foco em design, performance e resultado.</p>

            <div className={styles.cardWorkContainer}>

                <SectionItem
                    src='/img/pizzaria.png'
                    alt='landing page'
                    width={100}
                    height={50}
                    title='Landing Page - Pizzaria'
                    description='Landing page moderna e responsiva para aumentos de pedidos online.'
                    items={['React', 'CSS', 'JavaScript']}
                    link='#'
                />

                <SectionItem
                    src='/img/gym.png'
                    alt='landing page'
                    width={100}
                    height={50}
                    title='Landing Page - Pizzaria'
                    description='Landing page moderna e responsiva para aumentos de pedidos online.'
                    items={['React', 'CSS', 'JavaScript']}
                    link='#'
                />

                <SectionItem
                    src='/img/finance.png'
                    alt='landing page'
                    width={100}
                    height={50}
                    title='Landing Page - Pizzaria'
                    description='Landing page moderna e responsiva para aumentos de pedidos online.'
                    items={['React', 'CSS', 'JavaScript']}
                    link='#'
                />

                <SectionItem
                    src='/img/pizzaria.png'
                    alt='landing page'
                    width={100}
                    height={50}
                    title='Landing Page - Pizzaria'
                    description='Landing page moderna e responsiva para aumentos de pedidos online.'
                    items={['React', 'CSS', 'JavaScript']}
                    link='#'
                />


            </div>


        </section>
    )
}