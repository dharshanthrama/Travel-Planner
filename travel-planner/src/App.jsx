import { useState } from 'react'
import './App.css'
import Carousel from './components/ui/custom/Carousel'
import Hero from './components/ui/custom/Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
     <Carousel/>
     <Hero/>
    </>
  )
}

export default App
