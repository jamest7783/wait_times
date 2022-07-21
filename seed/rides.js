const db = require('../db')
const { Attraction } = require( '../models/attraction' )
const { Ride } = require('../models')
const { WaitTime } = require( '../models/waitTime' )
const waitTime = require('../models/waitTime')


// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {


    const newWaitTime = await new WaitTime({
        ride_id: 'fdfdf',
        review: 'this is a review',
        time: '10'

    })


    const att0 = await new Attraction({
        name: 'Teacups'
    })
    att0.save()
    
    const att1 = await new Attraction({
        name: 'Roller-Coaster'
    })
    att1.save()
    
    const att2 = await new Attraction({
        name: 'Tower-Drop'
    })
    att2.save()
    
    const att3 = await new Attraction({
        name: 'Lazy-River'
    })
    att3.save()
    
    const att4 = await new Attraction({
        name: 'Slide'
    })
    att4.save()

    const rides = [
        { name: 'a', description: 'a', image: 'a', attraction: att0._id },
        { name: 'a', description: 'a', image: 'a', attraction: att1._id },
        { name: 'a', description: 'a', image: 'a', attraction: att2._id },
        { name: 'a', description: 'a', image: 'a', attraction: att3._id },
        { name: 'a', description: 'a', image: 'a', attraction: att4._id }
    ]

    console.log("Created some rides!")
    await Ride.insertMany( rides )
    await WaitTime.insertOne( newWaitTime )

}


const run = async () => {
    await main()
    db.close()
}

run()