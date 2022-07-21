const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();
const Ride = require( '../models/ride.js' )
const waitTime = require( '../models/waitTime.js' )

//router.get('/', (req, res) => res.send('This is root!'))

router.get('/rides', async (req, res) => {
    const rides = await Ride.find()
    res.json( rides )
})

router.post('/wait-time', async ( req, res ) => {
    res.send( 'making wait time' )
    controllers.createWaitTime
})

module.exports = router;