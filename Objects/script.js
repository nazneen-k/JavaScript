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
