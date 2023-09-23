// Multidimensional Array

var arr = [
  ["Harry", 18, "Male", "B Com"],
  ["Sunny", 18, "Male", "BCA"],
  ["Sarah", 17, "Female", "BCA"],
  ["Tom", 17, "Male", "BA"],
];
for (a = 0; a <= 3; a++) {
  for (b = 0; b < 4; b++) {
    document.write(arr[a][b] + " ");
  }
  document.write("<br>");
}

/* for Displaying the data in table Form   */

document.write("<table  border='1px' cellspacing='0'>");
var arr = [
  ["Harry", 18, "Male", "B Com"],
  ["Sunny", 18, "Male", "BCA"],
  ["Sarah", 17, "Female", "BCA"],
  ["Tom", 17, "Male", "BA"],
];
for (a = 0; a <= 3; a++) {
  document.write("<tr>");
  for (b = 0; b < 4; b++) {
    document.write("<td>" + arr[a][b] + " </td>");
  }
  document.write("<br>");
  document.write("<tr>");
}

document.write("</table>");





// Modify Array Elements

var a = ["Harry", 18, "BCA"];
document.write(a + "<br>");
a[1] = 19;
document.write(a + "<br>");





// Delete an Element

var a = ["Harry", 18, "BCA"];
delete a[1];
document.write(
  a + "<br> <br>"
); /* Only The Element gets Delted but the Index doesnt Get Deleted, When the   a[1] --->  is printed it prints Undefined*/






// Array Methods

/* 
sort()
reverse()
pop()
push()
shift()
unshift()
concat()
join()
join()
slice()
splice()
isArray()
indexOf()
lastIndexOf()
entries()
every()
filter()
find()
findIndex()
includes()
some()
forEach()
toString()
valueOf()
fill()
 */



// Sorting
var a = ["Sanjay", "Aman", "Rahman", "Karan"];

document.write(a + "<br>");
a.sort();
document.write(a+"<br>");

// Reverse
a.reverse();
document.write(a+"<br>");

// Pop
/* Deletes only the last value from the Array */
a.pop()
document.write(a+"<br>"); 


/* Push
Add the value to the end of the array 
Make sure to pass the value in the Push Method */
a.push("Arjun")    
document.write(a+"<br>"); 
a.push("Salman")
document.write(a+"<br>");

/*Shift
Used to delete the element from the first, Works opposite to the Pop() method.
 */

a.shift() 
document.write(a+"<br>"); 


/*Unshift
Used to add Values to the start of the array */
a.unshift("Vikram")
document.write(a+"<br>")


/*Concat 
var b=["Karan","Rahul"]
*/

// Method 1
var b=a.concat("Karan","Rahul")
document.write(b+"<br>")

// Method 2
var c=["Karan","Arjun","Rahul"]
var d=["Tom","Cruise"]
var f=["Xyz","Abc"]
var e=c.concat(d,f)
document.write(e+"<br>")

/*Join
The join() method returns an array as a string.
The join() method does not change the original array.
 */

var g=e.join(" ")
document.write(g+"<br>")

document.write(typeof(g)+"<br><br>") /* Output ---> String */



/*Slice 
The slice() method returns selected elements in an array, as a new array.
The slice() method selects from a given start, up to a (not inclusive) given end.
The slice() method does not change the original array.
*/

var aa=["Sanjay","Aman","Rehman","Rahul","Karan"]
var bb=aa.slice(1,4)
document.write(bb+"<br><br>")



/*Splice
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.
 */

var aaa=["Sanjay","Aman","Rehman","Rahul"]
aaa.splice(2,0,"Neha","Karan")
document.write(aaa+"<br>")
aaa.splice(2,1)
document.write(aaa+"<br><br>")
