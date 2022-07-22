const db = require('../db')
const Ride = require('../models/ride')
//const WaitTime = require('../models/waitTime')
//const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

  Ride.collection.drop() 

  const rides = [
    {
      _id: "62d9f308e91dd178917ee911",
      name: 'Widow Maker',
      description:
        'The Widow Maker launches 16 passengers through two cycles of positive and negative "G" experiences- back to back! Riders must be at least 52" tall to ride.',
      image:
        'https://amusementrides.org/wp-content/uploads/2016/03/What-You-Should-Know-About-A-Drop-Tower-Ride.jpg',
      reviews: [],    
      waitTime: []
    },
    {
      _id: "62d9f308e91dd178917ee912",
      name: 'G Force',
      description:
        'Allow your smallest thrill seekers to get a taste of the turns and twirls on these spinning Teacups of fun! Riders must be at least 42" tall to ride alone. Persons less than 42" must be accompanied by a supervising companion 14 years of age or older who is willing and able to ensure compliance with all safety rules.',
      image:
        'https://www.zamperla.com/wp-content/uploads/2021/03/ZPL_Rides-MiniTeaCup-02.jpg',
      reviews: [],    
      waitTime: []
    },
    {
      _id: "62d9f308e91dd178917ee913",
      name: 'Crazy River',
      description: 'Try riding this in the dark! Be warned: you will get wet and potentially soaked.',
      image:
        'https://parkvault.files.wordpress.com/2017/01/intamin-6-raging-river-kennywood-17.jpg?w=584',
      reviews: [],    
      waitTime: []
    },
    {
      _id: '62d9f308e91dd178917ee914',
      name: 'Last Breathe',
      description:
        'One of the fastest roller coasters in the world and the longest dive coaster, Last Breathe has a 360-degree flip, four inversions and a 75-metre drop. This steep drop holds for three seconds offering panoramic views of the park and then goes directly into an underground tunnel that is surrounded by water.',
      image:
        'https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/shutterstock_152171519.jpg',
      reviews: [],    
      waitTime: []
    },
    {
      _id: "62d9f308e91dd178917ee915",
      name: 'Wheel of Motion',
      description:
        'Like the fanciful flight of a whirlwind, the Wheel of Motion spins riders through the sky as they sit suspended from the top of the attraction. This popular family ride creates a delightful feeling of freedom as riders rock in the swinging chair. Riders must be at least 42" tall to ride.',
      image:
        'https://waldameer.com/wp-content/uploads/2019/03/img_flying-swings-1.jpg',
      reviews: [],    
      waitTime: []
    },
    {
      _id: "62d9f308e91dd178917ee916",
      name: 'Titanic',
      description:
      'This is a classic water boat ride. Board a "Titanic ship" and travel through wavy waters until reaching multiple hills. Up the hill you go to the top, until you crest and head down to a big splash at the bottom, twice! Riders must be at least 48” tall to ride alone. Riders between 42” and 48” must be accompanied by a supervising companion 14 years of age or older who is willing and able to ensure compliance with all safety rules. Persons under 42” tall cannot ride.',
      image:
        'https://www.silverwoodthemepark.com/rides/images/log-1.jpg',
      reviews: [],    
      waitTime: []
    }
  ]

  await Ride.insertMany(rides)
  //await WaitTime.insertMany(newWaitTime)
  //await Review.insertMany(reviews)
}

const run = async () => {
  await main()
  db.close()
}

run()
