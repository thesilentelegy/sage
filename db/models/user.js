'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(8),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    role: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  User.associate = function(models) {
    User.belongsTo(models.VoterSection, { foreignKey: 'sectionId' });
  };
  
  return User;
};