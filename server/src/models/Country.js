const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },

    capital_city:{
      type: DataTypes.STRING,
      allowNull: true
    },

    subregion:{
      type: DataTypes.STRING,
      allowNull: true
    },

    area:{
      type: DataTypes.DECIMAL,
      allowNull: true
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { timestamps: false });
};