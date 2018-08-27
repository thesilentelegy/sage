'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Candidates', [
      {
        firstName: 'Rae Martin',
        lastName: 'Pedrosa',
        profileUrl: 'rm_pedrosa_img',
        position: 1,
        party: 1
      },
      {
        firstName: 'Patricia Joy',
        lastName: 'Abarquez',
        profileUrl: 'pj_abarquez_img',
        position: 2,
        party: 1
      },
      {
        firstName: 'Ynno Viktor',
        lastName: 'Salloman',
        profileUrl: 'yv_salloman_img',
        position: 3,
        party: 1
      },
      {
        firstName: 'Maria Karen',
        lastName: 'Calabia',
        profileUrl: 'mk_calabia_img',
        position: 4,
        party: 1
      },
      {
        firstName: 'Jannah Veron',
        lastName: 'Nuevas',
        profileUrl: 'jv_nuevas_img',
        position: 5,
        party: 1
      },
      {
        firstName: 'Ranya',
        lastName: 'Ecaldre',
        profileUrl: 'r_ecaldre_img',
        position: 6,
        party: 1
      },
      {
        firstName: 'Sophia Therese',
        lastName: 'Sevilla',
        profileUrl: 'st_sevilla_img',
        position: 1,
        party: 2
      },
      {
        firstName: 'Janine Teisha Quean',
        lastName: 'Caber',
        profileUrl: 'jtq_caber_img',
        position: 2,
        party: 2
      },
      {
        firstName: 'Trisha Lynn',
        lastName: 'Catipay',
        profileUrl: 'tl_catipay_img',
        position: 3,
        party: 2
      },
      {
        firstName: 'Lorreneil',
        lastName: 'Capacio',
        profileUrl: 'l_capacio_img',
        position: 4,
        party: 2
      },
      {
        firstName: 'Paula Joy',
        lastName: 'Aliposa',
        profileUrl: 'pj_aliposa_img',
        position: 5,
        party: 2
      },
      {
        firstName: 'Clyde',
        lastName: 'Pabilona',
        profileUrl: 'c_pabilona_img',
        position: 6,
        party: 2
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Candidates', null, {});
  }
};
