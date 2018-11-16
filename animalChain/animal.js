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

