'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    id_webtoon: DataTypes.INTEGER
  }, {});
  favorites.associate = function(models) {
    // associations can be defined here
  };
  return favorites;
};