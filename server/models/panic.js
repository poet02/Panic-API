"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Panic extends Model {
    static associate(models) {
      Panic.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Panic.init(
    {
      panic_id: { type: DataTypes.UUID, primaryKey: true, autoIncrement: true, allowNull: false },
    },
    {
      tableName: "panics",
      sequelize,
      modelName: "Panic",
    }
  );
  return Panic;
};
