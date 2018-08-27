'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'user1',
        password: '1234',
        sectionId: 1,
        role: 'voter',
        active: 1
      },
      {
        username: 'user2',
        password: '5678',
        sectionId: 10,
        role: 'voter',
        active: 0
      },
      {
        username: 'admin1',
        password: '1234',
        role: 'admin',
        active: 1
      },
      {
        username: 'admin2',
        password: '5678',
        role: 'admin',
        active: 0
      },
      {
        username: 'viewer1',
        password: '1234',
        role: 'viewer',
        active: 1
      },
      {
        username: 'viewer2',
        password: '5678',
        role: 'viewer',
        active: 0
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
