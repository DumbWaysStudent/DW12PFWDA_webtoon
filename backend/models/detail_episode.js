'use strict';
module.exports = (sequelize, DataTypes) => {
  const detail_episode = sequelize.define('detail_episode', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    id_webtoon: DataTypes.INTEGER,
    id_episode: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
  }, {});
  detail_episode.associate = function(models) {
    // associations can be defined here
  };
  return detail_episode;
};