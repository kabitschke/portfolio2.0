import styles from '@/components/Footer/page.module.css';
import { faGitAlt, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {


    return (
        <div className={styles.footer}>
            <div className={styles.apresentation}>
                <h2>MK</h2>
                <p>Desenvolvedor Front-end</p>
                <p>especializado em criar soluções</p>
                <p>digitais modernas e eficientes.</p>
            </div>

            <div className={styles.navegation}>
                <h4>Navegação</h4>
                <ul>
                    <li><a href="">Início</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </div>

            <div className={styles.socialNetwork}>
                <h4>Redes Sociais</h4>
                <div>
                    <FontAwesomeIcon icon={faGitAlt} />
                    <a href="">GitHub</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href="">Linkedin</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a href="">WhatsApp</a>
                </div>

                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="">E-mail</a>
                </div>
            </div>

            <div className={styles.call}>
                <h4>Vamos conversar</h4>

                <p>Tem um projeto em mente?</p>
                <p>Vamos conversar e criar algo incrível juntos</p>

                <div className={styles.btn}>
                    Fazer orçamento <ArrowRight size={12} />
                </div>
            </div>


        </div>
    )

}