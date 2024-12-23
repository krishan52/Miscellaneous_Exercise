// let arr1 = [1,2,3];
// let arr2 = [1,2,3];

// arr1.sayHello= () => {
//     console.log("Hello, I am an arr");
// };

// arr2.sayHello= () => {
//     console.log("Hello, I am an arr");
// }


// Factory Functions
// function personMaker(name,age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, My name is ${this.name}`);
//         }
//     }
//     return person;
// }


// Constructors
// function Person(name,age) {
//     this.name = name;
//     this.age = age;          // it doesn't create any object but directly access them
// };

// Person.prototype.talk = function() {
//     console.log("Hello, How are you");
// }
// let p1 = new Person("kk", 23);
// let p2 = new Person("dk", 23);

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name} and my age is ${this.age}`);
    }
};

// let p1 = new Person("Krishan",21);
// let p2 = new Person("Eve",34);

// class Student extends Person {
//     constructor(name,age,marks) {
//         super(name,age);
//         this.marks = marks;
//     }
//     greet() {
//         return "hello";
//     }
// }

// let s1 = new Student("Krishan",22,90);

class Teacher extends Person{
    constructor(name,age,subject) {
        super(name,age);                // Parent class constructor is being called
        this.subject = subject;
    }
};

class Student extends Person {
    constructor(name,age,marks) {
        super(name,age);
        this.marks = marks;
    }
};

let t1 = new Teacher("Sohit",32,"hindi");

