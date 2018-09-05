const con = require('../config/connect');

class QUERY {
	//insert into table = "agenda"
	insertAgenda(connect = con, title, message,id) {
		const sql = 'INSERT INTO agenda(title,agendaMessage,user) VALUES?';
		const values = [[`${title}`, `${message}`,`${id}`]];
		con.query(sql, [values], (err, results) => {
			if (err) {
				throw err;
			}
		});
  }
  //get agenda id
  getAgendaId(connect=con,user_id,callback)
  {
    const sql = `SELECT id FROM agenda WHERE user = "${user_id}"`;
    con.query(sql,(err,rows)=>{
      if (err) callback(err);
      callback(undefined,rows);
    });
  }
	// get table values
	selectALL(connect = con,id,callback) {
  const sql1=`SELECT agenda.id, title, createdAt, agendaMessage FROM agenda INNER JOIN users ON agenda.user = users.id WHERE agenda.user = ${id} ORDER BY createdAt DESC`;
    con.query(sql1, (err, rows) => {
      if (err) callback(err);
      callback(undefined,rows);
    });
  }
  // delete values
  deleteONE(connect=con,id,callback){
    const sql = `DELETE FROM agenda WHERE id = ${id}`;
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

  //get edit data
  getOneAgenda(connect=con,id,callback)
  {
    const sql = `SELECT * FROM agenda WHERE id=${id}`
    con.query(sql,(err,rows)=>{
      if (err) callback(err);
      callback(undefined,rows);
    })
  }
  //edit your information
  editInfo(connect=con,title,message,id,agendaId)
  {
    const sql = `UPDATE agenda SET title="${title}", agendaMessage="${message}", user=${id} WHERE agenda.id=${agendaId};`
		con.query(sql,(err, results) => {
			if (err) {
				throw err;
			}
		});
  }

}
module.exports = QUERY;
