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
			console.log(result);
		});

		// table names and queries
		const table1 = 'schools',
			table2 = 'users', table3='agenda', table4='students', table5='teachers', table6='class',
			table7='attendance', table8='takesClass';

		//drop tables just incase they exist already - comment out drop table lines if you get error in heroku;

		// con.query(`DROP TABLE ${table1}`, (err, result) => {
		// 	if (err) { 
		// 		console.log("cannot drop table 1"); 
		// 		return;
		// 	}
		// 	console.log('-----Table1 deleted!!!-----');
		// });
		// con.query(`DROP TABLE ${table2}`, (err, result) => {
		// 	if (err) { 
		// 		console.log("cannot drop table 2"); 
		// 		return;
		// 	}
		// 	console.log('-----Table2 deleted!!!-----');
		// });
		// con.query(`DROP TABLE ${table3}`, (err, result) => {
		// 	if (err) { 
		// 		console.log("cannot drop table3"); 
		// 		return;
		// 	}
		// 	console.log('-----Table3 deleted!!!-----');
		// });
		// con.query(`DROP TABLE ${table4}`, (err, result) => {
		// 	if (err) { 
		// 		console.log("cannot drop table4"); 
		// 		return;
		// 	}
		// 	console.log('-----Table4 deleted!!!-----');
		// });
		// con.query(`DROP TABLE ${table5}`, (err, result) => {
		// 	if (err) { 
		// 		console.log("cannot drop table 5"); 
		// 		return;
		// 	}
		// 	console.log('-----Table5 deleted!!!-----');
		// });
		// con.query(`DROP TABLE ${table6}`, (err, result) => {
		// 	if (err) { 
		// 		console.log("cannot drop table6"); 
		// 		return;
		// 	}
		// 	console.log('-----Table6 deleted!!!-----');
		// });
		// con.query(`DROP TABLE ${table7}`, (err, result) => {
		// 	if (err) { 
		// 		console.log("cannot drop table 7"); 
		// 		return;
		// 	}
		// 	console.log('-----Table7 deleted!!!-----');
		// });
		// con.query(`DROP TABLE ${table8}`, (err, result) => {
		// 	if (err) { 
		// 		console.log("cannot drop table8"); 
		// 		return;
		// 	}
		// 	console.log('-----Table8 deleted!!!-----');
		// });


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
			createdAt DATETIME DEFAULT NOW(),
			agendaMessage LONGTEXT NOT NULL,
			user INTEGER NOT NULL,
			FOREIGN KEY(user) REFERENCES users(id)
		)`
		const sqt4=`CREATE TABLE ${table4} (
			id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
				firstname VARCHAR(20) NOT NULL,
				lastname VARCHAR(20) NOT NULL,
				linktophoto VARCHAR(255),
				phonenumber VARCHAR(10),
				address VARCHAR(50),
				birthday DATE
		)`
		const sqt5 = `CREATE TABLE ${table5} (
			id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
			firstname VARCHAR(20) NOT NULL,
			lastname VARCHAR(20) NOT NULL,
			address VARCHAR(50),
			birthday DATE,
			linktophoto VARCHAR(255),
			phonenumber VARCHAR(10)
	)`
	const sqt6 = `CREATE TABLE ${table6} (
		id INT NOT NULL PRIMARY KEY,
			teacherID INT,
			subject VARCHAR(30),
			classname VARCHAR(40) NOT NULL,
			timePeriod TIME NOT NULL,
			day INT,
			FOREIGN KEY (teacherID) REFERENCES teachers(id)
	)`
	const sqt7 = `CREATE TABLE ${table7} (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    studentID INT,
    classID INT,
    attendancevalue ENUM("LATE", "ABSENT", "PRESENT", "EXCUSED"),
    date DATE
	)`
	const sqt8 = `CREATE TABLE ${table8} (
    classID INT,
    studentID INT,
    FOREIGN KEY (classID) REFERENCES class(id),
    FOREIGN KEY (studentID) REFERENCES students(id)
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
		con.query(sqt4, (err, result) => {
			if (err) throw err;
			console.log('-----Table4 Created!!!-----');
		});
		con.query(sqt5, (err, result) => {
			if (err) throw err;
			console.log('-----Table5 Created!!!-----');
		});
		con.query(sqt6, (err, result) => {
			if (err) throw err;
			console.log('-----Table6 Created!!!-----');
		});
		con.query(sqt7, (err, result) => {
			if (err) throw err;
			console.log('-----Table7 Created!!!-----');
		});
		con.query(sqt8, (err, result) => {
			if (err) throw err;
			console.log('-----Table8 Created!!!-----');
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
		//inserting values to table 4 and queries
		var sqlV4 = `INSERT INTO ${table4} (firstname, lastname, linktophoto, phonenumber, address, birthday) VALUES?`;
		var values4 = [
			["Jeff", "Cash", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2011234522", "123 New St.", "2002-06-21"],
			["Nicole", "Jeffreys", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2014612532", "588 Main St.", "2002-06-21"],
			["John", "Jordan", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2016946999", "522 Apple Pl.", "2003-05-22"],
			["Rebecca", "Cunningham", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2015321353", "483 Main St.", "2003-06-22"],
			["Brian", "Smith", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2018968412", "136 Market Ct.", "2002-11-21"]
		];
		con.query(sqlV4, [values4], (err, result) => {
			if (err) {
				throw err;
			} else console.log('\nNumber of records inserted:' + result.affectedRows);
		});
		//inserting values to table 5 and queries
		var sqlV5 = `INSERT INTO ${table5} (firstname, lastname, address, birthday, linktophoto, phonenumber) VALUES?`;
		var values5 = [
			["Robert", "Tree", "435 Magnolia Ave.", '1991-12-1', "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "5413155672"],
			["Chris", "Wotkins", "119 Howards St.", "1985-04-10", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "6531567894"],
			["Tony", "Li", "312 Carpenter Pl.", "1986-07-28", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "1468971263"],
			["Samantha", "Gray", "3 14th St.", "1794-03-01", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "6544314893"],
		];
		con.query(sqlV5, [values5], (err, result) => {
			if (err) {
				throw err;
			} else console.log('\nNumber of records inserted:' + result.affectedRows);
		});
		//inserting values to table 6.
		var sqv6 = `INSERT INTO ${table6} (id, teacherID, subject, classname, timePeriod, day) VALUES?`;
		var values6 = [
			[1, 1, "Science", "Biology", "10:40:00", 4],
			[2, 3, "Math", "Algebra", "12:20:00", 3],
			[3, 2, "English", "AP Literature", "13:10:00", 5],
			[4, 1, "Science", "Biology Honors", "08:15:00", 1],
			[5, 1, "Science", "Biology", "10:40:00", 2],
			[6, 1, "Science", "Physics", "13:50:00", 3],
			[7, 1, "Science", "Chemistry", "12:00:00", 4],
			[8, 1, "Science", "AP Physics", "11:30:00", 5],
		]
		con.query(sqv6, [values6], (err, result) => {
			if (err) {
				throw err;
			} else console.log('\nNumber of records inserted:' + result.affectedRows);
		});
				//inserting values to table 7 and queries
				var sqlV7 = `INSERT INTO ${table7} (id, studentID, classID, attendanceValue, date) VALUES?`;
				var values7 = [
					["0830201821", 2, 1, "PRESENT", '2018-08-30'],
					["0830201831", 3, 1, "PRESENT", '2018-08-30'],
					["0830201844", 4, 4, "PRESENT", '2018-08-30'],
					["0830201825", 2, 5, "PRESENT", '2018-08-30'],
					["0830201816", 1, 6, "PRESENT", '2018-08-30'],
					["0830201837", 3, 7, "PRESENT", '2018-08-30'],
					["0830201858", 5, 8, "PRESENT", '2018-08-30'],
				];
				con.query(sqlV7, [values7], (err, result) => {
					if (err) {
						throw err;
					} else console.log('\nNumber of records inserted:' + result.affectedRows);
				});
				//inserting values to table 8.
				var sqv8 = `INSERT INTO ${table8} (classID, studentID) VALUES?`;
				var values8 = [
					[1,2],
					[1,3],
					[2,5],
					[2,4],
					[2,3],
					[2,1],
					[3,2],
					[4,4],
					[5,2],
					[6,1],
					[7,3],
					[8,5],
				]
				con.query(sqv8, [values8], (err, result) => {
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
