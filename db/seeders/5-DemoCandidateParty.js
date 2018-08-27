'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CandidateParties', [
      {
        name: 'Hudyaka'
      },
      {
        name: 'Big Development Energy'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CandidateParties', null, {});
  }
};
