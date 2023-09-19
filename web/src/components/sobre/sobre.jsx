

import pizzaImg from '../../assets/img/PizzaApresentacao.png'

const Sobre = () => {
    return (
        <div id='pizzariaDitalia' className="w-full h-screen flex ">
            <div className="w-1/4  ">
                <img className='w-96 h-h-46rem my-5'  src={pizzaImg} alt="" />
            </div>
            <div className='w-3/4 flex justify-center flex-col '>
                <div className='mt-9 text-center'>
                    <h2 className='text-8xl font-font-logo text-text-main-color'>Pizzaria D'italia</h2>
                </div>
                <div className='w-2/4 m-auto teste text-justify '>
                    <p className='text-2xl mb-5'>Bem-vindo à nossa deliciosa pizzaria! Aqui, na Pizzaria Sabor D'Itália, acreditamos que a pizza é uma verdadeira obra-prima culinária. Com anos de experiência na arte defazer pizzas, estamos dedicados a proporcionar aos nossos clientes uma experiência gastronômica inesquecível.
                    </p>
                    <p className='text-2xl'>Nossas pizzas são preparadas com os melhores ingredientes, cuidadosamente selecionados para garantir qualidade e sabor autêntico. Nossa massa é feita diariamente, seguindo receitas tradicionais italianas, resultando em uma base leve, crocante e perfeitamente equilibrada. E, é claro, usamos apenas os melhores molhos de tomate, queijo fresco e uma variedade de coberturas frescas e deliciosas.
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Sobre;