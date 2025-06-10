import style from './Carbonara.module.css'

export default function Carbonara(){
    return(
        <div className={style.comida}>
            <img
                src='src/images/CARBONARA.jpg'
                alt='CARBONARA'
            />
            <h1>Carbonara</h1>
            <p>
            Leve uma panela média com cerca de 3 litros de água ao fogo alto. Quando ferver, adicione 1½ colher (sopa) de sal, junte o macarrão e deixe cozinhar pelo tempo indicado na embalagem, ou até ficar al dente, mexendo de vez em quando para que os fios não grudem um no outro. Enquanto o macarrão cozinha, separe os outros ingredientes. Numa tigela pequena, quebre um ovo de cada vez e transfira para outra tigela (lembre-se: são 2 ovos inteiros e 2 gemas; você pode reservar as claras na geladeira ou no congelador para outras receitas). Junte o queijo parmesão e misture bem com um garfo. Leve uma frigideira grande ao fogo médio para aquecer. Adicione o bacon e deixe dourar por cerca de 5 minutos, mexendo de vez em quando. Abaixe o fogo, regue com o vinho branco, com cuidado para não espirrar, misture bem e desligue.
            Assim que o macarrão estiver cozido, reserve 1 xícara (chá) da água do cozimento. Agora você vai precisar fazer tudo bem rapidinho: escorra a água, transfira o macarrão para a frigideira com o bacon quente, junte os ovos e misture bem — a ideia é que o calor da massa cozinhe os ovos, formando um creme. Caso necessário, volte a frigideira ao fogo baixo e vá adicionando aos poucos a água do cozimento reservada, mexendo com uma espátula por alguns minutinhos até formar um molho espesso. Cuidado para não cozinhar os ovos! Sirva a seguir com pimenta-do-reino a gosto e telha de parmesão (opcional, veja a receita abaixo).

            </p>
            <ul>
                <li>200 g de macarrão espaguete (ou outra massa longa de grano duro)
                </li>
                <li>½ xícara (chá) de bacon em cubos (75 g)</li>
                <li>¼ de xícara (chá) de vinho branco
                </li>
                <li>2 ovos</li>
                <li>2 gemas</li>
                <li>½ xícara (chá) de queijo parmesão ralado
                </li>
                <li>sal
                </li>
                <li>pimenta-do-reino moída na hora a gosto
                </li>
                
            </ul>
        </div>
    )
}