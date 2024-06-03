const axios = require('axios')
const { Country, Activity } = require('./db')

exports.informationFromApi = async () => {
    try {

        const response = await axios.get('http://localhost:5000/countries');
        const countriesData = response.data;

        for (const country of countriesData) {
            await Country.findOrCreate({
                where: {
                    id: country.cca3
                },
                defaults: {
                    name: country.name.common,
                    image: country.flags.png,
                    continent: country.region,
                    capital: country.capital ? country.capital[0] : null,
                    subregion: country.subregion,
                    area: country.area,
                    population: country.population,
                }
            });

        }
        const existingCountry = await Country.findAll(
            { include: Activity }
        )
        console.log("La base de datos ha sido actualizada con los datos de la API externa");
        return existingCountry

    } catch (error) {
        throw new Error (error)
    }
};


/*const api = await Country.findAll({
            attributes: ['id']
        })
        const a = api.map(country => country.id)
        const b = await axios.get('http://localhost:5000/countries')
        for (const c of b.data) {
            if(!a.includes(c.cca3)){
                const d = await Country.create({
                    id: c.cca3,
                    name: c.name.common,
                    image: c.flags.png,
                    continent: c.region,
                    capital: c.capital ? c.capital[0] : null,
                    subregion: c.subregion,
                    area: c.area,
                    population: c.population
                })
            }
            
        }
        console.log("se cargó la base de datos")*/