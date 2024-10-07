"use strict";
//SECTION Constructor functions
//NOTE CONSTRUCTOR FUNCTIONS ALWAYS START WITH A UPPERCASE LETER
// const Person = function (firstName, birthYear) {
//   //Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person("Jonas", 1991);

// //1. New {} is created
// //2. funtion is called, this={}
// //3. {} linked to prototype
// //4. funtion automatically returns {}

// const matilda = new Person("Matilda", 2017);
// const jack = new Person("Jack", 2017);

// console.log(jonas, matilda, jack);

// const jay = "jay";

// console.log(jack instanceof Person);
// console.log(jay instanceof Person);

// //SECTION PROTOTYPES
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// Person.prototype.species = "Homo Sappiens";
// console.log(jonas.hasOwnProperty("species"));

// //SECTION Prototypal Inheritance on Built-In Objects

// console.log(jonas.__proto__.__proto__);

// const arr = [3, 6, 4, 5, 6, 9, 3, 3, 9];
// console.log(arr.__proto__);
// console.log(arr.__proto__ == Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector("h1");
// console.dir(h1);

// //CHALLANGE 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

// const car1 = new Car("BMW", 120);
// const car2 = new Car("Mercedes", 150);
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// car1.brake();

// car2.accelerate();
// car2.brake();

//SECTION CLASSES

//cLASS EXPRESSION
const PersonCl1 = class {};

//CLASS DECLARATION
class PersonCl2 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //NOTE YOU CAN WRITE METHODS INSIDE CLASSES
  //NOTE METHODS WILL BE ADDED TO .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl2("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

// PersonCl2.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are first class citizens
//3. The body of the class is always executed in strict mode

//SECTION GETTERS AND SETTERS
