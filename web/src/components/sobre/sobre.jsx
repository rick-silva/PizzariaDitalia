

import pizzaImg from '../../assets/img/PizzaApresentacao.png'

const Sobre = () =>{
    return(
        <div id='cardapio' className="w-full h-screen flex my-10">
            <img className="" src={pizzaImg} alt="" />
            <div className='w-full'>
                <div className='text-center'>
                    <h2 className='text-center text-8xl'>Pizzaria D'italia</h2>
                </div>
                <div className='text-justify'>
                    <p className=' text-2xl'>Bem-vindo à nossa deliciosa pizzaria! Aqui, na Pizzaria<br /> Sabor D'Itália, acreditamos que a pizza é uma verdadeira<br /> obra-prima culinária. Com anos de experiência na arte de<br /> fazer pizzas, estamos dedicados a proporcionar aos<br /> nossos clientes uma experiência gastronômica <br />inesquecível.
                    </p>
                    <p className='text-2xl'>Nossas pizzas são preparadas com os melhores<br /> ingredientes, cuidadosamente selecionados para garantir<br /> qualidade e sabor autêntico. Nossa massa é feita<br /> diariamente, seguindo receitas tradicionais italianas<br />, resultando em uma base leve, crocante e perfeitamente<br /> equilibrada. E, é claro, usamos apenas os melhores<br /> molhos de tomate, queijo fresco e uma variedade de<br /> coberturas frescas e deliciosas.
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Sobre;