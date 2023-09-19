
import Card from "../cardPizza/Card"

const Cardapio = () => {

    return (
        <div id='cardapio' className="w-full h-screen bg-slate-800">
            <div className="text-center pt-6">
                <h2 className="text-8xl font-font-logo text-text-main-color">Cardápio</h2>
            </div>
            <div className='grid grid-cols-3'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Cardapio