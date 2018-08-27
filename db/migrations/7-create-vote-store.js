'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VoteStores', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      currentVotes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      voterSection: {
        type: Sequelize.INTEGER,
        references: {
          model: 'VoterSections',
          key: 'id'
        }
      },
      candidate: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Candidates',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('VoteStores');
  }
};