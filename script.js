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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
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

  get age() {
    return 2037 - this.birthYear;
  }

  //SET A PROPERTY THAT ALREADY EXIST
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log("Hey there ");
  }
}

const jessica = new PersonCl2("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
// PersonCl2.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

//1. Classes are NOT hoisted
//2. Classes are first class citizens
//3. The body of the class is always executed in strict mode

//SECTION GETTERS AND SETTERS

// const walter = new PersonCl2("Walter White", 1965);

// const account = {
//   owner: "Jonas",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

//SECTION STATIC METHODS

// PersonCl2.hey = function () {
//   console.log("Hey there 👋");
//   console.log(this);
// };
// PersonCl2.hey();

//SECTION OBJECT.CREATE

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// steven.name = "Steven";
// steven.birthYear = 2002;

// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 1979);
// sarah.calcAge();

//CHALLANGE 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl("Ford", 120);

// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);
