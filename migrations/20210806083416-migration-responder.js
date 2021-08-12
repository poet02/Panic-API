'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Responders', {
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
      responder_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      responder_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      responder_password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      responder_cell: {
        allowNull: false,
        type: Sequelize.STRING
      },
      responder_location: {
        type: Sequelize.STRING
      },
      // responder_busy: {
      //   type: Sequelize.BOOLEAN,
      // },
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
    return queryInterface.dropTable('Responders');
  }
};