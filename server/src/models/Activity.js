const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id:{
           type: DataTypes.INTEGER,
           allowNull: false,
           autoIncrement: true,
           primaryKey: true 
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        season: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false
        },

        difficulty: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull: false
        },

        duration: {
            type: DataTypes.INTEGER, 
            allowNull: false
        }
    }, { timestamps: false })
}