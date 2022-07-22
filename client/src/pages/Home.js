// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import Ride from '../components/Ride'



const Home = (  ) => {
    return (
        <div className='home'>
            <h1> Welcome to Star Dome!</h1>
                <p> There's so much magic waiting for you
                    in the world of Star Dome! From first time thrill seekers,
                    and experienced Dare-devils we have the fastest, most powerful,
                    and biggest adrenaline boosting rides in the world! Check out our ride, Widow Maker,
                    a 2021 Guiness World Record Holder for fastest drop!
                </p>
            <div className='hoursticketsevents'>
                <h2 className='hours'>Hours</h2>
                <h2 className='tickets'>Tickets</h2>
                <h2 className='events'>Events</h2>
            </div>
                <footer><i> Warning, Star Dome is not responsible for loss and injury by participating on our rides, thrill-seekers are asked to sign a waver and provide a valid government ID before entering. 16-17 years require a parental guardian. You must be at least 16 to ride.</i></footer>
        </div>
    )
}
export default Home
