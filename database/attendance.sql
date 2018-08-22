DROP DATABASE techinschools;
CREATE DATABASE IF NOT EXISTS techinschools;
SHOW DATABASES;
USE techinschools;
-- Create teacher table;
CREATE TABLE teachers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstname VARCHAR(128) NOT NULL,
  lastname VARCHAR(128) NOT NULL,
  email VARCHAR(128) NOT NULL UNIQUE
);

SHOW TABLES;
SHOW COLUMNS FROM teachers;

-- Inserting teachers name;