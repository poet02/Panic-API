"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Client, {
        foreignKey: "client_id",
        as: "client",
      });
      User.hasMany(models.Panic, {
        foreignKey: "user_id",
        as: "users",
      });
    }
  }
  User.init(
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      user_name: { type: DataTypes.STRING },
      user_cell: { type: DataTypes.STRING },
      user_email: { type: DataTypes.STRING },
      user_password: { type: DataTypes.STRING },
      user_location: { type: DataTypes.STRING },
      user_lat: {type: Sequelize.FLOAT(11, 10) },
      user_lng: { type: Sequelize.FLOAT(11, 10) },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
