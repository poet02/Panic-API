"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.User, {
        foreignKey: "client_id",
        as: "users",
      });
    }
  }
  Client.init(
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      client_name: { type: DataTypes.STRING },
      client_email: { type: DataTypes.STRING },
      client_password: { type: DataTypes.STRING },
      client_owner_name: { type: DataTypes.STRING },
      client_phone_number: { type: DataTypes.STRING },
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
