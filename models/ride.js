const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Ride = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        attraction: { type: Schema.Types.ObjectId, ref: 'Attraction' },
        reviews: { type: String, required: true },
        waitTimes: { type: String, required: true }

        
    },
    { timestamps: true },
)

module.exports = mongoose.model('Ride', Ride)