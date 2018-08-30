var express = require("express");
var router = express.Router();

var attendanceORM = require("../config/ORM.js");

var currentDate = new Date();

// ORM will call functions to receive from the database and put into its corresponding pages.
// Requires confirmation that a teacher is logged in.
// TODO: Fix and change as necessary.
router.get('/takeAttendance', function(request, response){
  response.render('teacher_stories/takeAttendance');
  console.log(sessionStorage.getItem('selectedClass'));
  /* attendanceORM.allStudents("students", "classId", 3, function(result){
    var hbsObject = {
      students : result
    };
    response.render('teacher_stories/takeAttendance', hbsObject)
  }); */
});

router.get('/attendance', function(request, response){
  attendanceORM.allClasses("class", "teacherID", 1, "day", currentDate.getDay(), function(result){
    // TODO: Work off this for smoother UI
    for (var i = 0; i < result.length; i ++){
      console.log(result[i].timePeriod);
      console.log(result[i].day);
    }
    var attendanceHandlebars = {
      classes : result
    }
    response.render('teacher_stories/attendance', attendanceHandlebars);
  })
});

module.exports = router;
