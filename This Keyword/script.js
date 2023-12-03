const user = {
  name: "Naz",
  age: 0,
};

console.log(user.name); //---> Accessing the property

user.name = "Nazneen K"; //---> Modifying the property
console.log(user.name);

delete user.age; //---> Deleting the property
console.log(user);

//-----------------------------------------------
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

//---------------------------------------------------

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

//---------------------------------------------------
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

//-------------------------------------------------------
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
