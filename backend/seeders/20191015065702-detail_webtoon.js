'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detail_webtoons', [{
      title: 'Fateful Encounter',
      image: 'https://data.whicdn.com/images/320271326/superthumb.jpg?t=1538528514',
      id_webtoon : 1,
    },
    {
      title: 'Superpower',
      image: 'https://pbs.twimg.com/media/EDjg_osXsAERfQu.jpg',
      id_webtoon : 1,
    },
    {
      title: 'Workaholic',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVxP6YOHlgnWWbYirDlJPMcuVM2P8OrLmsnm_qTo0sxoOFo4x',
      id_webtoon : 1,
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('detail_webtoons', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('detail_webtoons', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('detail_webtoons', null, {});
    */
  }
};