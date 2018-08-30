const sql = require('mysql');
keys = require('./keys');
/////////CONNECTON///////////////////////////////////////
if (process.env.JAWSDB_URL) {
	const con = sql.createConnection(process.env.JAWSDB_URL);
	con.connect(err => 
	{
		if (err) { 
			console.log("cannot connect"); 
			return;
		}
		//use database
		con.query(`USE ${process.env.Database}`, (err, result) => {
			if (err) { 
				console.log("cannot use database"); 
				return;
			}
		});

		// table names and queries
		const table1 = 'schools',
			table2 = 'users', table3='agenda';

		//drop tables just incase they exist already - comment out drop table lines if you get error in heroku
		con.query(`DROP TABLE ${table1}`, (err, result) => {
			if (err) { 
				console.log("cannot drop table"); 
				return;
			}
			console.log('-----Table1 deleted!!!-----');
		});
		con.query(`DROP TABLE ${table2}`, (err, result) => {
			if (err) { 
				console.log("cannot drop table"); 
				return;
			}
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
		const sqt3 = `CREATE TABLE ${table3} (
			id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
			title VARCHAR(50) NOT NULL,
			createdAt TIMESTAMP DEFAULT NOW(),
			agendaMessage LONGTEXT NOT NULL,
			user VARCHAR(50) NOT NULL,
			FOREIGN KEY(user) REFERENCES users(user_id)
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
		con.query(sqt3, (err, result) => {
			if (err) throw err;
			console.log('-----Table3 Created!!!-----');
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
		//inserting values to table 3.
		var sqv3 = `INSERT INTO ${table3}(title,agendaMessage,user) VALUES?`;
		var values3 = [
			["test1","yesenia test","1XR1yy"],
			["test2","taleisia test","1XR1tb"],
			["test3","kunle1 test","1XR1kb"],
			["test4","kunle2 test","1XR2kb"],
			["test3b","kunle1 test","1XR1kb"],
			["test5","kunle2 test","1XR2kb"],
		]
		con.query(sqv3, [values3], (err, result) => {
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
