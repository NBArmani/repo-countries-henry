const { Sequelize } = require('sequelize');
const { Country } = require('../db');
const { Op } = Sequelize;

exports.getCountriesByName = async (req, res) => {
    try {
        const { name } = req.query;
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        });

        if (!countries || countries.length === 0) {
            return res.status(404).json({ message: 'Countries not found' });
        }

        return res.status(200).json(countries);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};