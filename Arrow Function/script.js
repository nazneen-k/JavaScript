//Arrow function Syntax:
const functionName = (parameters) => {
    // Function body
  };

//Example 1
var x=2
const square = x => x * x;
console.log(square(x))

//Example 2 - This and Arrow Function
const user={
    username:"Hitesh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="Sam";
// user.welcomeMessage()

// console.log(this)


//---------------------------------------------
// function chai(){
//     let username="Hit"
//     console.log(this.username)
// }
// chai() -----> Output of this is Undefined


// const chai=function(){
//     let username="Hit"
//     console.log(this.username)
// }
// chai() ------> Output of this is Undefined


// const chai=()=>{
//     let username="Hit"
//     console.log(this)
// }
// chai()  -------> Output for this is {} and for this.username is Undefined

//-----------------------------------------



//-----------------------------------
//**********IMPLICIT RETURN**********
//-----------------------------------

/*const addTwo =(num1,num2)=> {
    return num1+num2;
}
console.log(addTwo(2,3))

This is normal type of return for Arrow function
*/


const addTwo = (num1,num2)=>num1+num2;
console.log(addTwo(2,3))
/*This is Implicit return

Implicit return refers to the feature in JavaScript where an arrow function automatically 
returns the result of a single expression without needing the return keyword.
This applies when the function body consists of only one statement or expression. 

- Whenever {} braces are used, return keyword must be used


***Explicit Return***

-Explicit return refers to the use of the return keyword to explicitly specify the value that a function should return. 
In JavaScript, functions can return values using the return statement followed by the value to be returned.

-Explicit return is useful when you need to control exactly what value is returned from a function, 
especially when the function has multiple exit points or conditional logic.


*/

