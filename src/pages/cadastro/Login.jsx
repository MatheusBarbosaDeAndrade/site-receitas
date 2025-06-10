import style from './Login.module.css'

export default function Cadastro(){
    return(
        <>
            <>
            <h1>Faça seu login</h1>
            <form className={style.form}>
                <label className={style.label} htmlFor="username">Nome de Usuário:</label>
                <input className={style.input}type="text" id="username" placeholder="Mathias" required/>

                <label className={style.label}htmlFor="password">Senha:</label>
                <input type='password' className={style.input}id='password' placeholder="Digite sua senha"
                required/>
                {}

                <input type="submit" className={style.submit} value='Entrar'/>
            </form>
        </> 
        </>
    )
}