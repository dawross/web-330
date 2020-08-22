/*
============================================
; Title: Exercise 2.2
; Author: Dan Ross
; Date: 15 August 2020
; Description: Prototypes
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require("../ross-header.js");
//person object
var person = {
    getAge: function() {
        //return age
        return this.age;
    }
};
// create new person object with age and full name
var dan = Object.create(person, {
    age:
    {
        "value": "46"
    },
    "fullname":
    {
        "value": "Dan Ross"
    }
});

//call getAge function on 'dan' person object
dan.getAge();


// output header
console.log(header.display("Dan", "Ross", "Exercise 2.2"));
console.log("");

//output
console.log("The person's full name is " + dan.fullname + ".");
console.log("The person's age is " + dan.age + ".");