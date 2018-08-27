'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VoteStores', [
      {
        currentVotes: 0,
        voterSection: 1,
        candidate: 1
      },
      {
        currentVotes: 0,
        voterSection: 2,
        candidate: 2
      },
      {
        currentVotes: 0,
        voterSection: 3,
        candidate: 3
      },
      {
        currentVotes: 0,
        voterSection: 1,
        candidate: 7
      },
      {
        currentVotes: 0,
        voterSection: 2,
        candidate: 8
      },
      {
        currentVotes: 0,
        voterSection: 3,
        candidate: 9
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VoteStores', null, {});
  }
};
