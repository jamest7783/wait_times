const db = require('../db')
const Ride = require('../models/ride')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const att0 = await new Brand({
        name: 'Apple',
        url: 'https://www.apple.com'
      })
      brand1.save()
    
      const brand2 = await new Brand({
        name: 'Vespa',
        url: 'https://www.vespa.com'
      })
      brand2.save()
    
      const brand3 = await new Brand({
        name: 'New Balance',
        url: 'https://www.newbalance.com'
      })
      brand3.save()
    
      const brand4 = await new Brand({
        name: 'Tribe',
        url: 'https://www.tribebicycles.com'
      })
      brand4.save()
    
      const brand5 = await new Brand({
        name: 'Stumptown',
        url: 'https://www.stumptowncoffee.com'
      })
      brand5.save()

    const rides = [
        { name: 'a', description: 'a', image: 'a', attraction: att0._id },
        { name: 'a', description: 'a', image: 'a', attraction: att1._id },
        { name: 'a', description: 'a', image: 'a', attraction: att2._id },
        { name: 'a', description: 'a', image: 'a', attraction: att3._id },
        { name: 'a', description: 'a', image: 'a', attraction: att4._id },
        { name: 'a', description: 'a', image: 'a', attraction: att5._id },
        { name: 'a', description: 'a', image: 'a', attraction: att6._id },
        { name: 'a', description: 'a', image: 'a', attraction: att7._id },
        { name: 'a', description: 'a', image: 'a', attraction: att8._id },
        { name: 'a', description: 'a', image: 'a', attraction: att9._id },
        ]

    await Ride.insertMany(rides)
    console.log("Created some rides!")
}
const run = async () => {
    await main()
    db.close()
}

run()