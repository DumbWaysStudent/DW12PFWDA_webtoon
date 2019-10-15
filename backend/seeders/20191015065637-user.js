'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'rexxar@gmail.com',
      password:'12345',
      image:'http://wow.blizzwiki.ru/images/2/25/Rexxarportrait.JPG'
    },
    {
      email: 'jaina@gmail.com',
      password:'12345',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCC2XwJcXFmPPaKVNy9nZnRb7g059JP-AJpMe3UQJG_ILJPdeK'
    },
    {
      email: 'sylvanas@gmail.com',
      password:'12345',
      image:'https://wow.zamimg.com/uploads/blog/images/17254-war-campaign-cinematic-finale-saurfang-and-sylvanas-spoilers.jpg'
    }], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('users', null, {});
    */
  }
};