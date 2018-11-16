// Factory class pattern

// Parent function animal
function AnimalCreator(name, age) {
	let newAnimal = Object.create(animalActivity);
	newAnimal.name = name;
	newAnimal.age = age;
	return newAnimal;
}

// Object which has all the activity function that 
// all the animals do
// Herbivorous Tree
let animalActivity = {
	eat: function() {
		console.log(`I'm a living being and for survival I've to eat`);
	},

	move: function() {
		console.log(`Since I'm a living being, I can move`);
	}
}

// Function for creatigng herbivourous animals
function Herbivorous(name, age) {
	let newHerbivorous = AnimalCreator(name, age);
	Object.setPrototypeOf(newHerbivorous, HerbivorousActivity);
	return newHerbivorous;
}

// Object which has all the activity function of 
// herbivorous animals
let HerbivorousActivity = {
	eatGrass: function() {
		console.log(`I only eat grass, I can not eat flesh`);
	}
}

// To make animalActivity prototype of HerbivorousActivity
Object.setPrototypeOf(HerbivorousActivity, animalActivity);


// Make rabbit function 
function Rabbit(name, age) {
	let newRabbit = Herbivorous(name, age);
	Object.setPrototypeOf(newRabbit, rabbitActivity);
	return newRabbit;
}

// Object that contain all rabbit activity
let rabbitActivity = {
	jump: function() {
		console.log(`My life is shit and that's the only cool thing that I do`);
	}
}

// To make HerbivorousActivity prototype of rabbitActivity
Object.setPrototypeOf(rabbitActivity, HerbivorousActivity);

// Function for creating cow and horse

function Cow(name, age) {
	let newCow = Herbivorous(name, age);
	Object.setPrototypeOf(newCow, cowActivity);
	return newCow;
}

function Horse(name, age) {
	let newHorse = Herbivorous(name, age);
	Object.setPrototypeOf(newHorse, horseActivity);
	return newHorse;
}

// Object for horseActivity and cowActivity

let cowActivity = {
	giveMilk: function() {
		console.log(`No I don't give, they took it without my conscent`);
	}
}

let horseActivity = {
	runfast: function() {
		console.log(`Yes, Only if you feed me well`);
	}
}

// to make HerbivorousActivity subprototype of cowActivity and horseActivity
Object.setPrototypeOf(cowActivity, HerbivorousActivity);
Object.setPrototypeOf(horseActivity, HerbivorousActivity);

// Carnivorous Tree
// Function for creating carnivorous animals
function Carnivorous(name, age) {
	let newCarnivorous = AnimalCreator(name, age);
	Object.setPrototypeOf(newCarnivorous, carnivorousActivity);
	return newCarnivorous;
}

// Object that has carnivorous activity
let carnivorousActivity = {
	eatFlesh: function() {
		console.log(`I love to eat flesh`);
	}
}

// Making animalActivity prototype of Carnivorous activity
Object.setPrototypeOf(carnivorousActivity, animalActivity);

function Dog(name, age) {
	let newDog = Carnivorous(name, age);
	Object.setPrototypeOf(newDog, dogActivity);
	return newDog;
}

function Lion(name, age) {
	let newLion = Carnivorous(name, age);
	Object.setPrototypeOf(newLion, lionActivity);
	return newLion;
}

function Tiger(name, age) {
	let newTiger = Carnivorous(name, age);
	Object.setPrototypeOf(newTiger, tigerActivity);
	return newTiger;
}

let dogActivity = {
	bark: function() {
		console.log(`I do bark sir!`);
	}
}

let lionActivity = {
	roar: function() {
		console.log(`When I roar you will shit in your pant`);
	}
}

let tigerActivity = {
	fastrunner: function() {
		console.log(`I'm proud of my speed`);
	}
}

Object.setPrototypeOf(dogActivity, carnivorousActivity);
Object.setPrototypeOf(lionActivity, carnivorousActivity);
Object.setPrototypeOf(tigerActivity, carnivorousActivity);