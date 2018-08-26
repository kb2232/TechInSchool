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
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(150) NOT NULL,
  school_code VARCHAR(50) NOT NULL,
  FOREIGN KEY(school_code) REFERENCES schools(code)
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
INSERT INTO users(firstname,lastname,email,password,school_code)
VALUES
("kunle","babatunde","kbabatunde@broomestreete.com","broome18*","1QFXT5R"),
("taleisa","babatunde","taleisia.babatunde@leadershipprep.com","uncommon1","00IO28D"),
("ozzie","henderson","ozzie.henderson@saschools.org","success1","1FF095R"),
("Lovina","Jackman","lovina.jackman@ascendhigh.com","ascend1","0WEXT57");

SELECT * FROM users;

--export PATH=${PATH}:/usr/local/mysql/bin/;
SELECT id,firstname,lastname,email,SUBSTRING(password,1,10) AS 'pass...' 
FROM users;