import axios from "axios"
import { useState } from "react"


const RideDetail = ({ info }) => {

  console.log( 'info=',info )
  const [ review, setReview ] = useState( '' )
  const [ waitTime, setWaitTime ] = useState( '' )


  const handleReview = async ( e ) => {
    e.preventDefault() 
    const res = await axios.post('http://localhost:3001/api/reviews',{
      review,
      ride_id : info._id
    })
    info.reviews.push( { review, ride_id : info._id } )
    setReview( '' )
  }

  const handleWaitTime = async ( e ) => {
    e.preventDefault() 
    const res = await axios.post('http://localhost:3001/api/wait-times',{
      time: waitTime,
      ride_id : info._id
    })
    info.waitTimes.push( { time: waitTime, ride_id : info._id } )
    setWaitTime( '' )
  }


  return (
    <div className="rideDetails"  >
      
      <p className='description'>{ info.description }</p>

      <form onSubmit={ handleReview }>
        <input
          type="text"
          name="search"
          value={ review  }
          placeholder="Leave a review"
          onChange={ ( e ) => {
            setReview( e.target.value )
          }}>
        </input> { info.reviews }
        <button type='submit'>SUBMIT REVIEW</button>
      </form>

      <form onSubmit={ handleWaitTime}>
        <input
          type="text"
          name="search"
          value={ waitTime }
          placeholder="Leave a wait time"
          onChange={ ( e ) => {
            setWaitTime( e.target.value )
          }}>
        </input> { info.waitTime }
        <button type='submit'>SUBMIT WAIT TIME</button>
      </form>
 
    </div>

    )
  }
  export default RideDetail


