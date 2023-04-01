import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Card from './components/Card'

function App() {
  const cards =[
    {
      nome: 'Pacote Standart';
      
    }
  ]

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className="container-cards">
        <Card/>
      </div>
    </div>
  )
}

export default App
