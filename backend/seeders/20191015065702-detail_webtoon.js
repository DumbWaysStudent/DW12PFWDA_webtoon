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
    },
    {
      title: 'Living in the RPG World',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8ec597s2AQEiEj1Xma4eyPgg4Sie0B_491GC7N1BtNn3yPiv-g',
      id_webtoon : 2,
    },
    {
      title: 'Naive',
      image: 'https://i0.wp.com/komiku.co/wp-content/uploads/Komik-Solo-Leveling.png?w=225&quality=60',
      id_webtoon : 2,
    },
    {
      title: 'Mistrust',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGfN3PZjkw42E7tKHcQ5h1Pplh9n46rtqVBuIFwL4-C-_tlwKE',
      id_webtoon : 2,
    },
    {
      title: 'Irregular',
      image: 'https://steamuserimages-a.akamaihd.net/ugc/946221356513127145/9F5B3BC699447DEAC409282769957E1CC880A806/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
      id_webtoon : 3,
    },
    {
      title: 'First Rule',
      image: 'hhttps://pm1.narvii.com/6359/631c8b2aecefc7e7e446b3fd57528b71f6815967_hq.jpg',
      id_webtoon : 3,
    },
    {
      title: 'Who',
      image: 'https://66.media.tumblr.com/5ae738908ee22c45f5e375640056511b/tumblr_om3ustrrgd1slpxhzo1_400.jpg',
      id_webtoon : 3,
    },], {});
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