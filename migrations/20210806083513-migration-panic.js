'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Panics', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      user_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      responder_id: {
        type: Sequelize.UUID
      },
      panic_type_id: {
        type: Sequelize.INTEGER
      },
      user_ip: {
        type: Sequelize.STRING
      },      
      panic_location: {
        type: Sequelize.STRING
      },
      user_helped_at: {
        type: Sequelize.DATE
      },
      client_responded_at: {
        type: Sequelize.DATE
      },
      responder_completed_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Panics');
  }
};