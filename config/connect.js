const sql = require("mysql")
 keys = require("./keys");
/////////CONNECTON///////////////////////////////////////
const con = sql.createConnection({
	host: keys.Host,
	user: keys.Username,
	password: keys.Password,
  database: keys.Database,
});

con.connect( err =>{
  if (err) throw err;

	con.query('select @@hostname', (err, result) => {
		if (err) throw err;
		console.log(result);
	});
	con.query(`USE ${keys.Database}`, (err, result) => {
		if (err) throw err;
		return result;
  });
});

module.exports = con;