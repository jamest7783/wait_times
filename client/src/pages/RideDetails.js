import axios from 'axios'
import { useEffect, useState } from 'react'
import RideDetails from '../components/RideDetails'

const RideDetails = () => {

  const [ rideDetails, setRideDetails ] = useState([])

  const getRideDetails = async () => {
      const res = await axios.get('http://localhost:3001/api/rides')
      console.log( 'ssdfdsf' )
      setRideDetails( res.data )
 
  }

  useEffect( ( ) => {
      getRideDetails() 
  },[])

  return (
      <div className='card'>
          { rideDetails.map( ride => (
            
              <RideDetails info={ ride }
              key={ ride.name }/>
          ) ) }
      </div>
  )
}

export default RideDetails
