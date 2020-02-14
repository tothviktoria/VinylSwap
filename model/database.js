require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "vinylSwap",
  multipleStatements: true
});

// CREATE TABLE `vinyls` (
// 	`id` INT NOT NULL AUTO_INCREMENT,
// 	`vinyl_title` varchar NOT NULL,
// 	`genre` varchar NOT NULL,
// 	`user_id` INT NOT NULL,
// 	PRIMARY KEY (`id`)
// );

// CREATE TABLE `users` (
// 	`id` INT NOT NULL AUTO_INCREMENT,
// 	`name` INT NOT NULL,
// 	PRIMARY KEY (`id`)
// );

// CREATE TABLE `requests` (
// 	`id` INT NOT NULL AUTO_INCREMENT,
// 	`user_id` INT NOT NULL,
// 	`vinyl_id` INT NOT NULL,
// 	`status` INT NOT NULL,
// 	PRIMARY KEY (`id`)
// );

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE if exists vinyls; CREATE TABLE vinyls ( id INT NOT NULL AUTO_INCREMENT, vinyl_title varchar(255) NOT NULL, genre varchar(255) NOT NULL, user_id INT NOT NULL ,PRIMARY KEY (id) ), FOREIGN KEY (user_id));`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `vinyls` was successful!");

    console.log("Closing...");
  });

  sql = `DROP TABLE if exists users; CREATE TABLE users (id INT NOT NULL AUTO_INCREMENT,name varchar(255), PRIMARY KEY (id));`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `users` was successful!");

    console.log("Closing...");
  });

  sql = `DROP TABLE if exists requests; CREATE TABLE requests (id INT NOT NULL AUTO_INCREMENT,user_id INT NOT NULL,vinyl_id INT NOT NULL,status INT NOT NULL,PRIMARY KEY (id), FOREIGN KEY (user_id), FOREIGN KEY (vinyl_id));`;
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `requests` was successful!");

    console.log("Closing...");
  });

  con.end();
});
