
import Sobre from '@/components/sobre/sobre.jsx'
import HomeBg from '../components/homebg/homebg.jsx'
import Menu from '@/components/menu/Menu.jsx'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HomeBg />
      <Menu />
      <Sobre />
    </div>
  )
}
