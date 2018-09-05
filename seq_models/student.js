module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define("Student", {
    name: DataTypes.STRING
  });

  Student.associate = function(models) {
    Student.hasMany(models.Behavior, {
      onDelete: "cascade"
    });
  };

  return Student;
};
