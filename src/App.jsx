import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Card from './components/Card'

function App() {
  const cards =[
    {
      nome: 'Pacote Standart',
      itens :[
        'Quarto Standart',
        'chek in de 10h as 13h',
        'Piscina e sauna',
      ],
      preco:'289,90',
      cor: '#A6A6A6'
    },
    {
      nome: 'Pacote Premium',
      itens :[
        'Quarto Premium',
        'Cama king',
        'chek in de 24h',
        'Piscina e sauna',
        'Open Food'
      ],
      preco:'389,90',
      cor: '#25F195'
    },
    {
      nome: 'Pacote King',
      itens :[
        'Quarto King',
        'Vista para o mar',
        'Hidromassagem',
        'Cama king',
        'chek in de 24h',
        'Piscina e sauna privativas',
        'Open Food',
        'Open Bar'
      ],
      preco:'589,90',
      cor: '#FFBD59'
    }
  ]

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className="container-cards">
        {cards.map(item => <Card nome={item.nome} itens={item.itens} preco={item.preco} cor={item.cor}/> )}
      </div>
    </div>
  )
}

export default App
