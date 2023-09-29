/* Types of loop in JavaScript
- while loop
- d0/while loop
- for loop
- forEach
- for/in loop


For-in loop in JavaScript is used to iterate over the properties of an object.
It can be a great debugging tool if we want to show the contents of an object.
The for-in loop iterates only over those keys of an object which have their enumerable property set to “true”.

Important Points:

- Use the for-in loop to iterate over non-array objects. Even though we can use a for-in loop for an array, it is generally not recommended.
  Instead, use a for loop for looping over an array.
- The properties iterated with the for-in loop also include the properties of the objects higher in the Prototype chain.
- The order in which properties are iterated may not match the properties that are defined in the object.
*/

var obj={
    firstName:"Yahoo",
    LastName:"Baba",
    Age:25,
    email:'hello@yahoobaba.net'
};

for(var key in obj){
    document.write(obj[key]+"<br>")
}
/*
Output:
Yahoo
Baba
25
hello@yahoobaba.net
*/

for(var i in obj){
    document.write(i +" : "+obj[key]+"<br>")
}
/*
Output:
firstName : hello@yahoobaba.net
LastName : hello@yahoobaba.net
Age : hello@yahoobaba.net
email : hello@yahoobaba.net
*/

/* var obj  --> The var obj can be any Variable name. 
  - var key --> The var key can also be any name. 
*/