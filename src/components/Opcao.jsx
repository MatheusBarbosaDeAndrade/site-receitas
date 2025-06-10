// Opcao.jsx
import { Link } from 'react-router-dom';
import style from './Opcao.module.css'

export default function Opcao({ imagemReceita, nomeReceita, caminhoDaPagina }) {
    return (
        <div>
            <Link to={caminhoDaPagina}
            
            className={style.opcao}
            >
                <h2>{nomeReceita}</h2>
                <img src={imagemReceita} alt={nomeReceita} className={style.imagem}/>
            </Link>
        </div>
    );
}
