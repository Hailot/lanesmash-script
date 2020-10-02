'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LaneFacilities', [
      {
        laneId: '',
        name: '',
        facilityId: '',
        placement: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        laneId: '',
        name: '',
        facilityId: '',
        placement: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        laneId: '',
        name: '',
        facilityId: '',
        placement: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LaneFacilities', null, {});

  }
};
