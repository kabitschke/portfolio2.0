import styles from '@/components/Section/page.module.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const Section = () => {
    return (
        <section className={styles.section}>
            <div className={styles.title}>Meus trabalhos</div>
            <h2>Projetos em destaque</h2>

            <p className={styles.subTitle}>Alguns dos projetos que desenvolvi com foco em design, performance e resultado.</p>

            <div className={styles.cardWork}>

                <div className={styles.cardWorkItem}>
                    <div className={styles.imgCard}>
                        <Image
                            src={'/img/pizzaria.png'}
                            alt='landing page'
                            width={150}
                            height={75}
                        />

                    </div>

                    <div className={styles.textCard}>
                        <h4>Landing Page - Pizzaria</h4>

                        <p>Landing page moderna e responsiva para aumentos de pedidos online.</p>
                    </div>

                    <div className={styles.tec}>
                        <div>React</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                    </div>

                    <div className={styles.Link}>
                        <a href="">Ver projeto</a>

                        <ArrowRight size={12} />

                    </div>

                </div>

                <div className={styles.cardWorkItem}>
                    <div className={styles.imgCard}>
                        <Image
                            src={'/img/pizzaria.png'}
                            alt='landing page'
                            width={150}
                            height={75}
                        />
                    </div>

                    <div className={styles.textCard}>
                        <h4>Landing Page - Pizzaria</h4>

                        <p>Landing page moderna e responsiva para aumentos de pedidos online.</p>
                    </div>

                    <div className={styles.tec}>
                        <div>React</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                    </div>

                    <div className={styles.Link}>
                        <a href="">Ver projeto</a>

                        <ArrowRight size={12} />

                    </div>

                </div>

                <div className={styles.cardWorkItem}>
                    <div className={styles.imgCard}>
                        <Image
                            src={'/img/pizzaria.png'}
                            alt='landing page'
                            width={150}
                            height={75}
                        />

                    </div>

                    <div className={styles.textCard}>
                        <h4>Landing Page - Pizzaria</h4>

                        <p>Landing page moderna e responsiva para aumentos de pedidos online.</p>
                    </div>

                    <div className={styles.tec}>
                        <div>React</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                    </div>

                    <div className={styles.Link}>
                        <a href="">Ver projeto</a>

                        <ArrowRight size={12} />

                    </div>

                </div>
            </div>


        </section>
    )
}