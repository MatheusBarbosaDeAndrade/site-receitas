import style from './Contato.module.css'

export default function Contato(){
    return(
        <>
            <h1>Contate-nos!</h1>
            <form className={style.form}>
                <label className={style.label} htmlFor="email">Email:</label>
                <input className={style.input}type="email" id="email" placeholder="example@gmail.com" required/>

                <label className={style.label}htmlFor="msg">Sua mensagem:</label>
                <textarea className={style.input}rows='10' cols='50' id='msg' placeholder="Digite sua mensagem"
                required/>

                <input type="submit" className={style.submit}/>
            </form>
        </>
    )
}