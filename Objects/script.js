/*Objects
*/


// This is an Array --> var a=["Ram","Kumar",18,"India"]

/* 
This is Object, it has properties and Values
Objects has names for its Index
var a={
    firstName:"Ram",
    lastName:"Kumar",
    age:18,
    country:"India"
}; 




The name:values pairs in JavaScript objects are called properties:
Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue



You can access object properties in two ways:

objectName.propertyName
or
objectName["propertyName"] 

Objects can also have methods.
Methods are actions that can be performed on objects.
Methods are stored in properties as function definitions.

A method is a function stored as a property.
*/

var a={
    firstName:"Ram",
    lastName:"Kumar",
    age:18,
    country:"India",
    favMovies:['Jawaan','Pathaan','Raees'],
    living: {
        'city':'Chandigarh',
        'country':'India'
    },

    salary: function(){
        return 25000;
    },
    fulllname:function(){
        return this.firstName+" "+ this.lastname  // this is used here inorder to utilize the properties,without using this it gives error
    }
};

document.write(a+"<br>") //---> It Prints the output as [object Object] 
console.log(a)
console.log(a.firstName)
document.write(a.firstName+"<br>")
document.write(a.salary()+"<br>")
document.write(a.living.city+"<br>")



/* Another Method of Writing the object */

// var a=new Object();

var person = new Object();
person.firstName='Ram';
person.lastName='Kuman';
person.age=25;

document.write(person.firstName+"<br>")
document.write(person['age']+"<br>")



const user = {
  name: "Naz",
  age: 0,
};

console.log(user.name); //---> Accessing the property

user.name = "Nazneen K"; //---> Modifying the property
console.log(user.name);

delete user.age; //---> Deleting the property
console.log(user);

//-------------------------------------------------------------------------------------------------------------------------
//What will be output of this?
/*
const func = (func(a){
    delete a;
    return a;
}) (5)
console.log(func)

*/

const func = (function (a) {
  delete a;
  return a;
})(5);
console.log(func); //---> Output: 5

/*
-  Here a is a local variable
- Delete keyword is only used when we want to delete properties from an object and not a local variable
- So its not going to effect at all */

//-------------------------------------------------------------

//Using the keys which will have spaces in between then use "" and while accesssing square brackets[]

const spacedKey = {
  user: "Naz",
  "like this spaced keys": true,
};

console.log(spacedKey["like this spaced keys"]);

//-----------------------------------------------------

//Dynamically addding values

const property = "firstName";
const name = "Piyush Agarwal";

const users = {
  [property]: name,
};

console.log(users);

//--------------------------------------------------------
//Looping through Objects
const userss = {
  name: "Roadside Coder",
  age: 24,
  isTotallyAwesome: true,
};

// We are using for in loop

for (ke in userss) {
  console.log(ke);
} //---> for getting the key

for (val in userss) {
  console.log(userss[val]);
}

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

// Question 1 - What is the Output of this?

const obj = {
  a: "one",
  b: "two",
  a: "three",
};

console.log(obj);
/*
{a: 'three', b: 'two'}
a: "three"
b: "two"
[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

- Here a as a key is two times, the first one holds the value as 'one' 
where as the second one has the value as 'three' the value gets updated

*/

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//Question 2 - Create a function multiplyByTwo(obj) that
//             multiplies all numeric property value of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "my name",
};

multiplyByTwo(nums);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
}

console.log(nums);

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//Question 3 - What's the Output of the following code?

const a = {};
const b = { key: "b" };
const c = { key: "c" };
a[b] = 123;
a[c] = 456;

console.log(a[b]); //---> Output 456

/*
In JavaScript, when you use objects as keys within another object, they are converted to strings by default. The object keys are coerced into strings using their toString() method.

In this case, b and c are both objects. However, when they are used as keys in the object a, they will both be converted to "[object Object]" (the default string representation of objects in JavaScript), effectively making them the same key.

Let's break it down:

javascript
Copy code
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123; // This sets a["[object Object]"] = 123;
a[c] = 456; // This overrides the previous assignment, setting a["[object Object]"] = 456;
When you try to access a[b], it's actually the same as a[c] because b and c both became "[object Object]" keys due to the automatic string conversion when used as keys in the object a.

Therefore, console.log(a[b]) will output 456. */

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//Question 4 - What is JSON.strigify and JSON.parse ?

const jsonUsers = {
  name: "Piyush",
  age: 24,
};

const stringConverted = JSON.stringify(jsonUsers);
console.log(stringConverted); //---> Converts the object to string

console.log(JSON.parse(stringConverted)); //--> Converts back to Object

/*
Additional Question, Where is this concept used?
- Storing it in our local storage*/

localStorage.setItem("test", stringConverted);

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//Question 5 - What's the Output?
console.log([..."Lydia"]);
//It's the Spread Operator, used to spread the properties of an
//object or an array

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

//Question 6 - What's the Output ?

const spreadUser = { name: "Lydia", age: 21 };
const admin = { admin: true, ...spreadUser };
console.log(admin);

/*
{admin: true, name: 'Lydia', age: 21}
 - We got all of the properties of user inside of the admin as well
 */

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Question 7 -  What's the Output ?
const settings = {
  username: "Piyush",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

// Since here only '''(settings,["level","health"]);''' is mentioned only the level and health part will be cvonverted to string

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Question 8 - What's the output?

const shape = {
  radius:10,
  diameter(){
    return this.radius*2;
  },
  perimeter:()=>2*Math.PI*this.radius,
}

console.log(shape.diameter())
console.log(shape.perimeter())


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Question 9 - What is destructuring in Objects ?

// let userd={
//   name:"Piyush",
//   age:24,
// };
// const { name } = userd;
// console.log(name)

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Question 10 - What's the output?

function getItems(fruitList,favoriteFruit,...args){
  return [...fruitList, ...args, favoriteFruit]
}

/*
Remember Rest Operators can't be used in between the parameters,
where as the Spread Operators can be used in the middle */

console.log(getItems(["banana","apple"],"pear","orange"))

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Question 11 - What's the Output?
//----------Object Referencing----------

let cc= {greeting:"Hey!"};
let d;
d=cc;
cc.greeting="Hello"
console.log(d.greeting) //Output: Hello
// When we try to assign one Object to another we are not copying
// all of the properties of one object to the other variable
// What we do is we simply provide the reference to this object to the variable
// So if we go on change anything in d or cc it will effect both of the objects
// because we are simply providing the reference and not the complete Object

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Question 12 - What's the Output?

console.log({a:1}=={a:1})
console.log({a:1} === {a:1})
//Output: False
//Because both of them are different Objects over here
//Both have different space in the memory and objects are only 
//equal  when they are referencing a particular area in a memory

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// Question 13 - What's the Output ?
let person = {name:"Lydia"}
const member=[person]
person=null
console.log(member)
/*Output:
[{…}]0: {[{…}]0: {name: 'Lydia'}length: 1[[Prototype]]: Array(0)name: 'Lydia'}length: 1[[Prototype]]: Array(0) */

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Question 14 - What's the Output?

const value={number:10}
const multiply=(x={...value})=>{
  console.log((x.number*=2))
}

multiply()
multiply()
multiply(value)
multiply(value)

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
//Question 15 - What's the Output ?

function changeAgeAndReference(person) {
  person.age = 25;
  person = {
    name: 'John',
    age: 50
  };

  return person;
}

const personObj1 = {
  name: 'Alex',
  age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // ---> {name: 'Alex', age: 25} , Because of this person.age = 25; age is changed to 25
console.log(personObj2); // ---> {name: 'John', age: 50}


