'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.User, {
        foreignKey: 'client_id',
        as: 'users',
      });
    }
  };
  Client.init({client_name: DataTypes.STRING}, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
