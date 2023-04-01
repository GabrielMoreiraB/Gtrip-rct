import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <div className="container-cards">
        <h2>a</h2>
      </div>
    </div>
  )
}

export default App
