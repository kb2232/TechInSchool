module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define("Teacher", {
      name: DataTypes.STRING
    });
  
    // Teacher.associate = function(models) {
    //     Teacher.hasMany(models.Behavior, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Teacher;
  };
  