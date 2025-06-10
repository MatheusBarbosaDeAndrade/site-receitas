import { Link } from 'react-router-dom'
import style from './Header.module.css'

export default function Header(){
    return (
        <header className={style.header}>
            <h1 className="logo"><Link to='/' className={style.link}>RECEITAS</Link></h1>
            <nav className={style.headerNav}>
                <li>
                    <Link className={style.link} to="receitas">Receitas</Link>
                </li>
                <li>
                    <Link className={style.link} to="contato">Contato</Link>
                </li>
                <li>
                    <Link className={style.link} to="sobre">Sobre nós</Link>
                </li>
            </nav>

            <section className={style.cadUsuario}>
                <Link className={style.link} to="cadastro">Cadastre-se</Link>
                <Link className={style.link} to="login">Fazer Login</Link>
            </section>
        </header>
    )
}