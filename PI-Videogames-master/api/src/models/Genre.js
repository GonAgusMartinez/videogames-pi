const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Genre = sequelize.define('Genre', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  });

  return Genre;
};