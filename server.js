const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const db = require("./models");
require("./controllers/grade_controller.js")(app);
require("./controllers/student_controller.js")(app);
require("./controllers/class_controller.js")(app);

/**
 * SAMPLE METHODS
 */
// const Student = require("./models").Student;
// Student.create({
//     firstName: "Sean",
//     lastName: "Kim"
// }).then( student => {
//     student.createGrade({
//         type: "Exam",
//         score: 100,
//         date: "2017-9-04"
//     }).then( () => {
//         console.log("Created Student with Grade");
//     })
// })

// db.Student.findAll({
//     include: [db.Grade]
// }).then( students => {
//     console.log(students[0].Grades)
// })

const PORT = process.env.PORT || 3000;
db.sequelize.sync({
	// force: true,
	// logging: console.log
}).then(function() {
	app.listen(PORT, function () {
		console.log("App listening on PORT " + PORT);
	});
});
