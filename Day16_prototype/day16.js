// The Car and the Truck have similar behavior and properties.
// Rewrite them in a way such that they share those properties.
var Vehicle = function(driver, vehicle_type) {
    if (type == 'car') {
        let this.
    }
  var Car = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Truck = function(driver) {
    this.driver = driver;
    this.speed = 0;
    this.cargo = [];
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };

    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    this.unloadCargo = function() {
      return this.cargo.pop();
    };
  };


// // Create an object called Teacher derived from the Person class, 
// // and implement a method called teach which receives a string called subject, and prints out.

function Person(name) {
    this.teacher = name
}

Person.prototype.teach = function(subject) {
    console.log(`${this.teacher} is a ${subject} teacher.`)
}

console.log()
// Define a constructor function called Persone which takes three arguments
//(name, yearOfBirth, job) Initiate the properties

function Human(name, yearOfBirth, job) {
    this.name = name;
    this.yob = yearOfBirth;
    this.job = job;
}


// Define a function name calculateAge which returns the age of the person
Human.prototype.calculateAge = function() {
    const currentyear = new Date;
    let age = currentyear.getFullYear() - this.yob;
    return age;
}


// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

let ramesh = new Human('Ramesh', 1993, 'Sniper')

// call the calculateAge function on each object
console.log(ramesh.calculateAge())
