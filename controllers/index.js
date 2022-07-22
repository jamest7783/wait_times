
const { db } = require('../models/ride');
const  WaitTime = require('../models/waitTime');
const Review = require('../models/review')

const createWaitTime = async ( req, res ) => {
    try {
        const waittime = await new WaitTime(req.body)
        await waittime.save()
        return res.status(201).json({
            waittime,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const createReview = async ( req, res ) => {
    try {
        // Review.create( req.body )
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({
            review,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }


    
 
    
}

module.exports = {
    createWaitTime,
    createReview
}