import styles from '@/components/Footer/page.module.css';
import { faGitAlt, faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {


    return (
        <div className={styles.footer} id='contatos'>
            <div className={styles.apresentation}>
                <h2>MK</h2>
                <p>Desenvolvedor Front-end</p>
                <p>especializado em criar soluções</p>
                <p>digitais modernas e eficientes.</p>
            </div>

            <div className={styles.navegation}>
                <h4>Navegação</h4>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#servicos">Serviços</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#conrtatos">Contatos</a></li>
                </ul>
            </div>

            <div className={styles.socialNetwork}>
                <h4>Redes Sociais</h4>
                <div>
                    <FontAwesomeIcon icon={faGitAlt} />
                    <a href="https://github.com/kabitschke" target="_blank">GitHub</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLinkedin} />
                    <a href="">Linkedin</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a href="http://api.whatsapp.com/send?phone=5527997145039" target='blank'>WhatsApp</a>
                </div>

                <div>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href="mailto:mayconkabitschke@gmail.com?" target="_blank">E-mail</a>
                </div>
            </div>

            <div className={styles.call}>
                <h4>Vamos conversar</h4>

                <p>Tem um projeto em mente?</p>
                <p>Vamos conversar e criar algo incrível juntos</p>

                <div className={styles.btn}>
                    <a href="http://api.whatsapp.com/send?phone=5527997145039" target='blank'>Fazer orçamento</a><ArrowRight size={12} />
                </div>
            </div>


        </div>
    )

}