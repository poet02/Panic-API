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
    static associate(models) {
      Panic.belongsTo(models.Responder, {
        foreignKey: "responder_id",
        as: "responder",
      });
    }
  }
  Panic.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    panic_location: { type: DataTypes.STRING},
  },
    {      
      sequelize,
      modelName: "Panic"
    }
  );
  return Panic;
};
