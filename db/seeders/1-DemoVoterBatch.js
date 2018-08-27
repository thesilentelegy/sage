'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VoterBatches', [
      {
        batchName: 'Batch 2024'
      },
      {
        batchName: 'Batch 2023'
      },
      {
        batchName: 'Batch 2022'
      },
      {
        batchName: 'Batch 2021'
      },
      {
        batchName: 'Batch 2020'
      },
      {
        batchName: 'Batch 2019'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VoterBatches', null, {});
  }
};
