const { Country, Activity } = require('../db')

exports.getCountryById = async (req, res) => {

    try {
        const { id } = req.params
        const country  = await Country.findByPk(id, {
            include: Activity
        })

        if (!country) return res.status(400).json({ message: 'Country not found' })
        return res.status(200).json(country)

    } catch (error) {
        return res.status(500).send(error.message)
    }

}