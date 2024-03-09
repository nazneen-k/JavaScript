/* Map()
The map() method of Array instances creates a new array populated with the results of calling 
a provided function on every element in the calling array.
*/

var ary=[11,4,9,16]
var b = ary.map(test);
function test(x){
    return x*10
}
document.write(b+"<br>")


var arrr=[
    { fname:"Yahoo",lname:"Baba"},
    { fname:"Rahul",lname:"Kumar"},
    { fname:"Karan",lname:"Sharma"}
]
var c= arrr.map(name);
function name(x){
    return x.fname +" "+ x.lname
}
document.write(c+"<br>")


//Roadsidecoder Interview Series

var arr = [12, 23, 34, 56, 78];
var multipliedByThree = arr.map((value) => {
  return value * 3;
});
console.log(multipliedByThree);
document.write(multiByThree+"<br>")



const arrrr=[3,4,5,6,7]
/*
const abc = arr.map(xyz)
function xyz(value){
return value+5
} 
*/

// console.log(abc)
const abc= arrrr.map((value,i,arr)=>{
  return value+3
})
document.write(abc)
// console.log(abc)
