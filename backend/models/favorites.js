'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    id_webtoon: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {});
  favorites.associate = function(models) {
    favorites.belongsTo(models.webtoons, {
      as:'webtoonData',
      foreignKey: 'id_webtoon'
    })
    // associations can be defined here
  };
  return favorites;
};