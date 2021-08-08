'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ClientResponders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      client_id: {
        allowNull: false,
        type: Sequelize.UUID
      },
      client_responder_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_responder_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_responder_password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_responder_cell: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_responder_location: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('ClientResponders');
  }
};