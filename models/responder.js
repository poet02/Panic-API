"use strict";
const { Model, Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Responder extends Model {
    static associate(models) {
        Responder.belongsTo(models.Client, {
        foreignKey: "client_id",
        as: "client",
      });
      Responder.hasMany(models.Panic, {
        foreignKey: "responder_id",
        as: "responders",
      });
    }
  }
  Responder.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    responder_location: { type: DataTypes.STRING},
    responder_name: { type: DataTypes.STRING},
    responder_cell: { type: DataTypes.STRING},
    responder_lat: { type: Sequelize.FLOAT},
    responder_lng: { type: Sequelize.FLOAT},
  },
    {      
      sequelize,
      modelName: "Responder"
    }
  );
  return Responder;
};
