/*
Oject Oriented Programming -----> ES6 Version 

It is a Coding Methodology/style/pattern

- Code is more modular and Reusable
- Well Organised Code
- Easier to debug


- Classes are a way to define blueprints for creating objects
  with similar properties and behaviors.
- They provide a more structured and organized approach to creating objects, especially when you need multiple objects with the same structure.
- Classes encapsulate data (properties) and functionality (methods) related to a particular entity or concept.
- You can create multiple instances (objects) of a class using the new keyword.

- For a Class, create a object  using a variable and use any methods

*/

class hello {
  message() {
    console.log("Hello Everyone");
  }
  sorry() {
    console.log("Sorry");
  }
}
let a = new hello();

a.message();
a.sorry();

/*
Types of Methods:
- Constructor
- Prototype
- Static 

- For Constructor
    constructor(){
        console.log("Hello");
    }

    - Main Purpose/Function ------>  They get's called by themselves

- For Prototype
    message(){
        console.log("Hello")
    }

- For Static
    static name(){
        console.log("Hello")
    }

    -  No need to create a object, can be called witout creating an Object
*/

// Constructor

// class student {
//   constructor() {
//     console.log("Hii.. This is called by Constructor");
//   }
// }
// let b = new student();
// let c = new student();

// For setting property

class student {
  constructor(name, age) {
    this.studentName = name;
    this.studentAge = age;
    console.log("Constructor Function");
  }
  hello() {
    console.log("Hello " + this.studentName + " Your age i " + this.studentAge);
  }
}

let b = new student("Yahoo", 25);
let c = new student("Baaba", 567);
b.hello();
c.hello();


//Static Method 

class teacher{
    static staticMethod(){
        console.log("Hello I am Teacher, and this is static method")
    }
}

teacher.staticMethod()