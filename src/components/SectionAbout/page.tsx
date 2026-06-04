import styles from '@/components/SectionAbout/page.module.css';
import { Award, Briefcase, CalendarCheck, CalendarCheck2, Heart, HelpingHand, ShieldCheck, SquareArrowUp } from 'lucide-react';
import Image from 'next/image';

export const SectionAbout = () => {

    return (
        <section className={styles.container}>
            <div className={styles.about}>

                <span>SOBRE MIM</span>

                <h3>Um pouco sobre mim</h3>

                <p>Sou desenvolvedor front-end apaixonado por criar experiências digitais
                    que fazem a diferença. Tenho foco em performance, usabilidade e em entregar
                    soluções que realmente geram resultados.
                </p>
            </div>

            <div className={styles.skills}>
                <div className={styles.skillsItems}>
                    <div className={styles.icon}>{<CalendarCheck2 />}</div>
                    <div className={styles.textSkill}>
                        <div>+5</div>
                        <p>Projetos concluídos</p>
                    </div>
                </div>

                <div className={styles.skillsItems}>
                    <div className={styles.icon}>{<Heart />}</div>
                    <div className={styles.textSkill}>
                        <div>100%</div>
                        <p>Clientes satisfeitos</p>
                    </div>
                </div>

                <div className={styles.skillsItems}>
                    <div className={styles.icon}>{<Briefcase />}</div>
                    <div className={styles.textSkill}>
                        <div>+2 anos</div>
                        <p>De experiência</p>
                    </div>
                </div>

                <div className={styles.skillsItems}>
                    <div className={styles.icon}>{<ShieldCheck />}</div>
                    <div className={styles.textSkill}>
                        <div>Suporte</div>
                        <p>Pós entrega</p>
                    </div>
                </div>

            </div>


            <div className={styles.photo}>
                <Image
                    src="/img/logo.png"
                    alt='me'
                    width={100}
                    height={50}
                    loading='eager'
                />
            </div>



        </section>


    );
}