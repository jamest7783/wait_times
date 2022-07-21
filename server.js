const express = require('express');
const logger = require( 'morgan' )
const cors = require( 'cors' )
const routes = require('./routes');
const db = require('./db');
const Ride = require( './models/ride.js' )
const { Attraction } = require( './models/attraction.js' )

// require() imports and middleware here ^ ///////

console.log( Ride )





const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


