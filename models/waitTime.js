const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const WaitTime = new Schema(
    {
        ride_id: { type: Schema.Types.ObjectId, ref: 'ride_id' },
        time:   { type: String, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('WaitTime', WaitTime)   // WaitTime --> waittimes 