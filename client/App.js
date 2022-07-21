import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import react from 'react'

const App = () => {
    return (
      <div>
        <Header Header/>
        <main>
         {/* <Routes>
            <Route path="/api" element={<Home />} />
            <Route path="/rides" element={<Rides />} />*
            {/* <Route path="/GameDetails" element={<GameDetails />} />
          <Route path="/ViewGames" element={<ViewGames />} /> */}
         {/* </Routes>*/}
        </main>
      </div>
    )
  }
  export default App