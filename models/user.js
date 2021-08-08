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
  User.init({},
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
