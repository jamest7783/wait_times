


const rideCard = ({ info }) => {
    return (

      <div className="rideCard"  >
        <img src={info.image} alt="image"></img>
        <div className="info-wrapper flex-col">
          <h3>
            <p>{ info.name }</p>
            <p>{ info.description }</p>
            <p>{ info.reviews }</p>
            <p>{ info.waitTimes}</p>
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