import axios from 'axios'
import { useEffect, useState } from 'react'
import RideDetail from '../components/RideDetail'

const RideDetails = () => {

  const [ rideDetails, setRideDetails ] = useState([])

  const getRideDetails = async () => {
      const res = await axios.get('http://localhost:3001/api/rides')
      setRideDetails( res.data )
 
  }

  useEffect( ( ) => {
      getRideDetails() 
  },[])

  return (
      <div className='all-details'>
          { rideDetails.map( ride => (
            
              <RideDetail info={ ride }
              key={ ride.name }/>
          ) ) }
      </div>
  )
}

export default RideDetails
