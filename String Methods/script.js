//String Methods

var str="JavaScript is a Great Language"

// Length 
var str="JavaScript is a Great Language"

var a= str.length;
document.write(a+"<br>")  //---> It counts even the Spaces

//toLowerCase()
var a=str.toLowerCase();
document.write(a+"<br>")

//toUpperCase()
var a=str.toUpperCase();
document.write(a+"<br>")

//includes()
//It is used for the purpose of searching, it returns either True or False
//It is a Case Sensitive Function
var a=str.includes("Gre") //----> Returns True
document.write(a+"<br>") 

var a=str.includes("GREAT") //--->Returns False as it is Case Sensitive
document.write(a+"<br>")

//startsWith()
//Used for searching, returns either True or False
//It is also Case Sensitive
var a=str.startsWith("Java")
document.write(a+"<br>")

//endsWith()
var a=str.endsWith("e")
document.write(a+"<br>")

//search()
//It returns the position of the searched string.
//If the string is not found then it returns -1.
var a=str.search("e")
document.write(a+"<br>")

//match()
//It collects all of them and makes an array
//Make to use the regular expressions
var a=str.match(/a/g)  // g---> used for global in Regular Expression
document.write(a+"<br>")

//indexOf()
//It is similar to search() method, it also returns the index it returns the first index
var a=str.indexOf("e")
document.write(a+"<br>")

//lastIndexOf()
//It starts to search from the last in the string
var a=str.lastIndexOf("e")
document.write(a+"<br>")

//replace()
//By default it only replaces the first Occurrance of the String, in order to change all the occurrance we should use Regular Expression
var a=str.replace("e", "ee")
document.write(a+"<br>")

var a=str.replace(/e/g,"ee")
document.write(a+"<br>")

//trim()
//It is used to trim the spaces present at the left and right side of the string
var b= "           JavaScript        "
var bb=b.trim()
document.write(bb+"<br>")
alert(bb)





