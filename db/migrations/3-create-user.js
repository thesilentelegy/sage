'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: Sequelize.STRING(8),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      sectionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'VoterSections',
          key: 'id'
        }
      },
      role: {
        type: Sequelize.STRING(8),
        allowNull: false
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
    return queryInterface.dropTable('Users');
  }
};