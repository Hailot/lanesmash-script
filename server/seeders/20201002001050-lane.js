'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Lanes', [
        {
          name: '',
          roundTime: '',
          continent: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '',
          roundTime: '',
          continent: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: '',
          roundTime: '',
          continent: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Lanes', null, {});

  }
};
