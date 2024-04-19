CREATE DATABASE singersdb; 

use singersdb;

CREATE TABLE singer(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age DECIMAL,
    gender VARCHAR(400) NOT NULL,
    
    createdAT TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe singer