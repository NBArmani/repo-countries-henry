//const { Country } = require('../db')
const { informationFromApi } = require('../getInformationFromDB')

let dataLoaded = false
exports.getAllCountries = async (req, res) => {
    try {
        const countriesApi = await informationFromApi()
        return res.status(200).json(countriesApi)

    } catch (error) {
        return res.status(500).json({ error: `Se ha producido el error: ${error.message}` })
    }
}