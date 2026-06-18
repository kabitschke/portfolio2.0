import styles from '@/components/Header/page.module.css';
import { faGitAlt, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";



export const Header = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(false);
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>MK</div>

            <nav className={styles.nav}>
                <ul>
                    <li><a href="#inicio" >Início</a></li>
                    <li><a href="#projetos" >Projetos</a></li>
                    <li><a href="#servicos" >Serviços</a></li>
                    <li><a href="#sobre" >Sobre</a></li>
                    <li><a href="#contatos" >Contatos</a></li>
                </ul>
            </nav>

            <button className={styles.btn}><a href="http://api.whatsapp.com/send?phone=5527997145039" target='blank'>Fazer orçamento</a><ArrowRight size={16} /></button>

            <div className={`${styles.menu} ${open ? styles.active : ""}`}
                onClick={() => setOpen(!open)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            className={styles.sidebar}
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30
                            }}
                            drag="x"
                            dragConstraints={{ left: -300, right: 0 }}
                            dragElastic={0.1}
                            onClick={(e) => e.stopPropagation()}
                            onDragEnd={(_, info) => {
                                const shouldClose =
                                    info.offset.x < -100 ||
                                    info.velocity.x < -500;

                                if (shouldClose) {
                                    setOpen(false);
                                }
                            }}
                        >
                            <ul onClick={handleClick}>
                                <li><a href="#inicio" >Início</a></li>
                                <li><a href="#projetos" >Projetos</a></li>
                                <li><a href="#servicos" >Serviços</a></li>
                                <li><a href="#sobre" >Sobre</a></li>
                                <li><a href="#contatos" >Contatos</a></li>
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
                                    <a
                                        href="http://api.whatsapp.com/send?phone=5527997145039"
                                        target="blank"
                                    >
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );

}