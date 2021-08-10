'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4 
      },
      client_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_owner_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      client_phone_number: {
        allowNull: false,
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
    return queryInterface.dropTable('Clients');
  }
};