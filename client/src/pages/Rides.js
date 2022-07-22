import axios from 'axios'
import { useEffect, useState } from 'react'
import Ride from '../components/Ride'

const Rides = () => {

  const [ rides, setRides ] = useState([])

  const getRides = async () => {
      const res = await axios.get('http://localhost:3001/api/rides')
      setRides( res.data )
  }

  useEffect( ( ) => {
      getRides() 
  },[])

  return (
      <div className='card'>
          { rides.map( ride => (
            
              <Ride info={ ride }
              key={ ride.name }/>
          ) ) }
      </div>
  )
}

export default Rides 
