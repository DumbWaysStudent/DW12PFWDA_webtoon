'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoons = sequelize.define('webtoons', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  webtoons.associate = function(models) {
    // associations can be defined here
    webtoons.belongsTo(models.user, {
      as:'UserData',
      foreignKey: 'created_by'
    })
  };
  return webtoons;
};