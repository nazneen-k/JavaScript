var alp={x:3.6,y:7.4,z:6.54}
// var x=alp.x;
// var y=alp.y;
// var z=alp.z;

const {x,y,z}=alp

const {x:a, y:b ,z:c}=alp
console.log(b)


//Assign variables from neswted objects
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