const express = require('express'),
  path = require('path'),
  bdParser = require('body-parser'),
  methodOveride = require('method-override'),
  exphps = require('express-handlebars'),
  cookieSession = require('cookie-session'), //enables cookie
  ClientRoute = require('./routes/clientRoute'),
  passport = require('passport'),
  keys = require('./config/keys');
require('dotenv').config();
  
const app = express();

//body parser middleware - settings
app.use(
  bdParser.urlencoded({extended: false})
);
app.use(bdParser.json());

//method override
app.use(methodOveride('_method'));

//cookie middleware
//used to set parameters for cookie
app.use(
  cookieSession({
    //maximum time cookie stays in browser in ms - 30 days
    maxAge: 30*24*60*60*1000,
    //keys is used to encrpyt the cookie
    keys:[keys.cookieKey]
  })
);
//tell passport to make use of cookies
app.use(passport.initialize());
//the above starts serializeUser
app.use(passport.session());
//the above is used to preprocess the token sent from the browser

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


//global variables to have access to user
//this allows us to use
//{{# if user}} ...
app.use((req,res,next)=>{
  res.locals.user = req.user || null;
  next()
});


//to be able to use the PUBLIC folder
app.use(express.static(path.join(__dirname,'public')));

//pass app to routes below
ClientRoute(app);

//dynamic porting
var PORT = process.env.PORT | 3000;
  app.listen(PORT,()=>{
    console.log(`Server listen at door:${PORT}`);
  });