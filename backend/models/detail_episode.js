'use strict';
module.exports = (sequelize, DataTypes) => {
  const detail_episode = sequelize.define('detail_episode', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    id_webtoon: DataTypes.INTEGER
  }, {});
  detail_episode.associate = function(models) {
    detail_episode.belongsTo(models.webtoons, {
      as:'WebtoonData',
      foreignKey: 'webtoon_data'
    })
    // associations can be defined here
  };
  return detail_episode;
};