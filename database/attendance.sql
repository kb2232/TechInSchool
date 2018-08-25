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

SHOW TABLES;
SHOW COLUMNS FROM users;

SELECT * FROM users;

--export PATH=${PATH}:/usr/local/mysql/bin/;