import { useState } from 'react'

import './App.css'
import Homebg from './components/homebg/homebg.jsx'
import Menu from './components/menu/Menu.jsx'
import Sobre from './components/sobre/sobre.jsx'
import Cardapio from './components/cardapio/cardapio'
import Aplicativo from './components/aplicativo/aplicativo'
import Footer from './components/footer/footer'



function App() {

  return (
    <>
      <Homebg />
      <Menu />
      <Sobre />
      <Cardapio />
      <Aplicativo />
      <Footer />
    </>
  )
}

export default App
