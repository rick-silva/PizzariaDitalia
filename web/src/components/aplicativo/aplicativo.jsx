
import pizzaApp from '../../assets/img/PizzaApp.png'
import tela from '../../assets/img/Screen.png'
import tela2 from '../../assets/img/Screen2.png'


const Aplicativo = () =>{
    return(
        <div id='aplicativo' className="w-full h-screen flex">
            <div className="w-2/4 flex justify-center items-center flex-col">
                <h3 className="text-text-main-color text-4xl text-center">Baixe nosso APP e tenha<br/>  10% de desconto no<br/> seu primeiro pedido !!</h3>
                <img className='w-80' src={pizzaApp} alt="" />
            </div>
            <div className="w-2/4 flex justify-center items-center">
                <img className='w-72 h-h-40rem mr-8' src={tela} alt="" />
                <img className='w-72  h-h-40rem'src={tela2} alt="" />
            </div>
        </div>
    )
}

export default Aplicativo