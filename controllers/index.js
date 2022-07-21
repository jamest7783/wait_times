const { db } = require('../models/ride');
const  WaitTime = require('../models/waitTime');

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

module.exports = {
    createWaitTime
}