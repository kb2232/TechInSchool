const db = require("../models");

module.exports = app => {


    app.get("/api/grades/student/:student_id", (req, res) => {
        db.Grade.findAll({
            where: { StudentId: req.params.student_id }
        }).then( grades => {
            res.json(grades);
        });
    });
    app.post("/grade/:student_id", (req,res) => {
        db.Grade.create({...req.body, StudentId: req.params.student_id})
        .then( () => {
            res.redirect("/");
        })
    })

    app.get("/api/grades/class/:class_id", (req, res) => {
        db.Grade.findAll({
            where: { ClassId: req.params.class_id }
        }).then( grades => {
            res.json(grades);
        });
    });
    
    app.get("/api/grades/class/:class_id/student/:student_id", (req, res) => {
        db.Grade.findAll({
            where: { ClassId: req.params.class_id, StudentId: req.params.student_id }
        }).then( grades => {
            res.json(grades);
        });
    });


};