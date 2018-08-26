DROP DATABASE techinschools;
CREATE DATABASE IF NOT EXISTS techinschools;
SHOW DATABASES;
USE techinschools;

-- Create teacher table;
CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  pass_word VARCHAR(150) NOT NULL
);

CREATE TABLE class (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    classname VARCHAR(40) NOT NULL,
    timePeriod TIME NOT NULL
);

INSERT INTO class (classname, timePeriod) VALUES ("Precalculus", "08:40:00");
INSERT INTO class (classname, timePeriod) VALUES ("Algebra 2", "12:10:00");
INSERT INTO class (classname, timePeriod) VALUES ("Algebra 2 Honors", "13:20:00");

CREATE TABLE students (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    linktophoto VARCHAR(255),
    phonenumber VARCHAR(10),
    address VARCHAR(50),
    classId INT NOT NULL
);

INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, classId) VALUES ("Jeff", "Cash", "https://i.dailymail.co.uk/i/pix/2013/08/29/article-2405475-1B8389EE000005DC-718_634x550.jpg", "2011234522", "123 New St.", 3);
INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, classId) VALUES ("Jeff", "Cash", "https://i.dailymail.co.uk/i/pix/2013/08/29/article-2405475-1B8389EE000005DC-718_634x550.jpg", "2011234522", "123 New St.", 1);
INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, classId) VALUES ("Nicole", "Jeffreys", "https://www.rd.com/wp-content/uploads/2017/03/22-People-Share-the-Random-Act-of-Kindness-That-Changed-Their-Life-Polly-380x254.jpg", "2014612532", "588 Main St.", 3);
INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, classId) VALUES ("John", "Jordan", "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e98f2535036667.58bc6981515a3.jpg", "2016946999", "522 Apple Pl.", 3);
INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, classId) VALUES ("Rebecca", "Cunningham", "http://images4.fanpop.com/image/photos/16300000/Random-people-random-16382026-375-500.jpg", "2015321353", "483 Main St.", 3);
INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, classId) VALUES ("Brian", "Smith", "http://ofad.org/files/daily-photo/recent-and-random-portraits_8.jpg", "2018968412", "136 Market Ct.", 3);

SELECT * FROM students;

SELECT * FROM users;

--export PATH=${PATH}:/usr/local/mysql/bin/;