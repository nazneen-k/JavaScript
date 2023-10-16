/*Closures in JavaScript

Lexical Scope:
A function scope's ability to access variables from the parent scope is known as Lexical Scope.

Closure:
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
*/


//Example of Lexical Scope
var userName="Nazneen" //----> This is a Global Scope

function lexicalScopeExample(){
    //---> This is a Local Scope
    console.log(userName);
}
lexicalScopeExample()
/*The Reverse of this won't work
- We cannot access the variables from inside the function, we can access only from the outside i.e,. from the Global Scope. */


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Another Example

function outerFunction(){
    var name="Nazneen K"
    function innerFunction(){
        console.log(name)
    }
    innerFunction() //---> Calling the inner Function
}
outerFunction(); // ---> Calling the Outer Function.


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function outer(){
    var fullName="Nazneen K"
    function inner(){
        console.log(fullName)
    }
    inner();
}

// var calllingTheFunction = outer()
// calllingTheFunction()

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Question 1. What will be logged to Console?

let count =0;
(function printCount(){
    if(count === 0){
        let count=1; // Shadowing
        console.log(count)
    }
    console.log(count)
})(); //---> This is an IIFE - Immediately Invoked Function Expression

/*Question 2. Write a function that would allow you to do this
var addSix = createBase(6);
addSix(10); // Returns 16
addSix(21); // Returns 27
*/

function createBase(num){
     return function  (innerNum){
     console.log(innerNum+num) 
    };

}

var addSix = createBase(6);
addSix(10);
addSix(21); 
