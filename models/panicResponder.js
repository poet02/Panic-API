"use strict";
const { Model, Sequelize } = require("sequelize");


//for every time a responder assigned to panic
module.exports = (sequelize, DataTypes) => {
  class PanicResponder extends Model {
    static associate(models) {
        PanicResponder.belongsTo(models.Panic, {
        foreignKey: "panic_id",
        as: "panic",
      });
    }    
    static associate(models) {
        PanicResponder.belongsTo(models.Responder, {
        foreignKey: "responder_id",
        as: "Responder",
      });
    }
  }
  PanicResponder.init({
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
  },
    {      
      sequelize,
      modelName: "PanicResponder"
    }
  );
  return PanicResponder;
};
