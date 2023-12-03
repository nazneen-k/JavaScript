//Question 1 - What's the Output?
const user={
    firstName:"Piyush",
    getName(){
        const firstName="Piyush Agarwal"
        return this.firstName;
    },
}

console.log(user.getName())
//Output ---> Piyush
//This keyword references to the Objects

//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//Question 2 - What is the result of accessing  its ref? Why?

function makeUser(){
    return{
        name:"John",
        ref:this,
    }
}

let userr = makeUser();
console.log(userr)


//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//Question 3 Whats the output?
const userrr={
    name:"Piyush agarwal",
    logMessage(){
        console.log(this.name)
    }
}

setTimeout(user.logMessage,1000)


//--------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------
//Question 5 - Create an  Object Calculator

let calculator={
    read(){
        this.a=+prompt("a=",0)
        this.b=+prompt("b=",0)
    },

    sum(){
        return this.a+this.b;
    },

    mul(){
        return this.a*this.b;
    }
}

calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())
