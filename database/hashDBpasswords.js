const conn = require("../config/connect"),
bcrypt = require("bcrypt-nodejs");

//hash the password
let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync("ascend1", salt);
let email = "lovina.jackman@ascendhigh.com";
conn.query(`UPDATE users SET password=PASSWORD("${hash}") WHERE email="${email}"`);

/*
SELECT id,firstname,lastname,email,SUBSTRING(password,1,10) AS 'pass...' 
FROM users;
*/