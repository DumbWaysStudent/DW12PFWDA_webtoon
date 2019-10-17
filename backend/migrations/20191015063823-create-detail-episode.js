'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('detail_episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      id_webtoon: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'webtoons',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      id_episode: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'detail_webtoons',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')

      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('detail_episodes');
  }
};