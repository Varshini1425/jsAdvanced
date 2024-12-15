// const animal = {
//     sound: "generic sound",
//     makeSound: function () {
//         console.log(this.sound);
//     }
// };

// const dog = Object.create(animal);
// dog.sound = "Bark!";
// dog.makeSound(); // Output: Bark!

// // animal.makeSound();



// const animal = {
//     eat: function () {
//         console.log("Eating...");
//     }
// };

// const bird = Object.create(animal);
// bird.fly = function () {
//     console.log("Flying...");
// };

// bird.eat(); // Inherited from `animal`
// bird.fly(); // Defined on `bird`

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     eat() {
//         console.log(`${this.name} is eating.`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(`${this.name} is barking.`);
//     }
// }

// const dog = new Dog("Buddy");
// dog.eat(); // Inherited from Animal
// dog.bark(); // Defined in Dog



// const obj = {};
// console.log(obj.toString()); // Found in Object.prototype


class Person {
    constructor(name) {
        this.name = name;
        // Bind the method to the instance
       Person.prototype.sayHello = function () {
            console.log(`Hello from ${this.name}`);
        };
    }
}

// Create instances
const person1 = new Person("Alice");
const person2 = new Person("Bob");

// Modify the prototype method
Person.prototype.sayHello = function () {
    console.log("Prototype changed!");
};

// Call the method
person1.sayHello(); // Hello from Alice
person2.sayHello(); // Hello from Bob

