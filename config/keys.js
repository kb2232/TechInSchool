//this iis for production
//process.env.NODE_ENV is a production variable
if(process.env.NODE_ENV==='production')
{
  //production
  module.exports = require('./prod');
} else{
  //dev stuff
  module.exports = require('./dev');
}