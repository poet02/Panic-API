"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Panic extends Model {
    static associate(models) {
      Panic.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Panic.init({},
    {      
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      sequelize,
      modelName: "Panic"
    }
  );
  return Panic;
};
