'use strict';
module.exports = (sequelize, DataTypes) => {
  const VoterSection = sequelize.define('VoterSection', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sectionName: {
      type: DataTypes.STRING(24),
      allowNull: false,
      unique: true
    }
  });
  VoterSection.associate = function(models) {
    VoterSection.hasMany(models.User, { foreignKey: 'sectionId', onDelete: 'CASCADE' });
    VoterSection.hasMany(models.VoteStore, { foreignKey: 'voterSection', onDelete: 'CASCADE' });
    VoterSection.belongsTo(models.VoterBatch, { foreignKey: 'batchId', allowNull: false });
  };
  return VoterSection;
};