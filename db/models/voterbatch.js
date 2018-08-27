'use strict';
module.exports = (sequelize, DataTypes) => {
  const VoterBatch = sequelize.define('VoterBatch', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    batchName: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: true
    }
  });
  VoterBatch.associate = function(models) {
    VoterBatch.hasMany(models.VoterSection, { foreignKey: 'batchId', onDelete: 'CASCADE' });
  };
  return VoterBatch;
};