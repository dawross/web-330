/*
============================================
; Title: Exercise 1.3
; Author: Dan Ross
; Date: 8 August 2020
; Description: Class Refresher
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require("../ross-header.js");
/**
 * Description: Function class
 * params: manufacturer, model, color, price
 *
 */
function cellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;

  //get price
  this.getPrice = function () {
    return this.price;
  };

  //get model
  this.getModel = function () {
    return this.model;
  };

  //get details
  this.getDetails = function () {
    return (
      "Manufacturer: " +
      this.manufacturer +
      "\nModel: " +
      this.getModel() +
      "\nColor: " +
      this.color +
      "\nPrice: " +
      this.getPrice()
    );
  };
}

//New cellphone
var cellPhone = new cellPhone("Samsung", "Galaxy S20", "Cosmic Gray", "$999.99");

// output header
console.log(header.display("Dan", "Ross", "Exercise 1.3"));

//new line
console.log("\n")

//output new cell phone
console.log(cellPhone.getDetails());
