import style from './style.module.css';
export const Header = () => {


    return (
        <header>
            <div className={style.logo}></div>

            <nav>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/about">Projetos</a></li>
                    <li><a href="/contact">Serviços</a></li>
                    <li><a href="/contact">Sobre</a></li>
                    <li><a href="/contact">Contatos</a></li>
                </ul>
            </nav>


            <button>Fazer orçamento</button>

        </header>
    );

}