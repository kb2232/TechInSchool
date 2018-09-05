const {ensureAuthenticated} = require('../helper/auth');
const model = require('../models/connection');
let obj = new model();

module.exports = app => {
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', (req, res) => {
		res.render('index/welcome');
	});
	// =====================================
	// AGENDA SECTION =========================
	// =====================================
	app.get('/writeagenda',ensureAuthenticated,(req,res)=>{
		//get data from database;
		obj.selectALL(" ",req.user.id,(err,results)=>{
			if(err) throw err;
			res.render('teacher_stories/writeagenda',{
				user:req.user,
				data:results,
			})
		});
	});
	app.post('/postagenda',ensureAuthenticated,(req,res)=>{
		obj.insertAgenda(" ",req.body.title,req.body.message,req.user.id);
		res.redirect('/writeagenda')
	});

	app.get('/deleterecord/:id',ensureAuthenticated,(req,res)=>{
		obj.deleteONE(" ",req.params.id,(err,results)=>{
			if(err) throw err;
			res.redirect('/writeagenda');
		});
	});
	//edit
	app.get('/editinfo/:id',ensureAuthenticated,(req,res)=>{
		obj.getOneAgenda(" ",req.params.id,(err,results)=>{
			if(err) throw err;
			 console.log("results = ",results);
			res.render('teacher_stories/editAgenda',{
				data:results[0]
			});
		});
	});
	//post edi
	app.post('/postEdit/:id',ensureAuthenticated,(req,res)=>{
		obj.editInfo(" ",req.body.title,req.body.message,req.user.id,req.params.id);
		res.redirect('/writeagenda');
	})

	app.get('/behavior',ensureAuthenticated,(req, res)=>{
		res.render("teacher_stories/behavior");
	});
};
