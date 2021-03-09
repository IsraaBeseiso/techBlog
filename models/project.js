const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
title: DataTypes.STRING,
body: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Project;