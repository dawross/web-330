/*
============================================
; Title: Exercise 3.3
; Author: Dan Ross
; Date: 22 August 2020
; Description: The Singleton Pattern
;===========================================
*/

// start program

//Imports the ross-header.js file from the root directory
const header = require("../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.3"));
console.log("");

var DatabaseSingleton = (function () {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// function with 2 database instance objects(oracle and postgres)
function databaseSingletonTest() {
  //call DatabaseSingleton class and getInstance method
  var oracle = DatabaseSingleton.getInstance();
  var postgres = DatabaseSingleton.getInstance();
  //output with comparison
  console.log("Same database instance? ", oracle === postgres);
}
// call function
databaseSingletonTest();
// end program
