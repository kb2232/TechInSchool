const sql = require('mysql');
keys = require('./keys');
/////////CONNECTON///////////////////////////////////////
if (process.env.JAWSDB_URL) {
	const con = sql.createConnection(process.env.JAWSDB_URL);
	con.connect(err => {
		if (err) throw err;

		con.query('select @@hostname', (err, result) => {
			if (err) throw err;
			console.log(result);
		});

		con.query(`USE ${process.env.Database}`, (err, result) => {
			if (err) throw err;
			console.log(result);
		});
		// table names and queries
		const table1 = 'schools',
			table2 = 'users';
		//drop tables just incase they exist already - comment out drop table lines if you get error in heroku
		con.query(`DROP TABLE ${table1}`, (err, result) => {
			if (err) throw err;
			console.log('-----Table1 deleted!!!-----');
		});
		con.query(`DROP TABLE ${table2}`, (err, result) => {
			if (err) throw err;
			console.log('-----Table2 deleted!!!-----');
		});
		// create table queries
		const sqlT1 = `CREATE TABLE ${table1} (
			code VARCHAR(50) NOT NULL PRIMARY KEY,
			school_name VARCHAR(150) NOT NULL UNIQUE
		)`
		const sqlT2 = `CREATE TABLE ${table2} (
		id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
		user_id VARCHAR(50) UNIQUE,
		firstname VARCHAR(50) NOT NULL,
		lastname VARCHAR(50) NOT NULL,
		email VARCHAR(50) NOT NULL,
		password VARCHAR(150),
		school_code VARCHAR(50) NOT NULL,
		FOREIGN KEY(school_code) REFERENCES schools(code)
		)`
		// create tables
		con.query(sqlT1, (err, result) => {
			if (err) throw err;
			console.log('-----Table1 Created!!!-----');
		});
		con.query(sqlT2, (err, result) => {
			if (err) throw err;
			console.log('-----Table2 Created!!!-----');
		});
		//show tables
		con.query('SHOW TABLES', (err, result) => {
			if (err) throw err;
			console.log(result);
		});
		//inserting values to table 1 and queries
		var sqlV1 = `INSERT INTO ${table1} (code, school_name) VALUES?`;
		var values1 = [
			['1QFXT5R', 'BroomeStreet Academy High School'],
			['1FF095R', 'Success Academy Charter High School'],
			['0WEXT57', 'Ascend Charter High School'],
			['00IO28D', 'Uncommon Charter High School'],
		];
		con.query(sqlV1, [values1], (err, result) => {
			if (err) {
				throw err;
			} else console.log('\nNumber of records inserted:' + result.affectedRows);
		});
		//inserting values to table 2 and queries
		var sqlV2 = `INSERT INTO ${table2} (user_id,firstname,lastname,email,school_code) VALUES?`;
		var values2 = [
			['1XR1kb','kunle', 'babatunde', 'kunle.kunle@broomestreet.com', '1QFXT5R'],
			['1XR2kb','kunle', 'babatunde', 'kunle.kunle@broomestreet.com', '1QFXT5R'],
			['1XR1yy','yesenia', 'yezuri', 'yesenia.yesenia@broomestreet.com', '1QFXT5R'],
			['1XR1tb','taleisia', 'babatunde', 'taleisia.babatunde@leadershipprep.com', '00IO28D'],
			['1XR1rr','ronak', 'ray', 'ronak.ronak@sschools.org','1FF095R'],
			['1XR1sk','sean', 'kim', 'sean.sean@ascendhigh.com', '0WEXT57'],
			['1XR1mk','michael', 'kim', 'michael.michael@ascendhigh.com', '0WEXT57'],
		];
		con.query(sqlV2, [values2], (err, result) => {
			if (err) {
				throw err;
			} else console.log('\nNumber of records inserted:' + result.affectedRows);
		});
	});
	module.exports = con;
} else 
{
	// for development - tables are made using attendance.sql
	const con = sql.createConnection({
		host: keys.Host,
		user: keys.Username,
		password: keys.Password,
		database: keys.Database,
	});

		con.query('select @@hostname', (err, result) => {
			if (err) throw err;
			console.log(result);
		});

		con.query(`USE ${keys.Database}`, (err, result) => {
			if (err) throw err;
			console.log(result);
		});
	
	module.exports = con;

}
