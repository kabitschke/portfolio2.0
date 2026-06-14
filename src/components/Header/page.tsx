import styles from '@/components/Header/page.module.css';
import { faGitAlt, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';



export const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>MK</div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href="/" style={{ color: '#4A90E2' }}>Início</a></li>
                    <li><a href="/about">Projetos</a></li>
                    <li><a href="/servicos">Serviços</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                    <li><a href="/contact">Contatos</a></li>
                </ul>
            </nav>

            <button className={styles.btn}>Fazer orçamento <ArrowRight size={16} /></button>

            <div className={`${styles.menu} ${open ? styles.active : ""}`}
                onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={`${styles.sidebar} ${open ? styles.show : ""}`}>
                <ul>
                    <li>Início</li>
                    <li>Projetos</li>
                    <li>Serviços</li>
                    <li>Contatos</li>
                </ul>


                <div className={styles.contact}>


                    <div>
                        <a href="">
                            <FontAwesomeIcon icon={faGitAlt} />
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>

                </div>
            </div>

        </header>
    );

}