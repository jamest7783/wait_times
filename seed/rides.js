const db = require('../db')
const Attraction  = require('../models/attraction')
const Ride = require('../models/ride')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  Ride.collection.drop() 

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
    {
      name: 'Widow Maker',
      description:
        'The Widow Maker launches 12 passengers through two cycles of positive and negative "G" experiences- back to back! Riders must be at least 52" tall to ride.',
      image:
        'https://s.abcnews.com/images/GMA/220326_gma_carr1_hpMain_1x1_384.jpg',
      attraction: att0._id,
      reviews: [],    
      waitTime: []
    },
    {
      name: 'G Force',
      description:
        'Allow your smallest thrill seekers to get a taste of the turns and twirls on these spinning Teacups of fun! Riders must be at least 42" tall to ride alone. Persons less than 42" must be accompanied by a supervising companion 14 years of age or older who is willing and able to ensure compliance with all safety rules.',
      image:
        'https://www.zamperla.com/wp-content/uploads/2021/03/ZPL_Rides-MiniTeaCup-02.jpg',
      attraction: att1._id,
      reviews: [],    
      waitTime: []
    },
    {
      name: 'Crazy River',
      description: 'Riders take ',
      image:
        'https://www.the-sun.com/wp-content/uploads/sites/6/2020/08/NINTCHDBPICT000602930853.jpg',
      attraction: att2._id,
      reviews: [],    
      waitTime: []
    },
    {
      name: 'Last Breathe',
      description:
        'One of the fastest roller coasters in the world and the longest dive coaster, Last Breathe has a 360-degree flip, four inversions and a 75-metre drop. This steep drop holds for three seconds offering panoramic views of the park and then goes directly into an underground tunnel that is surrounded by water.',
      image:
        'https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/shutterstock_152171519.jpg',
      attraction: att3._id,
      reviews: [],    
      waitTime: []
    },
    {
      name: 'Wheel of Motion',
      description:
        'Like the fanciful flight of a whirlwind, the Wheel of Motion spins riders through the sky as they sit suspended from the top of the attraction. This popular family ride creates a delightful feeling of freedom as riders rock in the swinging chair. Riders must be at least 42" tall to ride.',
      image:
        'https://waldameer.com/wp-content/uploads/2019/03/img_flying-swings-1.jpg',
      attraction: att4._id,
      reviews: [],    
      waitTime: []
    }
  ]

  console.log(rides)
  //await Ride.insertMany(rides)
  //await WaitTime.insertMany(newWaitTime)
  //await Review.insertMany(reviews)
}

const run = async () => {
  await main()
  db.close()
}

run()
