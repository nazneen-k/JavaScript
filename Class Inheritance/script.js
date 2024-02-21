class employee {
  constructor() {
    console.log("Constructor: Employee");
  }
}

class manager extends employee {}

// let a=new employee();
let a0 = new manager();

// Passing a Value

class employee1 {
  constructor(name) {
    console.log("Hello " + name);
  }
}

class manager1 extends employee1 {}
let a = new manager1("Yahoo");



//Using Super keyword for derived class
class employee2 {
  constructor(name) {
    console.log("Constructor: Emmployee " + name);
  }
}

class manager2 extends employee2 {
  constructor(name) {
    super();
    console.log("Constructor Manager  " + name);
  }
}
let a2 = new manager2("Yahoo");



//using prototype method
class eomployee3 {
  constructor(name3,age,salary) {
    this.empName = name3;
    this.empAge=age
    this.empSalary=salary
    console.log("Constructor: Employee");
  }
  info() {
    // console.log("Employe Name: " + this.empName);
    document.write(`<h3>Employee Class</h3>
                    Name: ${this.empName}<br>
                    Age: ${this.empAge } <br>
                    Salar: ${this.empSalary}`
                    )

  }
}

class manager3 extends eomployee3 {
//   info() {
//     console.log("Manager Name:" + this.empName);
//     super.info();
//   }
}
let a3 = new manager3("Yahoooooo",25,26788);
a3.info();
