'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CandidatePositions', [
      {
        name: 'President',
        level: 1 
      },
      {
        name: 'Vice-President',
        level: 2
      },
      {
        name: 'Secretary',
        level: 3
      },
      {
        name: 'Treasurer',
        level: 4
      },
      {
        name: 'Auditor',
        level: 5
      },
      {
        name: 'Public Information Officer',
        level: 6
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CandidatePositions', null, {});
  }
};
