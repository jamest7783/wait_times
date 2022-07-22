import RideDetails from './RideDetails'
import { Link } from 'react-router-dom'

const rideCard = ({ info }) => {

  let show = false 

  const showDetails = () => {
    console.log( 'clicked ')
    show = true
    return show
  }
  let details = info.name
   
  return (
    <div className="rideCard"  >

    {/* <Link to="/rides/:id">
      <button>Back</button>
    </Link> */}
      
      <p className='name'>{ info.name }</p>
      <img src={info.image} alt="image" onClick={   showDetails  }></img>
  
      <div className="info-wrapper flex-col">
        <h3>
          { show===true && ( <p>dfdfd</p> ) }
 
         
  
          {/*<p>Review { info.reviews }</p>*/}
          {/*<p>Wait Time{ info.waitTimes}</p>*/}
        </h3>
      </div>
    </div>

    )
  }
  export default rideCard



 

 
 