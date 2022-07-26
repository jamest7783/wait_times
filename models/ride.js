const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Ride = new Schema(
    {
        
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        reviews: { type: Array, required: false },
        waitTimes: { type: Array, required: false  }

    },
    { timestamps: true },
)

module.exports = mongoose.model('Ride', Ride)