'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Candidates', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(24),
        allowNull: false
      },
      profileUrl: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      position: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CandidatePositions',
          key: 'id'
        }
      },
      party: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CandidateParties',
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
    return queryInterface.dropTable('Candidates');
  }
};