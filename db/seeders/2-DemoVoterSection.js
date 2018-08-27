'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VoterSections', [
      {
        sectionName: 'Diamond',
        batchId: 1 
      },
      {
        sectionName: 'Emerald',
        batchId: 1 
      },
      {
        sectionName: 'Ruby',
        batchId: 1 
      },
      {
        sectionName: 'Camia',
        batchId: 2 
      },
      {
        sectionName: 'Jasmine',
        batchId: 2 
      },
      {
        sectionName: 'Sampaguita',
        batchId: 2 
      },
      {
        sectionName: 'Potassium',
        batchId: 3 
      },
      {
        sectionName: 'Rubidium',
        batchId: 3 
      },
      {
        sectionName: 'Sodium',
        batchId: 3 
      },
      {
        sectionName: 'Electron',
        batchId: 4 
      },
      {
        sectionName: 'Neutron',
        batchId: 4 
      },
      {
        sectionName: 'Proton',
        batchId: 4 
      },
      {
        sectionName: 'Junior A',
        batchId: 5 
      },
      {
        sectionName: 'Junior B',
        batchId: 5 
      },
      {
        sectionName: 'Junior C',
        batchId: 5 
      },
      {
        sectionName: 'Senior A',
        batchId: 6 
      },
      {
        sectionName: 'Senior B',
        batchId: 6 
      },
      {
        sectionName: 'Senior C',
        batchId: 6 
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VoterSections', null, {});
  }
};
