const { v4: uuidv4 } = require('uuid');


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Panics", [
      {
        id: uuidv4(),
        user_id: '3728a2a1-4c1d-4a2d-a66e-757b551dcfb8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        user_id: '3728a2a1-4c1d-4a2d-a66e-757b551dcfb8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        user_id: '3728a2a1-4c1d-4a2d-a66e-757b551dcfb8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Panics", null, {});
  },
};