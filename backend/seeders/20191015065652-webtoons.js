'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [{
      title: 'True Beauty',
      genre: 'Romance',
      image :'https://i.ytimg.com/vi/GdWwzHVgF5o/hqdefault.jpg',
      created_by : 1
    },{
      title: 'Solo Leveling',
      genre: 'Fantasy',
      image : 'https://i0.wp.com/onmanga.com/wp-content/uploads/2019/06/Solo-Leveling.jpg?fit=480%2C710&ssl=1&resize=350%2C200',
      created_by : 1
    },{
      title: 'Tower of God',
      genre: 'Fantasy',
      image : 'https://i.kym-cdn.com/entries/icons/original/000/024/803/Slider2.jpg',
      created_by : 2
    },{
      title: 'A Good Day to be a Dog',
      genre: 'Romance',
      image : 'https://swebtoon-phinf.pstatic.net/20180904_277/1536059595536c1T81_JPEG/thumb_ipad.jpg',
      created_by : 2
    },{
      title: 'Dice',
      genre: 'Fantasy',
      image : 'https://2.bp.blogspot.com/-96cYCK-LCEc/VwPfZMEramI/AAAAAAAAEIk/FGdI4G6cx-Y-6nstZXeBB04T6coSwUhiA/s1600/dice.jpg',
      created_by : 1
    },

  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};