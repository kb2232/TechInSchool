const express = require('express'),
  path = require('path'),
  session  = require('express-session'),
  cookieParser = require('cookie-parser'),
  bdParser = require('body-parser'),
  exphps = require('express-handlebars'),
  handlebars = require('handlebars'),
  ClientRoute = require('./controllers/clientRoute'),
  ApiRoute = require('./controllers/apiRoute'),
  AuthRoute = require('./controllers/authRoute'),
  AttendanceRoute = require('./controllers/attendanceController'),
  keys = require('./config/keys');
require('dotenv').config();
const app = express(),
passport = require('passport'),
flash    = require('connect-flash');
require('./config/passport')(passport); // pass passport for configuration
var db = require("./seq_models");


app.use(cookieParser()); // read cookies (needed for auth)
//body parser middleware - settings
app.use(
  bdParser.urlencoded({extended: true})
);
app.use(bdParser.json());

//cookie middleware
//used to set parameters for cookie
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret:keys.cookieSecret,
    cookie:{
      maxAge :30 * 24 * 60 * 60 * 1000
    }
  })
);
app.use(passport.initialize());//the above starts serializeUser
app.use(passport.session()); //used to preprocess the token sent from the browser
app.use(flash());// use connect-flash for flash messages stored in session


//settings for middleware
/*
we need to define the engine were the app will display
app.engine(extension, callback).
When a request is made to fetch a page, the server looks for a file main with extension .handlebars inside directory ->views/layouts/
*/
app.engine('handlebars',exphps({defaultLayout:'main'}));

/*
we need to set the above engine;
app.set(name,value);
Assigns setting name to value
*/
app.set('view engine','handlebars');

/* To be used as helpers in other files */
handlebars.registerHelper('json', function(context){
  return new handlebars.SafeString(JSON.stringify(context));
});

// Global variables
app.use((req, res, next)=>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  //if we logged in we have access to user
  res.locals.user = req.user || null;
  next();
});


//to be able to use the PUBLIC folder
app.use(express.static(path.join(__dirname,'public')));

//pass app to routes below
ClientRoute(app);
ApiRoute(app);
AuthRoute(app, passport);
AttendanceRoute(app);

//dynamic porting
const PORT = keys.Port || process.env.PORT || 8181;
// app.listen(PORT,()=>{
//   console.log(`Server listen at door:${PORT}`);
// });

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});