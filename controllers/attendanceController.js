var express = require("express");
var router = express.Router();

var attendanceORM = require("../config/ORM.js");

// ORM will call functions to receive from the database and put into its corresponding pages.
// Requires confirmation that a teacher is logged in.
// TODO: Fix and change as necessary.
router.get('/takeAttendance', function(request, response){
  attendanceORM.allStudents("students", "classId", 3, function(result){
    var hbsObject = {
      students : result
    }
    response.render('teacher_stories/takeAttendance', hbsObject);
  });
});

module.exports = router;
