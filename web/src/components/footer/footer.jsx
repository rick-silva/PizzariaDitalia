
import iconFacebook from '../../assets/icons/facebook.png' 
import iconInstagram from '../../assets/icons/instagram.png' 
import iconWhatsapp from '../../assets/icons/whatsapp.png' 


const Footer = () => {
    return (
        <div className="w-full h-96 bg-orange-color border-t-black border-t-2 flex justify-center items-center">

            <div className='w-1/2 h-96 flex justify-center items-center flex-col text-white'>
                <h4 className="font-font-logo text-5xl">Pizzaria D'Itália</h4>
                <p className="text-xl m-12"><strong>Endereço:</strong> Midgard, Rua dos bobos, Nº 0 SP<br/>
                    <strong>E-mail:</strong> pizzaria@pizzaria.com
                </p>
            </div>

            <div className='w-2px h-44 bg-gray-color'>
                
            </div>

            <div className='w-1/2 h-96 flex justify-evenly items-center '>
                <img className='w-20' src={iconFacebook} alt="" />
                <img className='w-20' src={iconInstagram} alt="" />
                <img className='w-20' src={iconWhatsapp} alt="" />
            </div>
            
        </div>
    )
}

export default Footer;