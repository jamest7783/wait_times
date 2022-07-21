import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import react from 'react'
import  Home  from './pages/Home.js'

const App = () => {
    
  return (
      <div>
        <main> 

          <Routes>
            <Route path='/' element={<Home />} />

          </Routes>
        </main>
      </div>
    )
  }
  export default App