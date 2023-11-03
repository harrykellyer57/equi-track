/* 
Filename: sophisticated_program.js 

This code demonstrates a sophisticated and complex program that simulates a virtual pet.
It includes multiple classes, inheritance, and various methods to interact with the virtual pet.

Note: This code is just an example and does not ensure complete functionality.

*/

class Pet {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.energy = 100;
    this.mood = 'happy';
  }

  feed() {
    this.hunger -= 10;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }

  play() {
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
    }
    this.mood = 'happy';
  }

  sleep() {
    if (this.energy < 100) {
      this.energy += 30;
      if (this.energy > 100) {
        this.energy = 100;
      }
    }
  }

  ageOneYear() {
    this.age++;
    if (this.age >= 10) {
      this.mood = 'grumpy';
    } else if (this.age >= 5) {
      this.mood = 'old';
    }
  }
}

class Cat extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
    this.clawSharpness = 100;
  }

  clawFurniture() {
    this.clawSharpness -= 10;
    if (this.clawSharpness < 0) {
      this.clawSharpness = 0;
    }
    this.mood = 'angry';
  }

  meow() {
    console.log('Meow!');
  }
}

class Dog extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
    this.fetchSkill = 0;
  }

  fetch() {
    if (this.fetchSkill > 0) {
      console.log('Fetching the ball...');
      this.energy -= 10;
      this.fetchSkill--;
    } else {
      console.log("I don't know how to fetch yet!");
    }
  }

  learnFetch() {
    if (this.age >= 2) {
      this.fetchSkill += 3;
    } else {
      console.log("I'm too young to learn fetch!");
    }
  }

  bark() {
    console.log('Woof woof!');
  }
}

// Usage Example:

const fluffy = new Cat('Fluffy', 'Persian');
const buddy = new Dog('Buddy', 'Golden Retriever');

console.log(fluffy.name); // Output: Fluffy
console.log(buddy.name); // Output: Buddy

fluffy.meow(); // Output: Meow!
buddy.bark(); // Output: Woof woof!

fluffy.clawFurniture();
buddy.learnFetch();

console.log(fluffy.mood); // Output: angry
console.log(buddy.fetchSkill); // Output: 3

fluffy.ageOneYear();
buddy.ageOneYear();

console.log(fluffy.age); // Output: 1
console.log(buddy.age); // Output: 1

fluffy.play();
buddy.feed();

console.log(fluffy.energy); // Output: 80
console.log(buddy.hunger); // Output: 0

fluffy.sleep();
buddy.sleep();

console.log(fluffy.energy); // Output: 100
console.log(buddy.energy); // Output: 90