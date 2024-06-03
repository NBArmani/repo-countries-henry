const { where } = require('sequelize');
const { Activity, Country } = require('../db');

exports.createActivity = async (req, res) => {
    try {
        const { name, season, difficulty, duration, id } = req.body
        if (!name || !season || !difficulty || !id || !id.length) {
            return res.status(404).send('missing information')
        }

        const newActivityData = { name, season, difficulty }
        if (duration) {
            newActivityData.duration = duration
        }
        const newActivity = await Activity.create(newActivityData)

        const countries = await Country.findAll({
            where: {
                id: id
            }
        })

        if (!countries.length) {
            return res.status(400).send('no valid countries are found')
        }

        await newActivity.addCountries(countries)

        return res.status(200).json(newActivity)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}