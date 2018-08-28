DROP DATABASE techinschools;
CREATE DATABASE IF NOT EXISTS techinschools;
SHOW DATABASES;
USE techinschools;


-- Create School info;
CREATE TABLE schools(
  code VARCHAR(50) NOT NULL PRIMARY KEY,
  school_name VARCHAR(150) NOT NULL UNIQUE
);

-- Create teacher table;
CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
		user_id VARCHAR(50) UNIQUE,
		firstname VARCHAR(50) NOT NULL,
		lastname VARCHAR(50) NOT NULL,
		email VARCHAR(50) NOT NULL,
		password VARCHAR(150),
		school_code VARCHAR(50) NOT NULL,
		FOREIGN KEY(school_code) REFERENCES schools(code)
);

-- create agenda table;
CREATE TABLE agenda(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	createdAt TIMESTAMP DEFAULT NOW(),
	agendaMessage LONGTEXT NOT NULL,
	user VARCHAR(50) NOT NULL,
	FOREIGN KEY(user) REFERENCES users(user_id)
);

SHOW TABLES;

-- insert into schools;
INSERT INTO schools (code, school_name)
VALUES 
("1QFXT5R","BroomeStreet Academy High School"),
("1FF095R","Success Academy Charter High School"),
("0WEXT57","Ascend Charter High School"),
("00IO28D","Uncommon Charter High School");


-- insert teachers;
INSERT INTO users (user_id,firstname,lastname,email,school_code)
VALUES
('1XR1kb','kunle', 'babatunde', 'kunle.kunle@broomestreet.com', '1QFXT5R'),
('1XR2kb','kunle', 'babatunde', 'kunle.kunle@broomestreet.com', '1QFXT5R'),
('1XR1yy','yesenia', 'yezuri', 'yesenia.yesenia@broomestreet.com', '1QFXT5R'),
('1XR1tb','taleisia', 'babatunde', 'taleisia.babatunde@leadershipprep.com', '00IO28D'),
('1XR1rr','ronak', 'ray', 'ronak.ronak@sschools.org','1FF095R'),
('1XR1sk','sean', 'kim', 'sean.sean@ascendhigh.com', '0WEXT57'),
('1XR1mk','michael', 'kim', 'michael.michael@ascendhigh.com', '0WEXT57');


-- insert into agendas;
INSERT INTO agenda(title,agendaMessage,user) VALUES("test1","yesenia test","1XR1yy"),("test2","taleisia test","1XR1tb"), ("test3","kunle1 test","1XR1kb"),("test4","kunle2 test","1XR2kb"),("test3b","kunle1 test","1XR1kb"), ("test5","kunle2 test","1XR2kb");


SELECT * FROM users;




--export PATH=${PATH}:/usr/local/mysql/bin/;
SELECT user_id,firstname,email, password
FROM users;



SELECT agenda.id, users.id AS 'uid', title, createdAt, agendaMessage FROM agenda INNER JOIN users  ON agenda.user = users.user_id WHERE user_id = "1XR1kb";