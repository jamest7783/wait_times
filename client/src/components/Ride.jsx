


const rideCard = ({ info }) => {
    return (

      <div className="rideCard"  >
        <p className='name'>{ info.name }</p>
        <img src={info.image} alt="image"></img>
        <div className="info-wrapper flex-col">
          <h3>
            
            <p>{/* info.description */}</p>


 


            {/*<p>Review { info.reviews }</p>*/}
            {/*<p>Wait Time{ info.waitTimes}</p>*/}
          </h3>
        </div>
      </div>

    )
  }
  export default rideCard



  //<p>NAME={ride.name}</p>,
  //<img src={ride.image}/>
  //<p>IMAGE={ride.image}</p>
  //<p>DESC={ride.description}</p>