const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const waitTime = new Schema(
    {
        ride_id: { type: Schema.Types.ObjectId, ref: 'ride_id' },
        review: { type: String, required: true },
        time:   { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('waitTime', waitTime)