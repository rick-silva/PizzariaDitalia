
import logo from '/src/assets/icons/logoMenu.png';

const Menu = () =>{
    return(
        <div className="w-full  h-24 flex border-b-2 border-black">
            <nav className="w-full m-auto sticky">
                <ul className='w-full flex justify-around items-center text-4xl'>
                    <a href="#pizzariaDitalia"><img  className='' src={logo} alt="" /></a>
                    <a href="#cardapio"><li className='mx-8'>Cardápio</li></a>
                    <li className='mx-8'>FAQ</li>
                    <li className='mx-8'>Aplicativo</li>
                    <li className='mx-8'>Dashboard</li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;