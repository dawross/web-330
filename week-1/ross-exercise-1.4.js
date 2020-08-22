/*
============================================
; Title: Exercise 1.4
; Author: Dan Ross
; Date: 8 August 2020
; Description: Duck Typing, A.K.A. "Interfaces"
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require("../ross-header.js");

/**
 * Description: Function Car class
 * params: model
 */
function Car(model) {
  this.model = model;
}
//prototype method
Car.prototype.start = function () {
  console.log("Car added to the racetrack!");
};
/**
 * Description: Function Truck class
 * params: model, year
 */
function Truck(model, year) {
  this.model = model;
  this.year = year;
}
//prototype method
Truck.prototype.start = function () {
  console.log("Truck added to the racetrack!");
};
/**
 * Description: Function Jeep class
 * params: model, year, color
 */
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}
//prototype method
Jeep.prototype.start = function () {
  console.log("Jeep added to the racetrack!");
};
//racetrack array
var racetrack = [];

//calling each of the object's prototype (start) and push to racetrack array
function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
}

//New vehicle objects
var celica = new Car("Celica");
var fordF150 = new Truck("F150", "2010");
var wrangler = new Jeep("Wrangler", "2016", "White");

// output header
console.log(header.display("Dan", "Ross", "Exercise 1.4"));

//new line
console.log("");

//call the driveIt function and pass the vehicle objects. These get assigned the prototype "start"
driveIt(celica);
driveIt(fordF150);
driveIt(wrangler);
//Output
console.log("\n-- The following vehicles have been added to the racetrack --");

for (var i = 0; i < racetrack.length; i++) {
  console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}
