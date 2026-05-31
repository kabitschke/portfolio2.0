import styles from '@/components/Header/page.module.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';


export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    src="/img/logo.png"
                    alt="logo"
                    width={150}
                    height={75}
                    loading='eager'

                />
            </div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href="/" style={{ color: '#D3AF67' }}>Início</a></li>
                    <li><a href="/about">Projetos</a></li>
                    <li><a href="/servicos">Serviços</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contact">Contatos</a></li>
                </ul>
            </nav>

            <button className={styles.btn}>Fazer orçamento <ArrowRight size={16} /></button>

        </header>
    );

}