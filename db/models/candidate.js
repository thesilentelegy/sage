'use strict';
module.exports = (sequelize, DataTypes) => {
  const Candidate = sequelize.define('Candidate', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(24),
      allowNull: false
    },
    profileUrl: {
      type: DataTypes.STRING(128),
      allowNull: false
    }
  });
  Candidate.associate = function(models) {
    Candidate.hasMany(models.VoteStore, { foreignKey: 'candidate', onDelete: 'CASCADE' });
    Candidate.belongsTo(models.CandidateParty, { foreignKey: 'party' });
    Candidate.belongsTo(models.CandidatePosition, { foreignKey: 'position' });
  };
  return Candidate;
};