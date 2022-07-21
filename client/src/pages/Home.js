import axios from 'axios'
import { useEffect, useState } from 'react'


const Home = (  ) => {

    const [ rides, setRides ] = useState([])

    const getRides = async () => {
        const res = await axios.get('http://localhost:3001/api/rides')
        setRides(res.data.rides)
    }

    useEffect( ( ) => {
        getRides() 
    },[])

    return (
        <div>
            RIDES 
        </div>
    )
}

export default Home 

