const db = require("../models");

module.exports = app => {

    app.get("/api/students", (req, res) => {
        db.Student.findAll({
            include: [db.Grade]
        }).then( students => {
            res.json(students);
        });
    });

    app.get("/", (req, res) => {
        db.Student.findAll({
            include: [db.Grade]
        }).then( students => {
            res.render("index", {students: students})
        })
    })

    app.post("/CreateStudent", (req, res) => {
        db.Student.create(req.body).then( () => {
            res.redirect("/");
        });
    });
};