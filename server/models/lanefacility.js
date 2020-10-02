'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LaneFacility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Lane)
    }
  };
  LaneFacility.init({
    laneId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    facilityId: DataTypes.INTEGER,
    placement: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LaneFacility',
  });
  return LaneFacility;
};
