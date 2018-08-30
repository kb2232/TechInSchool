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

DROP TABLE students;

CREATE TABLE students (
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    linktophoto VARCHAR(255),
    phonenumber VARCHAR(10),
    address VARCHAR(50),
    birthday DATE
);

INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, birthday) VALUES ("Jeff", "Cash", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2011234522", "123 New St.", 06/21/2002);
INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, birthday) VALUES ("Nicole", "Jeffreys", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2014612532", "588 Main St.", 12/31/2001);
INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, birthday) VALUES ("John", "Jordan", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2016946999", "522 Apple Pl.", 05/12/2002);
INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, birthday) VALUES ("Rebecca", "Cunningham", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2015321353", "483 Main St.", 01/05/2002);
INSERT INTO students (firstname, lastname, linktophoto, phonenumber, address, birthday) VALUES ("Brian", "Smith", "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "2018968412", "136 Market Ct.", 10/15/2001);

SELECT * FROM students;

DROP TABLE teachers;

CREATE TABLE teachers (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20) NOT NULL,
    address VARCHAR(50),
    birthday DATE,
    linktophoto VARCHAR(255),
    phonenumber VARCHAR(10)
);

INSERT INTO teachers (firstname, lastname, address, birthday, linktophoto, phonenumber) VALUES ("Robert", "Tree", "435 Magnolia Ave.", 02/21/1991, "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "5413155672");
INSERT INTO teachers (firstname, lastname, address, birthday, linktophoto, phonenumber) VALUES ("Chris", "Wotkins", "119 Howards St.", 10/04/1985, "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "6531567894");
INSERT INTO teachers (firstname, lastname, address, birthday, linktophoto, phonenumber) VALUES ("Tony", "Li", "312 Carpenter Pl.", 07/28/1986, "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "1468971263");
INSERT INTO teachers (firstname, lastname, address, birthday, linktophoto, phonenumber) VALUES ("Samantha", "Gray", "3 14th St.", 03/01/1794, "http://www.mojosolitservices.com/wp-content/uploads/avatar-1-300x300.png", "6544314893");

SELECT * FROM teachers;

DROP TABLE class;

CREATE TABLE class (
	id INT NOT NULL PRIMARY KEY,
    teacherID INT,
    subject VARCHAR(30),
    classname VARCHAR(40) NOT NULL,
    timePeriod TIME NOT NULL,
    day INT,
    FOREIGN KEY (teacherID) REFERENCES teachers(id)
);

INSERT INTO class (id, teacherID, subject, classname, timePeriod, day) VALUES (1, 1, "Science", "Biology", "10:40:00", 4);
INSERT INTO class (id, teacherID, subject, classname, timePeriod, day) VALUES (2, 3, "Math", "Algebra", "12:20:00", 3);
INSERT INTO class (id, teacherID, subject, classname, timePeriod, day) VALUES (3, 2, "English", "AP Literature", "13:10:00", 5);
INSERT INTO class (id, teacherID, subject, classname, timePeriod, day) VALUES (4, 1, "Science", "Biology Honors", "08:15:00", 1);
INSERT INTO class (id, teacherID, subject, classname, timePeriod, day) VALUES (5, 1, "Science", "Biology", "10:40:00", 2);
INSERT INTO class (id, teacherID, subject, classname, timePeriod, day) VALUES (6, 1, "Science", "Physics", "13:50:00", 3);
INSERT INTO class (id, teacherID, subject, classname, timePeriod, day) VALUES (7, 1, "Science", "Chemistry", "12:00:00", 4);
INSERT INTO class (id, teacherID, subject, classname, timePeriod, day) VALUES (8, 1, "Science", "AP Physics", "11:30:00", 5);

SELECT * FROM class;

DROP TABLE attendance;

CREATE TABLE attendance (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    studentID INT,
    classID INT,
    attendancevalue ENUM("LATE", "ABSENT", "PRESENT", "EXCUSED"),
    date DATE
);

INSERT INTO attendance (studentID, classID, attendanceValue, date) VALUES (2, 1, "PRESENT", 08/30/2018);
INSERT INTO attendance (studentID, classID, attendanceValue, date) VALUES (3, 1, "PRESENT", 08/30/2018);
INSERT INTO attendance (studentID, classID, attendanceValue, date) VALUES (4, 4, "PRESENT", 08/30/2018);
INSERT INTO attendance (studentID, classID, attendanceValue, date) VALUES (2, 5, "PRESENT", 08/30/2018);
INSERT INTO attendance (studentID, classID, attendanceValue, date) VALUES (1, 6, "PRESENT", 08/30/2018);
INSERT INTO attendance (studentID, classID, attendanceValue, date) VALUES (3, 7, "PRESENT", 08/30/2018);
INSERT INTO attendance (studentID, classID, attendanceValue, date) VALUES (5, 8, "PRESENT", 08/30/2018);

SELECT * FROM attendance;

CREATE TABLE takesClass (
    classID INT,
    studentID INT,
    FOREIGN KEY (classID) REFERENCES class(id),
    FOREIGN KEY (studentID) REFERENCES students(id)
);

INSERT INTO takesClass (classID, studentID) VALUES (1, 2);
INSERT INTO takesClass (classID, studentID) VALUES (1, 3);
INSERT INTO takesClass (classID, studentID) VALUES (2, 5);
INSERT INTO takesClass (classID, studentID) VALUES (2, 4);
INSERT INTO takesClass (classID, studentID) VALUES (2, 3);
INSERT INTO takesClass (classID, studentID) VALUES (2, 1);
INSERT INTO takesClass (classID, studentID) VALUES (3, 2);
INSERT INTO takesClass (classID, studentID) VALUES (4, 4);
INSERT INTO takesClass (classID, studentID) VALUES (5, 2);
INSERT INTO takesClass (classID, studentID) VALUES (6, 1);
INSERT INTO takesClass (classID, studentID) VALUES (7, 3);
INSERT INTO takesClass (classID, studentID) VALUES (8, 5);

SELECT * FROM takesClass;

SELECT * FROM users;

DROP TABLE takesClass;

--export PATH=${PATH}:/usr/local/mysql/bin/;