import styles from '@/components/SectionCall/page.module.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rocket } from 'lucide-react';

export const SectionCall = () => {


    return (
        <section className={styles.container}>
            <div className={styles.icon}>
                <Rocket size={30} />
            </div>

            <div className={styles.text}>
                <h2>Vamos tirar seu projeto do papel?</h2>

                <p>
                    Entre em contato e vamos conversar sobre como posso ajudar
                    a transformar sua ideia em realidade.
                </p>
            </div>

            <button className={styles.btnWhatSapp}>Falar no WhatSapp <div className={styles.icoWhatsapp}><FontAwesomeIcon icon={faWhatsapp} /></div></button>

        </section>
    )
}