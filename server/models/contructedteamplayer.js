'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContructedTeamPlayer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.ContructedTeam  )
    }
  };
  ContructedTeamPlayer.init({
    constructedTeamId: DataTypes.INTEGER,
    characterId: DataTypes.STRING,
    factionId: DataTypes.INTEGER,
    alias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContructedTeamPlayer',
  });
  return ContructedTeamPlayer;
};