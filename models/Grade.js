'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define('Grade', {
    type: DataTypes.STRING,
    score: DataTypes.INTEGER,
    date: DataTypes.DATE
  }, {});
  Grade.associate = function(models) {
    Grade.belongsTo(models.Student);//, { foreignKey: 'studentId' });
    Grade.belongsTo(models.Class);//, { foreignKey: 'classId' });
  };
  return Grade;
};