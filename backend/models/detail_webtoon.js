'use strict';
module.exports = (sequelize, DataTypes) => {
  const detail_webtoon = sequelize.define('detail_webtoon', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    id_webtoon: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER

  }, {});
  detail_webtoon.associate = function(models) {
    // associations can be defined here
  };
  return detail_webtoon;
};