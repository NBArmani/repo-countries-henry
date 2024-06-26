const { Sequelize } = require('sequelize');
const { Country } = require('../db');
const { Op } = Sequelize;

exports.getCountriesByName = async (req, res) => {

    const { name } = req.query;
    console.log('Valor de name:', name);
    try {
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
        });
        if (countries.length > 0) {
            res.status(200).json(countries);
        } else {
            res.status(404).json({ message: 'No se encontraron países con ese nombre.' });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};