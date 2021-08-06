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
  Client.init({
    client_id: { type: DataTypes.STRING, primaryKey: true, autoIncrement: false, allowNull: false },
    // client_id: DataTypes.STRING,
    client_name: DataTypes.STRING,
  }, {
    tableName: "clients",
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
