DROP DATABASE IF EXISTS financialdb;
CREATE DATABASE financialdb;

USE financialdb;

CREATE TABLE spFiveHundreds (
  id INTEGER NOT NULL AUTO_INCREMENT,
  
  price_date DATE NULL,
  open_price DECIMAL(10,2) NOT NULL,
  day_high DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM spFiveHundreds;