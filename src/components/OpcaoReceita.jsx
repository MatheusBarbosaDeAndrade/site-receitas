// OpcaoReceita.jsx
import Opcao from './Opcao.jsx'
import style from './OpcaoReceita.module.css'


export default function OpcaoReceita() {
    return (
        <section className={style.option}>
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
                        <Opcao
                imagemReceita='src/images/fettuccine_alfredo.jpg'
                nomeReceita='FETTUCCINE ALFREDO'
                caminhoDaPagina={'pizza'}
            />
                        <Opcao
                imagemReceita='src/images/Z.png'
                nomeReceita='PENNE COM ESCALOPE'
                caminhoDaPagina={'pizza'}
            />
                        <Opcao
                imagemReceita='src/images/panna.png'
                nomeReceita='PANNA COTA'
                caminhoDaPagina={'pizza'}
            />

            
        </section>
    );
}