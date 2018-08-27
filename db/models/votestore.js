'use strict';
module.exports = (sequelize, DataTypes) => {
  const VoteStore = sequelize.define('VoteStore', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    currentVotes: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  VoteStore.associate = function(models) {
    VoteStore.belongsTo(models.VoterSection, { foreignKey: 'voterSection' });
    VoteStore.belongsTo(models.Candidate, { foreignKey: 'candidate' });
  };
  return VoteStore;
};