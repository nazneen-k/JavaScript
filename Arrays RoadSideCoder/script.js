//Array Declaration

let arr=new Array() //Or let arr=[];
let person ={
    name:"Nazneen",
    age:"5"
}
//Array's can store any datatype inside it, including Objects.

let arrr=['Apple','Banana','Cherry',person];
console.log(arrr[3])
console.log(arrr[3].name)

//arr.length ---> returns the nos of elements in an array
console.log(arrr.length)

//Push and Pop, ---> these are the most commonly used array methods inorder to add or remove an element from end of the array
arrr.push("Orange")
console.log(arrr[4])

arrr.pop()
console.log(arrr)

// ***** Important ****** Push and Pop are more efficient than Shift and Unshift 
//Shift and Unshift, ---> these are the elements used to add or delete from the top of the array

//Add to the top of Array
arrr.unshift("App")
console.log(arrr)

//Delete the top of the Array
arrr.shift()
console.log(arrr)

//Looping an Array

for(let i =0;i<arrr.length;i++)
{
    console.log(arrr[i]+" ")
}

let index=0
while(index<arrr.length){
    console.log(arrr[index])
    index++
}

//Inbuilt Loop Methods


//Map ---> Returns a new Array, takes three Parameters inside it ie item, index and Array
const numbers=[1,2,3,4,5]
numbers.map((item,index,array)=>{
    console.log(item,index,array)
})

const addTen=numbers.map((item,index,array)=>{
   return item+10
})
console.log(addTen)


//Filter

const newNum = numbers.filter((item,index,array)=>{
    return item >3 

})
console.log(newNum)


//Reduce
/*
-It takes four parameters
- prevValue ---> Previous Value
-item
-index
-array
Or We can use only two parameters i.e., Previous Item and the Current Item
- It takes an Array and it reduces down to a single array
- We need to provide the initial Value 
- Remember this simple Syntax Example

const variableName = arrayName.reduce((previousItem,currentItem)=> {},0)
-here 0 is used at the end to indicate the Initial Value 
-*/
const sum=numbers.reduce((prev,item)=>{
    return prev+item
},0)
console.log(sum)


//Some Method
/*
- It returns either true or False */

const greaterThanThree= numbers.some((item,index,array)=>{
    return item>3;
})
console.log(greaterThanThree)