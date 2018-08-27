'use strict';
module.exports = (sequelize, DataTypes) => {
  const CandidatePosition = sequelize.define('CandidatePosition', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    level: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  });
  CandidatePosition.associate = function(models) {
    CandidatePosition.hasMany(models.Candidate, { foreignKey: 'position', onDelete: 'CASCADE' });
  };
  return CandidatePosition;
};