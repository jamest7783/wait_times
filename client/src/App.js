import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import react from 'react'
import Home from './pages/Home.js'
import Header from './components/Header'
import Rides from './pages/Rides'
import RideDetails from './components/RideDetails'

const App = () => {
    
  return (
      <div className='page'>
        < Header />
        <main> 

            <Routes>
              
              <Route path='/' element={<Home />} />
              <Route path='/rides' element={<Rides />} />
              <Route path="/rides/:id" element={<RideDetails/>} />
    
            </Routes>

        </main>
      </div>
    )
  }
  export default App