import { useState } from 'react'

import './App.css'
import Homebg from './components/homebg/homebg.jsx'
import Menu from './components/menu/Menu.jsx'
import Sobre from './components/sobre/sobre.jsx'



function App() {

  return (
    <>
      <Homebg />
      <Menu />
      <Sobre />
    </>
  )
}

export default App
