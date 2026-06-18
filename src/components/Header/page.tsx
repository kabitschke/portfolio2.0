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
                    <li><a href="#inicio" >Início</a></li>
                    <li><a href="#projetos" >Projetos</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
            </nav>

            <button className={styles.btn}><a href="http://api.whatsapp.com/send?phone=5527997145039" target='blank'>Fazer orçamento</a><ArrowRight size={16} /></button>

            <div className={`${styles.menu} ${open ? styles.active : ""}`}
                onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={`${styles.sidebar} ${open ? styles.show : ""}`}>
                <ul>
                    <li><a href="#inicio" >Início</a></li>
                    <li><a href="#projetos" >Projetos</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>


                <div className={styles.contact}>


                    <div>
                        <a href="https://github.com/kabitschke" target="_blank">
                            <FontAwesomeIcon icon={faGitAlt} />
                        </a>
                    </div>

                    <div>
                        <a href="">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>

                    <div>
                        <a href="http://api.whatsapp.com/send?phone=5527997145039" target='blank'>
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>

                </div>
            </div>

        </header>
    );

}