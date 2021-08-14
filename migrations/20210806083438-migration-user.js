'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      client_id: {
        type: Sequelize.UUID
      },
      user_name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_cell: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_location: {
        type: Sequelize.STRING
      },
      user_lat: {
        type:Sequelize.FLOAT(11, 10),
      },
      user_lng: {
        type:Sequelize.FLOAT(11, 10),
      },
      user_password: {
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
    return queryInterface.dropTable('Users');
  }
};