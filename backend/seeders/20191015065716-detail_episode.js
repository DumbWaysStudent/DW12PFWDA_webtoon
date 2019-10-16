'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('detail_episodes', [{
      page:1,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jgWLjQTO5fM1w35FcbI8GH_DVlwUBRD6CRGaprvJgxzZcdx7',
      id_webtoon :1,
      id_episode :1,
    },
    {
      page:2,
      image:'https://swebtoon-phinf.pstatic.net/20180815_168/1534306363709DyFxg_JPEG/11_EC8DB8EB84A4EC9DBC_mobile.jpg',
      id_webtoon :1,
      id_episode :1,
    },
    {
      page:3,
      image:'https://shortcut-test2.s3.amazonaws.com/uploads/project/attachment/64488/default_Screen_Shot_2019-03-25_at_2.13.26_PM.png',
      id_webtoon :1,
      id_episode :1,
    },
    {
      page:1,
      image:'https://i.pinimg.com/236x/23/01/4d/23014de8af8df1d742bc83cf43193b4f.jpg',
      id_webtoon :2,
      id_episode :1,
    },
    {
      page:2,
      image:'https://i2.wp.com/mariviu.com/wp-content/uploads/2019/06/3-bayangan.jpg?resize=600%2C387&ssl=1',
      id_webtoon :2,
      id_episode :1,
    },
    {
      page:3,
      image:'https://i.pinimg.com/736x/be/15/05/be1505b277d0797ddfe7d8d1b15e448b.jpg',
      id_webtoon :2,
      id_episode :1,
    },
    {
      page:1,
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxG2mrlKN0StuCkJlI2IAtkWa--QtO83K80OVFLdAUxSWJIvaDA',
      id_webtoon :3,
      id_episode :1,
    },
    {
      page:2,
      image:'https://i.pinimg.com/originals/78/f1/84/78f184d5eb71ccc67ea3e60e9113085d.jpg',
      id_webtoon :3,
      id_episode :1,
    },
    {
      page:3,
      image:'https://i.pinimg.com/originals/7e/ce/db/7ecedb47c8e982a27ee7e059ce20939b.jpg',
      id_webtoon :3,
      id_episode :1,
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
    return queryInterface.bulkDelete('detail_episodes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('detail_episodes', null, {});
    */
  }
};