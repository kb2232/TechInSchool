const { ensureAuthenticated } = require('../helper/auth');

var attendanceORM = require('../config/ORM.js');

module.exports = app => {
  var currentDate = new Date();
	// ORM will call functions to receive from the database and put into its corresponding pages.
	// Requires confirmation that a teacher is logged in.
	// TODO: Fix and change as necessary.
	app.get('/takeAttendance/:id', ensureAuthenticated, function(request, response) {
		var studentsAndClass = {
			students : "",
			class : ""
		};
		attendanceORM.studentsInClass(
			'students',
			'takesClass',
			'students.id',
			'takesClass.studentID',
			'takesClass.classID',
			request.params.id,
			function(result) {
				studentsAndClass.students = result;
			}
		);
		attendanceORM.getClassDetails(
			'class',
			'id',
			request.params.id,
			function(result) {
				result[0].classname = result[0].classname.toUpperCase();
				result[0].timePeriod = parseTime(result[0].timePeriod);
				result[0].day = parseDay(result[0].day);
				studentsAndClass.class = result;
			}
		);
		attendanceORM.getAttendance(
			'attendance',
			'classID',
			request.params.id,
			'studentID',
			2,
			function(result) {
				studentsAndClass.attendance = result;
				console.log(studentsAndClass);
				response.render('teacher_stories/takeAttendance', studentsAndClass);
			}
		);
	});

	app.get('/attendance', ensureAuthenticated, function(request, response) {
		attendanceORM.allClasses('class', 'teacherID', 1, 'day', currentDate.getDay(), function(result) {
			for (var i = 0; i < result.length; i++) {
				result[i].timePeriod = parseTime(result[i].timePeriod);
				result[i].day = parseDay(result[i].day);
			}
			var attendanceHandlebars = {
				classes: result,
			};
			response.render('teacher_stories/attendance', attendanceHandlebars);
		});
	});

	function parseTime(time) {
		var hour = parseInt(time.substring(0, 2));
		if (hour <= 9) {
			return time.substring(1, 5) + ' AM';
		} else if (hour > 9 && hour <= 11) {
			return time.substring(0, 5) + ' AM';
		} else if (hour == 12) {
			return hour + time.substring(2, 5) + ' PM';
		} else {
			return hour - 12 + time.substring(2, 5) + ' PM';
		}
	}

	function parseDay(day) {
		switch (day) {
			case 0:
				return 'SUNDAY';
			case 1:
				return 'MONDAY';
			case 2:
				return 'TUESDAY';
			case 3:
				return 'WEDNESDAY';
			case 4:
				return 'THURSDAY';
			case 5:
				return 'FRIDAY';
			case 6:
				return 'SATURDAY';
			default:
				break;
		}
	}
};
