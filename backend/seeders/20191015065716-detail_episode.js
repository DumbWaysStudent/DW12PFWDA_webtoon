'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detail_episodes', [{
      page:1,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jgWLjQTO5fM1w35FcbI8GH_DVlwUBRD6CRGaprvJgxzZcdx7',
      id_webtoon :1,
    },
    {
      page:2,
      image:'https://swebtoon-phinf.pstatic.net/20180815_168/1534306363709DyFxg_JPEG/11_EC8DB8EB84A4EC9DBC_mobile.jpg',
      id_webtoon :1,
    },
    {
      page:3,
      image:'https://shortcut-test2.s3.amazonaws.com/uploads/project/attachment/64488/default_Screen_Shot_2019-03-25_at_2.13.26_PM.png',
      id_webtoon :1,
    }], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('detail_episodes', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('detail_episodes', null, {});
    */
  }
};