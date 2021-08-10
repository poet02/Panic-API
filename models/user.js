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
  User.init({
    user_name: {type: DataTypes.STRING},
    user_cell: {type: DataTypes.STRING}
  },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
