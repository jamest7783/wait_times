const waitTime = require('../models/waitTime');

const createWaitTime = async (req, res) => {
    try {
        const wait = await new waitTime(req.body)
        await wait.save()
        res.send( 'Connecting' )
        return res.status(201).json({
            wait,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createWaitTime,
}