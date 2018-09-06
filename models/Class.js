'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    className: DataTypes.STRING,
    subject: DataTypes.STRING,
    timePeriod: DataTypes.TIME,
    day: DataTypes.STRING
  }, {});
  Class.associate = function(models) {
    Class.hasMany(models.Grade);
  };
  return Class;
};