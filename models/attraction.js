const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const Attraction = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model('attractions', Attraction)