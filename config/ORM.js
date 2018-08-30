var connection = require("./connect.js");

var attendanceORM = {
  allClasses: function(classesTable, teacherIDColumn, teacherID, dayColumn, day, sendResult) {
    var query = "SELECT * FROM ?? WHERE ?? = ? AND ?? = ?";
    connection.query(query, [classesTable, teacherIDColumn, teacherID, dayColumn, day], function(error, response){
      if (error) throw error;
      sendResult(response);
    });
  }
  // TODO: Need to be fixed for later.
  /* allStudents: function(studentTable, classIDColumn, classID, sendResult) {
    var query = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(query, [studentTable, classIDColumn, classID], function(error, response){
      if (error) throw error;
      sendResult(response);
    });
  },
  studentDetails: function(studentTable, studentIDColumn, studentID, sendResult) {
    var query = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(query, [studentTable, studentIDColumn, studentID], function(error, response){
      if (error) throw error;
      sendResult(response);
    });
  } */
};

module.exports = attendanceORM;
