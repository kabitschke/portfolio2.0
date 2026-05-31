import styles from '@/components/Main/page.module.css';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const Main = () => {
    return (
        <div className={styles.containerMain}>
            <main className={styles.main}>
                <div className={styles.presentation}>OLÁ, EU SOU MAYCON KABITSCHKE 👋</div>

                <h1 className={styles.h1}>
                    Desenvolvedor<br />
                    Front-end<br />
                    especializado em<br />
                    Landing Pages que<br />
                    convertem.
                </h1>

                <p>Crio páginas rápidas, modernas e focadas em <br />
                    gerar resultados para seu negócio.
                </p>

                <div>
                    <button>ver projetos <ArrowRight /></button>

                    <button>Falar comigo <FontAwesomeIcon icon={faWhatsapp} /></button>
                </div>

            </main>


            <div className={styles.imgNotebook}>
                <Image
                    src="/img/notebook.png"
                    alt='notebook'
                    width={600}
                    height={400}
                    loading='eager'

                />

            </div>


        </div >
    );
}