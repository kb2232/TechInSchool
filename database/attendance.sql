DROP DATABASE techinschools;
CREATE DATABASE IF NOT EXISTS techinschools;
SHOW DATABASES;
USE techinschools;

-- Create teacher table;
CREATE TABLE teachers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  teacher_password VARCHAR(50) NOT NULL
);

SHOW TABLES;
SHOW COLUMNS FROM teachers;

-- Inserting teachers;
INSERT INTO teachers(firstname,lastname,email,teacher_password)
VALUES
("kunle","babatunde","kb2232@nyu.edu","kb2232"),
("taleisia","babatunde","taleisia123@gmail.com","Edwards");
