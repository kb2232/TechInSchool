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
	// ATTENDANCE SECTION =========================
	// =====================================
	app.get('/attendance', ensureAuthenticated,(req, res)=>{
		res.render('teacher_stories/attendance',{
			user:req.user,
		});
	});
	// =====================================
	// AGENDA SECTION =========================
	// =====================================
	app.get('/getagenda',ensureAuthenticated,(req,res)=>{
		res.render('teacher_stories/agenda',{
			user:req.user,
		})
	});
	app.get('/writeagenda',ensureAuthenticated,(req,res)=>{
		//get data from database;
		obj.selectALL(" ",req.user.user_id,(err,results)=>{
			if(err) throw err;
			res.render('teacher_stories/writeagenda',{
				user:req.user,
				data:results,
			})
		});
	});
	app.post('/postagenda',ensureAuthenticated,(req,res)=>{
		obj.insertAgenda(" ",req.body.title,req.body.message,req.user.user_id);
		res.redirect('/writeagenda')
	});
	app.get('/delete/',ensureAuthenticated,(req,res)=>{
		console.log("param id = ",req.params.id);
		console.log("body =",req.body);
		obj.deleteONE(" ",req.user.id,(err,results)=>{
			if(err) throw err;
			res.redirect('/writeagenda');
		});
	})
};
