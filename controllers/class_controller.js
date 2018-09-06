const db = require("../models");

module.exports = app => {
    app.get("/api/classes", (req, res) => {
        db.Class.findAll({}).then( classes => {
            res.json(classes);
        });
    });
    
};