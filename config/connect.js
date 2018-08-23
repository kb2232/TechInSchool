const sql = require("mysql")
 keys = require("./keys");
/////////CONNECTON///////////////////////////////////////
const con = sql.createConnection({
	host: keys.DB_HOST,
	user: keys.DB_USER,
	password: keys.DB_PASS,
  database: keys.DB_NAME,
});

con.connect( err =>{
  if (err) throw err;

	con.query('select @@hostname', (err, result) => {
		if (err) throw err;
		console.log(result);
  });
});

module.exports = con;