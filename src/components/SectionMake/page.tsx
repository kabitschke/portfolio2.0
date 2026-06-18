import styles from '@/components/SectionMake/page.module.css';
import { AppWindow, AppWindowIcon, ArrowRight, Code2, Monitor } from 'lucide-react';
import { SectionMakeItem } from './SectionMakeItem';

export const SectionMake = () => {
    return (
        <section className={styles.sectionContainer} id='servicos'>
            <span>O QUE EU FAÇO</span>
            <h2>Serviços que ofereço</h2>

            <p className={styles.subTitle}>Soluções completas para transformar sua ideia em um produto digital de sucesso.</p>
            <div className={styles.containerCard}>
                <SectionMakeItem
                    title='Landing Pages'
                    description='Páginas focadas em conversão, com design atrativo e performance ultra rápida.'
                    link='#'
                    icon={AppWindowIcon}
                />

                <SectionMakeItem
                    title='Sites institucionais'
                    description='Sites profissionais que transmitem credibilidade e fortalecem sua marca na internet'
                    link='#'
                    icon={Monitor}
                />

                <SectionMakeItem
                    title='Sistemas Web'
                    description='Aplicações web completas e personalizadas para otimizar processos do seu negócio.'
                    link='#'
                    icon={Code2}
                />

            </div>

        </section>
    )
}