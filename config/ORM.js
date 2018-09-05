var connection = require("./connect.js");

var attendanceORM = {
  allClasses: function(classesTable, teacherIDColumn, teacherID, dayColumn, day, sendResult) {
    var query = "SELECT * FROM ?? WHERE ?? = ? AND ?? = ?";
    connection.query(query, [classesTable, teacherIDColumn, teacherID, dayColumn, day], function(error, response){
      if (error) throw error;
      sendResult(response);
    });
  },
  getClassDetails: function(classesTable, classIDColumn, classID, sendResult) {
    var query = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(query, [classesTable, classIDColumn, classID], function(error, response){
      if (error) throw error;
      sendResult(response);
    });
  },
  getAttendance: function(attendanceTable, classIDColumn, classID, studentIDColumn, studentID, sendResult) {
    var query = "SELECT * FROM ?? WHERE ?? = ? AND ?? = ?";
    connection.query(query, [attendanceTable, classIDColumn, classID, studentIDColumn, studentID], function(error, response){
      if (error) throw error;
      sendResult(response);
    });
  },
  studentsInClass: function(studentsTable, takesClassTable, studentIDColumn, tcStudentIDColumn, tcClassIDColumn, tcClassID, sendResult) {
    var query = "SELECT * FROM ?? JOIN ?? ON ?? = ?? AND ?? = ?";
    connection.query(query, [studentsTable, takesClassTable, studentIDColumn, tcStudentIDColumn, tcClassIDColumn, tcClassID], function(error, response){
      if (error) throw error;
      sendResult(response);
    });
  },
  viewRecordForStudent: function(attendanceTable, studentIDColumn, studentID, classIDColumn, classID, sendResult) {
    var query = "SELECT date, status FROM ?? WHERE ?? = ? AND ?? = ?";
    connection.query(query, [attendanceTable, studentIDColumn, studentID, classIDColumn, classID], function(error, response){
      if (error) throw error;
      sendResult(response);
    })
  }
};

module.exports = attendanceORM;