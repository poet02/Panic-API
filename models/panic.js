"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Panic extends Model {
    static associate(models) {
      Panic.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
      Panic.belongsTo(models.Responder, {
        foreignKey: "responder_id",
        as: "responder",
      });
    }
  
  }
  Panic.init(
    {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      responder_id: {type: Sequelize.UUID},
      user_id: {type: Sequelize.UUID},
      panic_location: {type: Sequelize.STRING},
      user_description: {type: Sequelize.STRING},
      panic_lat: {type: Sequelize.FLOAT(11, 10)},
      panic_lng: {type: Sequelize.FLOAT(11, 10)},
      client_responded_at: {type: Sequelize.DATE},
      responder_completed_at: {type: Sequelize.DATE},
      user_helped_at: {type: Sequelize.DATE},
    },
    {
      sequelize,
      modelName: "Panic"
    }
  );
  return Panic;
};
