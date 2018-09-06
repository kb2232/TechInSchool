'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    contact: DataTypes.STRING,
    address: DataTypes.STRING,
    dob: DataTypes.DATE,
    photoLink: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    Student.hasMany(models.Grade);
  };
  return Student;
};