const con = require('../config/connect');

class QUERY {
	//insert into table = "agenda"
	insertAgenda(connect = con, title, message,code) {
		const sql = 'INSERT INTO agenda(title,agendaMessage,user) VALUES?';
		const values = [[`${title}`, `${message}`,`${code}`]];
		con.query(sql, [values], (err, results) => {
			if (err) {
				console.log('errors....');
				throw err;
			}
		});
	}
	// get table values
	selectALL(connect = con,code,callback) {
  const sql1=`SELECT title, createdAt, agendaMessage FROM agenda INNER JOIN users ON agenda.user = users.user_id WHERE user_id = "${code}" ORDER BY createdAt DESC`;
    con.query(sql1, (err, rows) => {
      if (err) callback(err);
      callback(undefined,rows);
    });
  }
  // delete values
  deleteONE(connect=con,id,callback){
    const sql = `DELETE FROM agenda WHERE agenda.id = ${id}`;
    con.query(sql, (err, rows) => {
      if (err) callback(err);
      callback(undefined,rows);
    });
  }
  //select all information from users
  getAllInfo(connect=con,colname,tablename,coltype,callback){
    const sql = `SELECT * FROM ${tablename} where ${colname}="${coltype}"`;
    con.query(sql, (err, rows) => {
      if (err) callback(err);
      callback(undefined,rows);
    });
  }
  //update user passwords
  updateUserPassWord(connect=con,tablename,colname1,passwordType,colname2, colname2Type,callback)
  {
    const sql = `UPDATE ${tablename} SET ${colname1}="${passwordType}" WHERE ${colname2}="${colname2Type}"`;
    con.query(sql, (err, rows) => {
      if (err) callback(err);
      callback(undefined,rows);
    });
  }

}
module.exports = QUERY;
