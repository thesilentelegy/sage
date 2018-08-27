'use strict';
module.exports = (sequelize, DataTypes) => {
  const CandidateParty = sequelize.define('CandidateParty', {
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
    }
  });
  CandidateParty.associate = function(models) {
    CandidateParty.hasMany(models.Candidate, { foreignKey: 'party', onDelete: 'CASCADE' });
  };
  return CandidateParty;
};