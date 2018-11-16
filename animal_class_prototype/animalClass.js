class AnimalCreator {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	eat() {
		console.log(`I'm a living being and for survival I've to eat`);
	}

	move() {
		console.log(`Since I'm a living being, I can move`);
	}	
}

class Herbivorous extends AnimalCreator {
	constructor(name, age) {
		super(name, age);
	}
	eatGrass() {
		console.log(`I only eat grass, I can not eat flesh`);
	}
}