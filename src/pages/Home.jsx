import '../index.css'
import style from './Home.module.css'
import Opcao from '../components/Opcao'

export default function Home(){
    return(
        <>
            <div className={style.bemVindo}>
                <h1>Bem vindo ao nosso site de receitas!</h1>
                <p>Confira as opções que disponibilizamos para que você faça uma refeição deliciosa!</p>
            </div>

            <div className={style.divL}>
                <Opcao
                    imagemReceita='src/images/CARBONARA.jpg'
                    nomeReceita='CARBONARA'
                    caminhoDaPagina={'carbonara'}
                />
                <Opcao
                    imagemReceita='src/images/LASANHA.jpg'
                    nomeReceita='LASANHA A BOLONHESA'
                    caminhoDaPagina={'lasanha'}
                />
                <Opcao
                    imagemReceita='src/images/PIZZA.jpeg'
                    nomeReceita='PIZZA'
                    caminhoDaPagina={'pizza'}
                />
            </div>
            
        </>

    )
}