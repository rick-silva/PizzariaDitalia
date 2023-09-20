
import pizzaImg from '../../assets/img/PizzaMarguerita.png'
import addIcon from '../../assets/icons/AddIcon.png'


const Card = () => {
    return (
        <div className="bg-orange-color w-96 h-h-33rem rounded-2xl pt-7 m-auto mt-10">
            <div>
                <h2 className="font-font-logo text-5xl text-white text-center">Marguerita</h2>
            </div>

            <div className='w-full mt-5'>
                <img className='w-80 m-auto'  src={pizzaImg} alt="" />
            </div>

            <div className='text-white w-full mt-5 text-center'>
                <h3 className='text-2xl font-bold'>Pizza Média</h3>
                <p className='mt-5 px-4'>Recheio: tomate sem cascas, mussarela de búfala de Campânia, alho, azeite de oliva e basílico (folhas aromáticas).</p>
                <p className='text-5xl mt-5 font-font-logo'>R$ 50,00</p>
            </div>

            <div className='w-full h-auto bg-black relative'>
                <img className='w-16 absolute right-5 cursor-pointer' src={addIcon} alt="" />
            </div>

        </div>
    )

}

export default Card;