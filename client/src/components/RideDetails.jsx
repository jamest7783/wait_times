

const rideDetails = ({ info }) => {

  console.log( 'info=',info )

  return (
    <div className="rideDetails"  >
      
      <p className='description'>{ info.description }</p>
      <p className='review'>
      <input
        type="text"
        name="search"
        //value={ props.value }
         placeholder="Leave a review"
        //</p>onChange={   }
        ></input>Review { info.reviews }
      </p>
      <p className='waitTime'>
        <input
        type="text"
        name="search"
        //value={ props.value }
        placeholder="Leave a wait time"
        //onChange={  }
        ></input>Wait Time{ info.waitTimes}
      </p>
 
    </div>

    )
  }
  export default rideDetails


