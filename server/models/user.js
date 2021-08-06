"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    //   static associate(models) {
    // User.belongsTo(models.Client, {
    //   foreignKey: 'client_id',
    //   as: 'client'
    // });
    // Student.belongsToMany(models.Course, {
    //   through: 'StudentCourse',
    //   as: 'courses',
    //   foreignKey: 'student_id'
    // });
    //   }
  }
  User.init(
    {
      client_id: DataTypes.STRING,
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
