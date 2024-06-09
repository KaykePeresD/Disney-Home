import { useState } from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header />

      <Slider />

      <ProductionHouse />

      <GenreMovieList />
    </div>
  )
}

export default App
