//Before
// let user=["Yahoo Baba",25];
// let name=user[0];
// let age=user[1];

//ES6
// let [name,age]=user;

//To Destructure this:
//let user=["Yahooo Baaba",25,"Delhi"]

let user=["Yahooo Baaba",25,"Delhi"];
let [name,age,city]=user;
console.log(name); // Output ---> Yahooo Baaba
console.log(age); // Output ---> 25 
console.log(city)// Output ---> Delhi

// For Nested Array
let customer=["Yahoo",23,"Delhi",["Male",25000]]
let [cname,id,place,[gender,amount]]=customer;
console.log("Nested Array -  Customer Array")
console.log(cname)
console.log(id);
console.log(place);
console.log(gender);
console.log(amount)


//Rest Operator

let restt=["Yah",23,"Mumbai"]
let [rname,...args]=restt
console.log("***Rest Opeartor***");
console.log(rname)
console.log(args)


//Destructuring with functions

// function dfunction([dfname,dfage,dfcity]){
//     console.log(dfname);
//     console.log(dfage);
//     console.log(dfcity)
// }
// dfunction(["Destructing Function Name - Yahoooo","Destrucing Function Age - 23","Destructing City - Kolkata"])
//
// Else 
// |
// |

//Returing an  Array from function
function dfunction(){
    return ["Yahoo",23,"Kolkata"]
}
let [dfname,dfage,dfcity]=dfunction()
console.log(dfname);
console.log(dfage);
console.log(dfcity);

var alp={x:3.6,y:7.4,z:6.54}
// var x=alp.x;
// var y=alp.y;
// var z=alp.z;

const {x,y,z}=alp

const {x:a, y:b ,z:c}=alp
console.log(b)


//Assign variables from nested objects
const nest = {
    start:{x:5,y:6},
    end:{x:6,y:-9}
};

const {start:{x:startX,y:startY}}=nest
const {end:{x:endXY,y:endY}}=nest
console.log(startX)
console.log(endY)

/*
Here, nest is an object containing start and end properties, each of which is an object itself with x and y coordinates.
This line uses destructuring assignment to extract values from the nest object:

{ start: { x: startX, y: startY } } defines the structure to extract from nest. It says to look for the start property inside nest and extract
 its x and y values, assigning them to variables startX and startY, respectively. */


 //Assign variables from arrays
 const [q,,r]=[1,2,3,4]

 
 console.log(q,r)

 //Rest Operator to Reassign array elements

 const [p,s, ...rest]=[1,2,3,4]
 console.log(rest)


 //Pass an object as an function parameter

 const porfileUpdate =(proileData)=>{
    const  {name,age,nationality,location}=proileData
 }
