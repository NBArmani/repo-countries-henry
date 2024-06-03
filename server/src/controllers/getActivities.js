const { Activity } = require('../db')

exports.getActivities = async (req, res) => {
    try {
        const allActivities = await Activity.findAll()

        return res.status(200).json(allActivities)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}