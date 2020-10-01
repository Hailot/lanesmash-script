'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContructedTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ContructedTeamPlayer, {
        foreignKey:  'constructedTeamId'
      })
    }
  };
  ContructedTeam.init({
    name: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ContructedTeam',
  });
  return ContructedTeam;
};