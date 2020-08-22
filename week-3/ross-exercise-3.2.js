/*
============================================
; Title: Exercise 3.2
; Author: Dan Ross
; Date: 22 August 2020
; Description: Factory Pattern
;===========================================
*/

// start program

//Imports the ross-header.js file from the root directory
const header = require("../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.2"));
console.log("");

function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

/**
 * Argument: properties
 * Properties: username, password, server, and version
 * Description: Oracle Database class
 */
function Oracle(properties) {
  this.username = properties.username || "admin" ;
  this.password = properties.password || "sdf6764^";
  this.server = properties.server || "localhost:8080"
  this.version = properties.version || "3.5";
}
/**
 * Argument: properties
 * Properties: username, password, and server
 * Description: Informix Database class
 */ 
function Informix(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "3ffg6&a5%";
  this.server = properties.server || "localhost:3000";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function (properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  } else if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  } else if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  } else {
    this.databaseClass = MySql;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret",
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password",
});
//New OracleFactory
var OracleFactory = new DatabaseFactory();
var oracle = OracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "e0C*83vg",
  server: "localhost:8080",
  version: "10.2.0.1",
});
//New InformixFactory
var InformixFactory = new DatabaseFactory();
var informix = InformixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin",
  password: "V21j**c2",
  server: "localhost:3000",
});

//output
console.log(oracle);
console.log("");
console.log(informix);

// end program