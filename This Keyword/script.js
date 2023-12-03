const user={
    name:"Naz",
    age:0,
}

console.log(user.name) //---> Accessing the property

user.name="Nazneen K" //---> Modifying the property
console.log(user.name)

delete user.age //---> Deleting the property
console.log(user)

//-----------------------------------------------
//What will be output of this?
/*
const func = (func(a){
    delete a;
    return a;
}) (5)
console.log(func)

*/

const func = (function(a){
    delete a;
    return a;
}) (5);
console.log(func)  //---> Output: 5

/*
-  Here a is a local variable
- Delete keyword is only used when we want to delete properties from an object and not a local variable
- So its not going to effect at all */

//---------------------------------------------------

//Using the keys which will have spaces in between then use "" and while accesssing square brackets[]


const spacedKey={
    user:"Naz",
    "like this spaced keys":true
};

console.log(spacedKey["like this spaced keys"])

//-----------------------------------------------------

//Dynamically addding values

const property="firstName"
const name="Piyush Agarwal"

const users={
    [property]:name
}

console.log(users)

//--------------------------------------------------------
//Looping through Objects
const userss={
    name:"Roadside Coder",
    age:24,
    isTotallyAwesome:true,
}

// We are using for in loop

for(ke in userss){
    console.log(ke)
} //---> for getting the key 

for(val in userss){
    console.log(userss[val])
}




