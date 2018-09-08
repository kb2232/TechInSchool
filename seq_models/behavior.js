module.exports = function(sequelize, DataTypes) {
  var Behavior = sequelize.define("Behavior", {
    situation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    action: {
      type: DataTypes.TEXT,
      len: [1]
    },
    teacherName : {
      type: DataTypes.STRING,
      len: [1],
      allowNull: false,
    },
    studentName : {
      type: DataTypes.STRING,
      len: [1],
    },
    severity: {
        type: DataTypes.INTEGER,
        len: [1]
    },
    date : {
        type: DataTypes.DATE,
        len: [1]
    },
    time : {
        type:DataTypes.TIME,
        len: [1]
    }

  });

  Behavior.associate = function(models) {
    Behavior.belongsTo(models.Student, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Behavior.associate = function(models) {
  //   Behavior.belongsTo(models.Teacher, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Behavior;
};
