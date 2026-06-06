import styles from '@/components/Main/page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { ArrowRight, Code, Code2, Code2Icon, Target, Zap } from 'lucide-react';
import Image from 'next/image';

export const Main = () => {
    return (
        <>
            <div className={styles.containerMain}>
                <main className={styles.main}>
                    <span className={styles.presentation}>OLÁ, EU SOU MAYCON KABITSCHKE 👋</span>

                    <h1 className={styles.h1}>
                        Desenvolvedor<br />
                        <div className={styles.letterDourado}>Front-end</div>
                        especializado em<br />
                        Landing Pages que<br />
                        <div className={styles.letterDourado}>convertem.</div>
                    </h1>

                    <p className={styles.subTitle}>Crio páginas rápidas, modernas e focadas em <br />
                        gerar resultados para seu negócio.
                    </p>

                    <div className={styles.btnArea}>
                        <button className={styles.btnRight}>Ver projetos <ArrowRight size={14} /></button>

                        <button className={styles.btnLeft}>Falar comigo <div className={styles.icoWhatsapp}><FontAwesomeIcon icon={faWhatsapp} /></div></button>
                    </div>

                </main>


                <div className={styles.imgNotebook}>
                    <Image
                        src="/img/newNotebook.png"
                        alt='notebook'
                        width={600}
                        height={400}
                        loading='eager'

                    />

                </div>
            </div >

            <div className={styles.items}>
                <div className={styles.item}>
                    <div className={styles.ico}>
                        <Zap />
                    </div>
                    <div>
                        <h4>Páginas rápidas</h4>
                        <p>Performance otimizada</p>

                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.ico}>
                        <Target />
                    </div>
                    <div>
                        <h4>Foco em conversão</h4>
                        <p>Resultados reais</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.ico}>
                        <Code2 />
                    </div>
                    <div>
                        <h4>Tecnologias modernas</h4>
                        <p>React, Next e mais</p>

                    </div>
                </div>


            </div>


        </>

    );
}