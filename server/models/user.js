"use strict";
const { Model } = require("sequelize");

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
      user_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      user_name: DataTypes.STRING,
    },
    {
      tableName: "users",
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
