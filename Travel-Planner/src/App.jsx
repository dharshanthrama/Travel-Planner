import { useState } from 'react'
import Hero from './Components/Hero'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'
import Dashboard from './Pages/Dashboard'
import UpcomingItinerary from './Pages/UpcomingItinerary'
import ScheduleTripForm from './Pages/ScheduleTripForm'
function App() {
  

  return (
    <>
    <Carousel/>
     <Hero/>
    <Dashboard/>
    <ScheduleTripForm/>
    <UpcomingItinerary/>
     <Footer/>
    </>
  )
}

export default App
