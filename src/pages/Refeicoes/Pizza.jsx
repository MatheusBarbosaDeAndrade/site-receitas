import style from './Pizza.module.css'

export default function Lasanha(){
    return(
        <div className={style.comida}>
                <img
                src='src/images/PIZZA.jpeg'
                alt='PIZZA'
            />
            <h1>Pizza</h1>
            <p>
            Chegou a sua hora de virar um verdadeiro pizzaiolo! Esta receita revela o segredo para uma massa de pizza simples e rápida, diretamente na sua cozinha. Prepare-se para se encantar com o resultado final! Com apenas alguns ingredientes simples, como farinha de trigo, fermento biológico, água, óleo e um toque especial de cachaça, esta massa de pizza ganha vida em um processo rápido e prático. Comece dissolvendo o fermento, sal e açúcar na água morna, antes de misturar com a farinha, óleo e cachaça, formando uma massa de pizza macia e elástica. Após descansar por 30 minutos para crescer, é hora de abrir a massa em discos, furá-los com um garfo, adicionar o molho e levá-los ao forno pré-aquecido por 15 minutos, a uma temperatura média de 180°C. O resultado? Discos de pizza frescos e deliciosos prontos para receber o seu recheio favorito. Descubra o prazer de criar suas próprias pizzas em casa e surpreenda-se com a facilidade e sabor desta receita de massa de pizza incrível!


            </p>

            <ul>
                <li>1 kg de farinha de trigo

                </li>
                <li>30 g de fermento biológico
                </li>
                <li>3 xícaras de água morna


                </li>
                <li>3/4 xícaras de óleo</li>
                <li>1 colher (chá) de sal</li>
                <li>1 colher (chá) de açúcar

                </li>
                <li>1 colher (sopa) de pinga

                </li>

            </ul>
        </div>
    )
}